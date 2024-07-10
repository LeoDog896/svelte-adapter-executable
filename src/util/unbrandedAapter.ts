import type { Adapter } from "@sveltejs/kit";

export type UnbrandedAdapter = Omit<Adapter, "name">;
