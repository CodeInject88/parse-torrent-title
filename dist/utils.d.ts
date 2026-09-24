/**
 * Utility regex patterns and helper functions
 * Matching ptt.go patterns
 */
import type { ParseMeta } from './types.js';
export declare const extensions = "3g2|3gp|avi|flv|mkv|mk3d|mov|mp2|mp4|m4v|mpe|mpeg|mpg|mpv|webm|wmv|ogm|divx|ts|m2ts|iso|vob|sub|idx|ttxt|txt|smi|srt|ssa|ass|vtt|nfo|html";
export declare const NON_ENGLISH_CHARS = "\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FFF\\u0400-\\u04FF";
export declare const russianCastRegex: RegExp;
export declare const altTitlesRegex: RegExp;
export declare const notOnlyNonEnglishRegex: RegExp;
export declare const notAllowedSymbolsAtStartAndEndRegex: RegExp;
export declare const remainingNotAllowedSymbolsAtStartAndEndRegex: RegExp;
export declare const movieIndicatorRegex: RegExp;
export declare const releaseGroupMarkingAtStartRegex: RegExp;
export declare const releaseGroupMarkingAtEndRegex: RegExp;
export declare const beforeTitleRegex: RegExp;
export declare const nonDigitRegex: RegExp;
export declare const nonDigitsRegex: RegExp;
export declare const nonAlphasRegex: RegExp;
export declare const underscoresRegex: RegExp;
export declare const whitespacesRegex: RegExp;
export declare const redundantSymbolsAtEnd: RegExp;
export declare const trailingEpisodePattern: RegExp;
export declare const curlyBrackets: string[];
export declare const squareBrackets: string[];
export declare const parentheses: string[];
export declare const brackets: string[][];
/**
 * Clean title matching Go clean_title function
 */
export declare function cleanTitle(rawTitle: string): string;
export declare const wordCharRegex: RegExp;
/**
 * Extract the episode title from the parser's final working string.
 *
 * `start` is the index just past the episode marker (or where the removed
 * marker used to be). The episode title is the run of tokens connected by
 * SINGLE separators; runs of 2+ separators ("scars" left where marker text
 * was removed), brackets and slashes end it. A capture terminated by a
 * closing bracket means we were inside a bracket group, i.e. not a title.
 */
export declare function extractEpisodeTitle(w: string, start: number, group?: string): string | null;
export declare function extractGroup(w: string, result: Map<string, ParseMeta>): {
    value: string;
    index: number;
} | null;
/**
 * Start/end offset pairs for a match and each of its groups, in the layout Go's
 * FindStringSubmatchIndex produces. Absent groups get -1, -1.
 */
export declare function matchIndices(match: RegExpExecArray, str: string): number[];
/**
 * Helper to get all regex match indices (like Go FindStringSubmatchIndex)
 */
export declare function getMatchIndices(regex: RegExp, str: string): number[];
//# sourceMappingURL=utils.d.ts.map