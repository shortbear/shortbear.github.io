---
templateKey: how-to
title: How to reverse a string in JavaScript
category: javascript
date: 2022-08-31
excerpt: In this short tutorial, I'll show you how to reverse a string in JavaScript.
image: how-to-reverse-a-string-in-javascript.007.png
video:
  name: How to reverse a string in JavaScript
  url: https://youtu.be/6vrxLx7gbpA
  thumbnailUrl: how-to-reverse-a-string-in-javascript.001.png
  duration: 1:32
steps:
  - name: Create a string
    text: Create a string using double quotes, single quotes or back quotes.
    image: how-to-reverse-a-string-in-javascript.002.png
    clip:
      startOffset: 6
      endOffset: 13
    body: |-
      ```javascript
      let s = '😮🐻🐯🦁';
      ```
  - name: Convert the string to an array of characters
    text: Use the spread operator (...) inside square brackets to create an array of
      characters.
    image: how-to-reverse-a-string-in-javascript.003.png
    clip:
      startOffset: 13
      endOffset: 29
    body: |-
      ```javascript
      let s = '😮🐻🐯🦁';
      [...s]
      // ['😮', '🐻', '🐯', '🦁']
      ```
  - name: Reverse the array
    text: Use the .reverse() method to reverse the array.
    image: how-to-reverse-a-string-in-javascript.004.png
    clip:
      startOffset: 29
      endOffset: 44
    body: |-
      ```javascript
      let s = '😮🐻🐯🦁';
      [...s].reverse();
      // ['🦁', '🐯', '🐻', '😮']
      ```
  - name: Convert the array back into a string
    text: Use the .join() method with empty quotes to recombine the
      array into a string
    image: how-to-reverse-a-string-in-javascript.005.png
    clip:
      startOffset: 44
      endOffset: 64
    body: |-
      ```javascript
      let s = '😮🐻🐯🦁';
      [...s].reverse().join('');
      // '🦁🐯🐻😮'
      ```
  - name: Assign the result to a variable
    text: Reversing a string is not permanent. Assign the result to a variable if you want the change to persist.
    image: how-to-reverse-a-string-in-javascript.006.png
    clip:
      startOffset: 64
      endOffset: 77
    body: |-
      ```javascript
      let s = '😮🐻🐯🦁';
      s = [...s].reverse().join('');
      console.log(s);
      // '🦁🐯🐻😮'
      ```
---
