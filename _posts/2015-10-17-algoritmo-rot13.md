---
authors: [jonathan]
categories: [codigo]
date: 2015-10-17 17:39:00
layout: post
title: 'Algoritmo ROT13'
---

[ROT13][rot13] es un método para encriptar texto, que consiste en mover las 
letras del alfabeto (inglés) en las 13 posiciones (por ejemplo, "a" corresponde 
a la letra "n", "b" a la "o" y así sucesivamente.<!--more--> Es ampliamente utilizado 
en artículos de [Usenet][usenet] para publicar contenido o frases que pueden 
ser *spoilers* que son conflictivos o algo así, para que no se puedan leer 
fácilmente sino que requieran un esfuerzo consciente del lector.

<div class="table-responsive">
	<table class="table">
		<thead>
			<tr>
				<th>Piensas:</th>
				<th>a</th>
				<th>b</th>
				<th>c</th>
				<th>d</th>
				<th>e</th>
				<th>f</th>
				<th>g</th>
				<th>h</th>
				<th>i</th>
				<th>j</th>
				<th>k</th>
				<th>l</th>
				<th>m</th>
				<th>n</th>
				<th>o</th>
				<th>p</th>
				<th>q</th>
				<th>r</th>
				<th>s</th>
				<th>t</th>
				<th>u</th>
				<th>v</th>
				<th>w</th>
				<th>x</th>
				<th>y</th>
				<th>z</th>
			</tr>
		</thead>

		<tbody>
			<tr>
				<td>Escribes:</td>
				<td>n</td>
				<td>o</td>
				<td>p</td>
				<td>q</td>
				<td>r</td>
				<td>s</td>
				<td>t</td>
				<td>u</td>
				<td>v</td>
				<td>w</td>
				<td>x</td>
				<td>y</td>
				<td>z</td>
				<td>a</td>
				<td>b</td>
				<td>c</td>
				<td>d</td>
				<td>e</td>
				<td>f</td>
				<td>g</td>
				<td>h</td>
				<td>i</td>
				<td>j</td>
				<td>k</td>
				<td>l</td>
				<td>m</td>
			</tr>
		</tbody>
	</table>
</div>

La gracia de ROT13 es que tiene una apariencia muy característica, haciendo que 
un texto cifrado sea fácilmente identificable, y es el método de cifrado 
simétrico más fácil de entender.

[rot13]: https://en.wikipedia.org/wiki/ROT13
[usenet]: https://es.wikipedia.org/wiki/Usenet
