throw new Error(`Don't import the main module of "svelte-adapter-executable". 
Instead, import one of the subdirectories:

import adapter from 'svelte-adapter-executable/adapter/bun';

`);
