declare global {
    interface Window {
        RBST_IN_RUNTIME:boolean|undefined;
    }
}

export function runtimeWarning () {
    if (window && console && !window.RBST_IN_RUNTIME) {
        console.warn(
            "It appears you've included Regis' Basic Style Tokens (rBST) " +
            "in a browser bundle. You probably don't need this code at runtime.\n" +
            "Look into using the webpack loader to prepare tokens at build time.\n" +
            "If you are intentionally including rBST at runtime, you can add a flag" +
            "to `window` to disable this message. I.E. `window.RBST_IN_RUNTIME = true`."
        )
    }
}