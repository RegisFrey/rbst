import kebabCase from 'voca/kebab_case'
import { ResolvedTokenGroup, ResolvedToken } from '../types/tokens';
import { valueForCSS } from '../transformers/css'

export interface Options {
    /**
     * Selector to wrap the generated custom properties in.
     * Defaults to :root
     */
    selector: string
    /**
     * Should generated tokens preserve user comments?
     * Default removes them.
     */
    preserveComments: boolean
    /**
     * Provide a function to format property names.
     * Must include the `--` prefix.
     * Default is kebab case. 
     */
    formatPropertyName: (name: string) => string
    /**
     * Provide a function to format property values.
     * Default is formatting for CSS. 
     */
    formatPropertyValue: (token: ResolvedToken) => string
    /**
     * Indentation: e.g. a single tab, 2 spaces, 4 spaces.
     * Default is 4 spaces.
     */
    indentation: string
}

const defaultOptions: Options = {
    selector: ':root',
    preserveComments: false,
    formatPropertyName: formatCustomPropertyName,
    formatPropertyValue: valueForCSS,
    indentation: '    ',
}

/** Converts a key into the CSS Custom Property naming convention. E.g. `exampleName` -> `--example-name` */
export function formatCustomPropertyName (name: string): string {
    return '--' + kebabCase(name);
}

/** Converts tokens into a block of CSS Custom Properties */
export function tokensAsCSSCustomProperties (tokens: ResolvedTokenGroup, options?: Partial<Options>): string {
    const _options = Object.assign({}, defaultOptions, options)
    tokens.map(token => {
        const tokenString = 
            (_options.preserveComments ? _options.indentation + '/** ' + token.comment + ' */' : '' )
            _options.indentation +
            _options.formatPropertyName(name) +
            '{ ' + _options.formatPropertyValue(token) + ' }'
        return tokenString;
    })
    return tokens.join('\n');
}

/** Converts tokens into a selector wrapped block of CSS Custom Properties */
export function format (tokens: ResolvedTokenGroup, options?: Partial<Options>): string {
    const _options = Object.assign({}, defaultOptions, options);
    return _options.selector + '{\n' + tokensAsCSSCustomProperties(tokens, _options) + '\n}';
}