---
author: jonathan
categories: criptografía
date: 2015-11-17 17:39:00
layout: post
tags: [algoritmo, rot13]
title: "Encriptando datos con el algoritmo ROT13"
---

[ROT13][rot13] es un método para encriptar texto, que consiste en mover las 
letras del alfabeto (inglés) en las 13 posiciones (por ejemplo, "a" corresponde 
a la letra "n", "b" a la "o" y así sucesivamente. Es ampliamente utilizado 
en artículos de [Usenet][usenet] para publicar contenido o frases que pueden 
ser *spoilers* que son conflictivos o algo así, para que no se puedan leer 
fácilmente sino que requieran un esfuerzo consciente del lector.<!--more-->

	Entrada: abcdefghijklmnopqrstuvwxyz
	Salida:  nopqrstuvwxyzabcdefghijklm

La gracia de ROT13 es que tiene una apariencia muy característica, haciendo que 
un texto cifrado sea fácilmente identificable, y es el método de cifrado 
simétrico más fácil de entender.

[rot13]: https://en.wikipedia.org/wiki/ROT13
[usenet]: https://es.wikipedia.org/wiki/Usenet