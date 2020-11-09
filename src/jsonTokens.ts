// handle the loading of json tokens

import { ResolvedTokenGroup } from "./types/Tokens";

// why json / yaml
// A: focus, simplicity, easy to read and edit

// why is json + importing useful?

// A1: to use nesting to apply groups to multiple
// we can do that in single file

// A2: to reduce file and add focus
// can the import file be typescript? why not?

// SO: Imports MUST be done via a typescript/javascript file
// but simple definitions can be json or yaml.
// file resolution, loading, and parsing is handled 
// by your bundler or environemnt (node/browser)

export function tokensFromJson (json: string) : ResolvedTokenGroup {
    const obj = JSON.parse(json);
    return [];
}