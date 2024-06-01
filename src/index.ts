import {
  map,
  NumberKeyValue,
  rule,
  withMapper,
  writeToProfile,
} from 'karabiner.ts'

writeToProfile('hyunjoon - magic keyboard japanese', [
  rule('Japanese keys').manipulators([
    map('japanese_eisuu', 'optionalAny').to('left_command'),
    map('left_command', 'optionalAny').to('left_option'),
    map('japanese_kana', 'optionalAny').toMeh(),
  ]),

  rule('Number keys').manipulators([
    map('1', 'optionalAny').to('grave_accent_and_tilde'),
    //          1, 2, 3, 4, 5, 6, 7, 8, 9
    withMapper([2, 3, 4, 5, 6, 7, 8, 9, 0])((k, i) =>
      map(k as NumberKeyValue, 'optionalAny').to((i + 1) as NumberKeyValue)
    ),
    map('-', 'optionalAny').to('0'),
    map('=', 'optionalAny').to('hyphen'),
    map('international3', 'optionalAny').to('equal_sign'),
  ]),

  rule('Meh esdf to arrow keys').manipulators([
    map('s', 'Meh').to('left_arrow'),
    map('e', 'Meh').to('up_arrow'),
    map('d', 'Meh').to('down_arrow'),
    map('f', 'Meh').to('right_arrow'),
  ]),
])
