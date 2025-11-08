# Construct Note

Write a function called `constructNote` which accepts two strings: a message and some letters. The function should return `true` if the message can be built with the letters that you are given, or it should return `false`.

Assume that there are only lowercase letters and no spaces or special characters in either the message or the letters.

## Bonus Constraints:

If M is the length of message and N is the length of letters:

- Time Complexity: O(M+N)
- Space Complexity: O(N)

## Examples:

```js
constructNote('aa', 'abc'); // false
constructNote('abc', 'dcba'); // true
constructNote('aabbcc', 'bcabcaddff'); // true
```
