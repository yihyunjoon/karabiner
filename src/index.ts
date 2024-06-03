import { map, rule, writeToProfile } from 'karabiner.ts'
import { cursorMotionRules, numberKeysRule, progressiveRule } from './rules'

writeToProfile('hyunjoon - magic keyboard japanese', [
  rule('Japanese keys').manipulators([
    map('japanese_eisuu', 'optionalAny').to('left_command'),
    map('left_command', 'optionalAny').to('left_option'),
    map('japanese_kana', 'optionalAny').toMeh(),
  ]),
  numberKeysRule,
])

writeToProfile('hyunjoon - magic keyboard japanese progressive', [
  progressiveRule,
  rule('Japanese keys').manipulators([
    map('japanese_eisuu', 'optionalAny').to('left_command'),
    map('left_command', 'optionalAny').to('left_option'),
    map('japanese_kana', 'optionalAny').to('spacebar'),
    map('right_command', 'optionalAny').toMeh(),
    map('spacebar', 'optionalAny').toMeh(),
  ]),

  numberKeysRule,
  cursorMotionRules,
])
