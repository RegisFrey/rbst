import { resolveTokens } from "../src/resolveTokens";
import { TokenGroup } from "../src/Tokens";

export const colorTokens: TokenGroup = {
    tokens: {
        blue: '#B22222',
        green: '#32CD32',
    },
    prefix: 'color',
    category: 'color'
}

export const spacingTokens: TokenGroup = {
    tokens: {
        blue: '#B22222',
        green: '#32CD32',
    },
    prefix: 'space',
    category: 'spacing'
}

export const tokens = [
    resolveTokens(colorTokens),
    resolveTokens(spacingTokens)
]