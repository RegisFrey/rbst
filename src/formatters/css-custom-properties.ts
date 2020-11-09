import { ResolvedTokenGroup } from "../types/Tokens";

interface Options {
    /**
     * Wrap the generated custom properties
     * within a selector.
     * Defaults to :root
     */
    selector: string
}

/**
 * HelloWorld -> --hello-world
 * hello-world -> --hello-world
 * HELLOWORLD -> --helloworld (if all caps don't kabob)
 * hello_world -> --hello-world
 */
export function formatCustomPropertyName (name: string): string {
    return name;
}

export function tokensAsCSSCustomProperties (tokens: ResolvedTokenGroup, formatName = formatCustomPropertyName): string {
    return '';
}