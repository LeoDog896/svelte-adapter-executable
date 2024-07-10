import type { AdapterExecutableCommonOptions } from "../options";
import type { UnbrandedAdapter } from "../util/unbrandedAapter";
import adapter, { type BuildOptions } from "svelte-adapter-bun"
import { temporaryDirectory } from "tempy";

/**
 * Options for Bun's [Single-file executable](https://bun.sh/docs/bundler/executables) subcommand,
 * backed by [svelte-adapter-bun](https://github.com/gornostay25/svelte-adapter-bun).
 */
export interface BunBuilderOptions extends AdapterExecutableCommonOptions {
    bun: Omit<BuildOptions, 'out'>
};

export default function bunAdapter(options: BunBuilderOptions): UnbrandedAdapter {
    const tempOutDir = temporaryDirectory();
    
    const constructedAdapter = adapter({
        ...options.bun,
        out: tempOutDir
    });

    return {
        ...constructedAdapter,
        async adapt(builder) {
            // Wait for the node app to be constructed; it will be available at `tempOutDir`
            await constructedAdapter.adapt(builder);
            // TODO: build construction
        }
    }
}
