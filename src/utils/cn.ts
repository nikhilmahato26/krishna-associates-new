/**
 * Tiny classname joiner — no runtime dependency on clsx.
 * Accepts strings, undefined, false — filters out falsy values.
 */
export const cn = (...classes: (string | undefined | false | null)[]): string =>
  classes.filter(Boolean).join(' ');
