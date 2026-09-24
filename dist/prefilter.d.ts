/**
 * Answers "could this pattern match this title?" with a few bit tests, so the
 * parser can skip regexes that cannot match. Around 2% of handler patterns
 * match any given title.
 *
 * The filter is one-sided: it may pass a pattern that cannot match, but it must
 * never reject one that could. Every approximation here is chosen to fail in
 * that direction.
 *
 * Presence is approximate. The title's 2- and 3-grams are hashed into a bitset
 * and a literal counts as present when all of its grams are, so a literal that
 * really is in the title always passes and an absent one rarely does.
 */
import { Handler } from './types.js';
/**
 * Gram set over the working title. Between resets bits are only ever added, so
 * the set stays a superset of the current title's grams as the parser removes
 * matched text from it.
 */
export declare class GramSet {
    readonly bits: Uint32Array<ArrayBuffer>;
    nonAscii: boolean;
    reset(title: string): void;
    /**
     * Re-adds the grams around `at` after a slice was removed there. Only the
     * seam is new; every other gram of the shortened title was already a gram of
     * the longer one.
     */
    spliced(title: string, at: number): void;
    private addRange;
}
/** Groups of literals that must ALL be satisfied for `pattern` to match. */
export declare function deriveLiteralGroups(pattern: RegExp): string[][];
export interface Prefilter {
    /** Up to three unconditionally required grams per handler, -1 where absent. */
    readonly gram0: Int32Array;
    readonly gram1: Int32Array;
    readonly gram2: Int32Array;
    /** Offset into `gates` for handlers needing the general test, else -1. */
    readonly gateOff: Int32Array;
    readonly gates: Int32Array;
    /** Handlers that must always run when the title has non-ASCII text. */
    readonly unicodeSensitive: Uint8Array;
    readonly gatedCount: number;
}
export declare function buildPrefilter(handlers: Handler[]): Prefilter;
/** General gate: AND over groups, OR over a group's alternatives. */
export declare function gateAllows(gates: Int32Array, offset: number, bits: Uint32Array): boolean;
/** A gate table that rejects nothing, so every pattern runs. */
export declare function openPrefilter(size: number): Prefilter;
/**
 * Prefilter for a handler list, built once per list. Parser.addHandler appends
 * to a list that may already have been compiled, so the cached entry is only
 * reused while the length still matches.
 */
export declare function prefilterFor(handlers: Handler[]): Prefilter;
//# sourceMappingURL=prefilter.d.ts.map