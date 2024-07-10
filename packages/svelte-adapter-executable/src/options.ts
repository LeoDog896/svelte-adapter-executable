export interface AdapterExecutableCommonOptions {
	/** What file the executable should go into. */
	outFile: string | ((extension: string) => string);
}
