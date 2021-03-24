import { ResolvedTokenGroup, TokenDefinition, TokenGroup, ResolvedToken, SizeUnit } from "./types/tokens";

export function resolveTokens(tokenGroup: TokenGroup) : ResolvedTokenGroup {
    
    const dynamicTokenResolutionStack = []
    function resolveDynamicToken (key) {
        // check for circular
        // dynamicTokenResolutionStack.includes(key)
        // const dependencyEntry = dynamicTokenResolutionStack[0];
        // const dependencyChain = dynamicTokenResolutionStack.join(' → ')
        // throw new Error(`[rBST] Circlular dependency in dynamic token. ${dependencyEntry} relies on itself. ${dependencyChain}`)
        dynamicTokenResolutionStack.push('key')
        // when do we pop? when a function returns a non-function token value
    }
    
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