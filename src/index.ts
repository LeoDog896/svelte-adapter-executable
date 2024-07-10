import type { Adapter } from '@sveltejs/kit';

/**
 * Options for the [@yao-pkg/pkg](https://github.com/yao-pkg/pkg) executable builder,
 * the continuation of the abandoned [pkg](https://github.com/vercel/pkg).
 */
interface YaoPkgOptions {
    type: '@yao-pkg/pkg'
}

/**
 * Options for the [nexe](https://github.com/nexe/nexe) builder.
 */
interface NexeBuilderOptions {
    type: 'nexe'
}

/**
 * Options for Node.JS's experimental [Single executable applications](https://nodejs.org/api/single-executable-applications.html)
 * toolkit.
 */
interface SeaBuilderOptions {
    type: 'sea'
}

/**
 * Options for Deno's [compile](https://docs.deno.com/runtime/manual/tools/compiler/) subcommand,
 * backed by [svelte-adapter-deno](https://github.com/pluvial/svelte-adapter-deno)
 */
interface DenoBuilderOptions {
    type: 'deno'
}

/**
 * Options for Bun's [Single-file executable](https://bun.sh/docs/bundler/executables) subcommand,
 * backed by [svelte-adapter-bun](https://github.com/gornostay25/svelte-adapter-bun).
 */
interface BunBuilderOptions {
    type: 'bun'
}

type ExecutableBuilder = YaoPkgOptions | NexeBuilderOptions | SeaBuilderOptions | DenoBuilderOptions | BunBuilderOptions;

export interface AdapterExecutableOptions {
    out: string;
    builder: ExecutableBuilder
}

export const adapterExecutableOptionsDefault: Readonly<AdapterExecutableOptions> = Object.freeze({
    out: 'build',
    builder: {
        type: 'sea'
    }
} as const);

export default function(opts: Partial<AdapterExecutableOptions> = {}) {
    const {
        out
    } = { ...adapterExecutableOptionsDefault, ...opts };

    const adapter: Adapter = {
        name: 'svelte-adapter-executable',
        async adapt(builder) {
            const tmp = builder.getBuildDirectory('adapter-executable');

            builder.rimraf(tmp);
            builder.rimraf(out);
        }
    }
}
