# svelte-adapter-executable

transform a svelte library into a single, neatly packaged executable.

```sh
pnpm i -D svelte-adapter-executable
```

## Usage

You need to install one of the three supported adapters:

- [`@sveltejs/adapter-node`](https://www.npmjs.com/package/@sveltejs/adapter-node) for [@yao-pkg/pkg](https://github.com/yao-pkg/pkg), [nexe](https://github.com/nexe/nexe), or [SEA](https://nodejs.org/api/single-executable-applications.html) support.
- ~~[`@svelte-adapter-deno`](https://github.com/pluvial/svelte-adapter-deno) for [deno compile](https://docs.deno.com/runtime/manual/tools/compiler/) support.~~ (blocked by [pluvail/svelte-adapter-deno#45](https://github.com/pluvial/svelte-adapter-deno/issues/45))
- [`@svelte-adapter-bun`](https://github.com/gornostay25/svelte-adapter-bun) for [bun build](https://github.com/gornostay25/svelte-adapter-bun) support.

Then, import the adapter as so:

```ts
// where sea can also be bun, deno, nexe, or yaopkg.
import adapter from 'svelte-adapter-executable/adapter/sea';
```
