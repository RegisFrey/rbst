import { ResolvedTokenGroup } from "./types/Tokens";

const registeredFormats = {
    'css-modules': () => {},
    'css-custom-properties': () => {},
    'json': () => {},
    'sass': () => {},
}

export function registerFormat (format: string, formatter: () => any) {

}

export function formatTokens (tokens: ResolvedTokenGroup, format: string) {

}