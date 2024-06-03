import { NumberKeyValue, map, rule, withMapper } from 'karabiner.ts'

export const progressiveRule = rule('Progressive').manipulators([
  withMapper({
    // First row
    u: 'y',
    i: 'u',
    o: 'i',
    p: 'o',
    open_bracket: 'p',
    // Second row
    j: 'h',
    k: 'j',
    l: 'k',
    semicolon: 'l',
    quote: 'semicolon',
    backslash: 'quote',
    // Third row
    n: 'b',
    m: 'n',
    comma: 'm',
    period: 'comma',
    slash: 'period',
    international1: 'slash',

    japanese_kana: 'spacebar',
  } as const)((fromKey, toKey) => map(fromKey, 'optionalAny').to(toKey)),
])

export const numberKeysRule = rule('Number keys').manipulators([
  map('1', 'optionalAny').to('grave_accent_and_tilde'),
  //          1, 2, 3, 4, 5, 6, 7, 8, 9
  withMapper([2, 3, 4, 5, 6, 7, 8, 9, 0])((k, i) =>
    map(k as NumberKeyValue, 'optionalAny').to((i + 1) as NumberKeyValue)
  ),
  map('-', 'optionalAny').to('0'),
  map('=', 'optionalAny').to('hyphen'),
  map('international3', 'optionalAny').to('equal_sign'),
])

export const cursorMotionRules = rule('Cursor motion').manipulators([
  map('s', 'Meh').to('left_arrow'),
  map('e', 'Meh').to('up_arrow'),
  map('d', 'Meh').to('down_arrow'),
  map('f', 'Meh').to('right_arrow'),
  map('w', 'Meh').to('left_arrow', 'option'),
  map('r', 'Meh').to('right_arrow', 'option'),
])
