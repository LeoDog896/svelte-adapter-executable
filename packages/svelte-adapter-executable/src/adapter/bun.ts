import type { Adapter } from "@sveltejs/kit";
import type { AdapterExecutableCommonOptions } from "../options.js";
import adapter, { type BuildOptions } from "svelte-adapter-bun"
import { temporaryDirectory } from "tempy";

export const platforms = Object.freeze(['linux-x64', 'linux-arm64', 'windows-x64', 'windows-arm64', 'darwin-x64', 'darwin-arm64'] as const);
export type Platform = typeof platforms;

/**
 * Options for Bun's [Single-file executable](https://bun.sh/docs/bundler/executables) subcommand,
 * backed by [svelte-adapter-bun](https://github.com/gornostay25/svelte-adapter-bun).
 */
export interface BunBuilderOptions<T extends Platform[number][]> extends AdapterExecutableCommonOptions<Platform, T> {
    bun?: Omit<BuildOptions, 'out'>;
};

export default function bunAdapter<T extends Platform[number][]>(options: BunBuilderOptions<T>): Adapter {
    const tempOutDir = temporaryDirectory();
    
    const constructedAdapter = adapter({
        ...options.bun,
        out: tempOutDir
    });

    return {
        ...constructedAdapter,
        name: 'svelte-adapter-executable/bun',
        async adapt(builder) {
            // Wait for the node app to be constructed; it will be available at `tempOutDir`
            await constructedAdapter.adapt(builder);
            // TODO: build construction
            
        }
    }
}
