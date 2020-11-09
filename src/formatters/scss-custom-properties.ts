import { ResolvedTokenGroup, TokenGroup } from "../types/Tokens";
import { tokensAsCSSCustomProperties } from "./css-custom-properties";

interface Options {
    /**
     * Name the mixin that contains
     * the custom properties.
     * 
     * e.g. if mixinName is "darkThemeTokens"
     * then usage in SCSS is `@include darkThemeTokens`
     */
    mixinName: string,
    /**
     * Generate a :root tag that `@include`s the mixin.
     * 
     * NOTE: this will generate output 
     * instead of a purely mixin and variables file.
     */
    includeInRoot: boolean,
    /**
     * Generate a selector rule that `@include`s the mixin
     * 
     * Empty sring disables and is the default.
     * 
     * NOTE: this will generate output 
     * instead of a purely mixin and variables file.
     */
    includeInSelector: string,
    /**
     * Include SCSS variables that map to custom property names.
     * E.g. `$color-red: var(--color-red);`
     */
    variables: boolean
}

const optionDefaults: Options = {
    mixinName: 'CustomProperties',
    includeInRoot: false,
    includeInSelector: '',
    variables: true,
}

/**
 * HelloWorld -> $hello-world
 * hello-world -> $hello-world
 * HELLOWORLD -> $helloworld (if all caps don't kabob)
 * hello_world -> $hello-world
 */
function formatScssVariableName (name: string): string {

}

function tokensAsScssVarsToCustomProperties (tokens: ResolvedTokenGroup, formatCustomPropertyName = formatCustomPropertyName, ): string {
    return '';
}

function format (tokens: ResolvedTokenGroup, options: Partial<Options>) {
    Object.assign({}, optionDefaults, options);
    const customProperties = tokensAsCSSCustomProperties(tokens);
    let output = `@mixin ${options.mixinName} {\n${customProperties}\n}`;
    if (options.includeInRoot) {
        output += `\n:root { @include ${options.mixinName} }`
    }
    if (options.includeInSelector) {
        output += `\n${options.includeInSelector} { @include ${options.mixinName} }`
    }
    if (options.variables) {
        tokensAsScssVarsToCustomProperties(tokens);
    }

    const template = `sass
        @mixin ${options.mixinName} {
            --css-variable: value;
        }

        ${options.mixinName} {
            @include ${options.mixinName};
        }

        $sass-variable: var(--css-variable);
    `;
}

