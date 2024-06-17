import { map, rule, toKey, writeToProfile } from 'karabiner.ts'
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
    map('spacebar', 'optionalAny')
      .toIfAlone('spacebar', {}, { halt: true })
      .toDelayedAction(toKey('vk_none'), toKey('spacebar'))
      .toIfHeldDown('l⇧', 'l⌥⌃', { halt: true })
      .parameters({ 'basic.to_if_held_down_threshold_milliseconds': 220 }),
  ]),
  numberKeysRule,
  cursorMotionRules,
])

writeToProfile('internal keyboard', [
  rule('internal keyboard').manipulators([
    map('right_command', 'optionalAny').toMeh(),
    map('caps_lock', 'optionalAny').to('left_control'),
  ]),
  cursorMotionRules,
])
