---
layout: post
title: "Encrypt your data with ROT13 algorithm"
date: 2015-11-14 17:39:00
categories: classical-ciphers
tags: cryptography
---

[ROT13][rot13] is a text encryption method, which consists in moving the 
letters of the alphabet (English) in 13 locations (ie, "a" corresponds to the 
"n", "b" to "o" and so on). It is widely used in Usenet articles to publish or 
phrases that can be spoilers that are conflicting or something, so that they 
can not read casually but require a conscious effort of the reader (which is 
tacitly warned its contents). The ROT13 grace is that it has a very 
characteristic appearance, makes a ciphertext is so easily identifiable.

	Input:  abcdefghijklmnopqrstuvwxyz
	Output: nopqrstuvwxyzabcdefghijklm

It's the easiest symmetric encryption method to understand.

[rot13]: https://en.wikipedia.org/wiki/ROT13
