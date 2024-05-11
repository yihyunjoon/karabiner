import {
  layer,
  map,
  NumberKeyValue,
  rule,
  withMapper,
  writeToProfile,
} from 'karabiner.ts'

writeToProfile('tobark', [
  rule('R Command to Meh').manipulators([map('right_command').toMeh()]),
  rule('Meh asdf to arrow keys').manipulators([
    map('a', 'Meh').to('left_arrow'),
    map('s', 'Meh').to('up_arrow'),
    map('d', 'Meh').to('down_arrow'),
    map('f', 'Meh').to('right_arrow'),
  ]),
])
