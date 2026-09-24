/**
 * Validators - matching Go validate_* functions
 */
export function validateOr(...validators) {
    return (input, idxs) => {
        return validators.some((v) => v(input, idxs));
    };
}
export function validateAnd(...validators) {
    return (input, idxs) => {
        return validators.every((v) => v(input, idxs));
    };
}
export function validateLookbehind(pattern, flags, polarity) {
    const flagStr = flags.toLowerCase().replace(/[^gimsuy]/g, '');
    const re = new RegExp(pattern + '$', flagStr);
    return (input, match) => {
        const rv = input.substring(0, match[0]);
        if (polarity) {
            return re.test(rv);
        }
        return !re.test(rv);
    };
}
export function validateLookahead(pattern, flags, polarity) {
    const flagStr = flags.toLowerCase().replace(/[^gimsuy]/g, '');
    const re = new RegExp('^' + pattern, flagStr);
    return (input, match) => {
        const rv = input.substring(match[1]);
        if (polarity) {
            return re.test(rv);
        }
        return !re.test(rv);
    };
}
export function validateNotAtStart() {
    return (input, match) => {
        return match[0] !== 0;
    };
}
export function validateNotAtEnd() {
    return (input, match) => {
        return match[1] !== input.length;
    };
}
export function validateNotStartSpaced() {
    return (input, match) => {
        if (match[0] !== 0)
            return true;
        return !/\s$/.test(input.substring(match[0], match[1]));
    };
}
export function validateNotMatch(re) {
    return (input, match) => {
        const rv = input.substring(match[0], match[1]);
        return !re.test(rv);
    };
}
export function validateMatch(re) {
    return (input, match) => {
        const rv = input.substring(match[0], match[1]);
        return re.test(rv);
    };
}
export function validateMatchedGroupsAreSame(...indices) {
    return (input, match) => {
        const first = input.substring(match[indices[0] * 2], match[indices[0] * 2 + 1]);
        for (let i = 1; i < indices.length; i++) {
            const index = indices[i];
            const other = input.substring(match[index * 2], match[index * 2 + 1]);
            if (other !== first) {
                return false;
            }
        }
        return true;
    };
}
//# sourceMappingURL=validators.js.map