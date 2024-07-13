export interface AdapterExecutableCommonOptions<Platforms extends readonly string[], Targets extends Platforms[number][]> {
	/**
	 * What file the executable should go into.
	 * 
	 * If a string is passed, the binary will be named by {out}/{target}{.extension}
	 * 
	 * If a function is passed, the file is moved appropiately depending on the platform
	 */
	out?: string | ((platform: Targets[number]) => string);
	/** The targets to be emitted by this adapter. */
	targets: Targets
}
