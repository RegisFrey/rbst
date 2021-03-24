import kebabCase from 'voca/kebab_case'
import { ResolvedTokenGroup } from "../types/tokens";
import { formatCustomPropertyName, tokensAsCSSCustomProperties } from "./css-custom-properties";

export interface Options {
    /**
     * Name the mixin that contains
     * the custom properties.
     * 
     * e.g. if mixinName is "darkThemeTokens"
     * then usage in SCSS is `@include darkThemeTokens`
     */
    mixinName: string
    /**
     * Generate a :root tag that `@include`s the mixin.
     * 
     * NOTE: this will generate CSS output upon SASS compilation
     * instead of a purely mixin and variables file.
     */
    includeInRoot: boolean
    /**
     * Generate a selector rule that `@include`s the mixin
     * 
     * Empty sring disables and is the default.
     * 
     * NOTE: this will generate CSS output upon SASS compilation
     * instead of a purely mixin and variables file.
     */
    includeInSelector: string
    /**
     * Include SCSS variables that map to custom property names.
     * E.g. `$color-red: var(--color-red);`
     */
    variables: boolean
    /**
     * Provide a function to format property names.
     * Must include the `--` prefix.
     * Default is kebab case. 
     */
    formatPropertyName?: (name: string) => string
}

//  formatCustomPropertyName = formatCustomPropertyName, 

const optionDefaults: Options = {
    mixinName: 'CustomProperties',
    includeInRoot: false,
    includeInSelector: '',
    variables: true
}

/** Converts a key into the SCSS variable naming convention. E.g. `exampleName` -> `$example-name` */
export function formatScssVariableName (name: string): string {
    return '$' + kebabCase(name);
}

export function tokensAsScssVarsToCustomProperties (tokens: ResolvedTokenGroup): string {
    return formatScssVariableName() + ': ' + '' ;
}

export function format (tokens: ResolvedTokenGroup, options: Partial<Options>) {
    const _options = Object.assign({}, optionDefaults, options);
    const { formatPropertyName } = _options
    const customProperties = tokensAsCSSCustomProperties(tokens, { formatPropertyName });
    let output = `@mixin ${_options.mixinName} {\n${customProperties}\n}`;
    if (_options.includeInRoot) {
        output += `\n:root { @include ${_options.mixinName} }`
    }
    if (_options.includeInSelector) {
        output += `\n${_options.includeInSelector} { @include ${_options.mixinName} }`
    }
    if (_options.variables) {
        tokensAsScssVarsToCustomProperties(tokens);
    }
}

