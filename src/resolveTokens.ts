import { ResolvedTokenGroup, TokenDefinition, TokenGroup, ResolvedToken, SizeUnit } from "./types/Tokens";

export function resolveTokens(tokenGroup: TokenGroup) : ResolvedTokenGroup {
    const emptyTokensPlaceholder = [];
    return stripNonexportedTokens(emptyTokensPlaceholder);
}

export function resolveToken(token: TokenDefinition) : ResolvedToken {
    return {
        path: [],
        value: 0,
        originalValue: '',
        unit: SizeUnit.Pixels,
        type: 'NONE',
        export: true
    }
}

function stripNonexportedTokens (tokenGroup: ResolvedTokenGroup): ResolvedTokenGroup {
    return tokenGroup.filter(token => token.export);
}