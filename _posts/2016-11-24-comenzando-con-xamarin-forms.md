---
authors: [jonathan]
categories: [articulos]
date: 2016-11-24
layout: post
title: 'Comenzando con Xamarin.Forms'
---

Xamarin.Forms es un *framework* multi-plataforma para crear aplicaciones con [XAML](https://msdn.microsoft.com/en-us/library/cc295302.aspx) —se pronuncia «xammel»— y C# —principalmente, porque también [existe cierto soporte para usar F#](http://www.charlespetzold.com/blog/2015/10/Writing-Xamarin-Forms-Apps-in-FSharp.html)—. Esto nos permite crear desde una misma base de código fuente común  aplicaciones que sean capaces de funcionar en plataformas Android, iOS, Windows Phone 8+ y más recientemente [Universal Windows Platform](https://msdn.microsoft.com/en-us/windows/uwp/get-started/whats-a-uwp) (UWP).<!--more-->

### Funcionamiento

Funciona añadiendo una capa de abstracción sobre los controles que podamos tener en el transcurso de nuestras aplicaciones, a estos se les llama *standard controls* o  controles estandard. También podemos acomodarlos según nuestro diseño con diferentes controles o contenedores llamados *layout controls*. Adicionalmente Xamarin.Forms provee elementos para el despliegue nativo de mapas en cada uno de los sistemas operativos móviles. Ademas Xamarin.Forms nos permite conectar cada una de nuestras pantallas a través del elemento de navegación, el cual nos permite mantener una misma consistencia y navegación a lo largo de nuestra *app*. 

Xamarin.Forms contiene un conjunto de elementos de [más de 40 controles y páginas](https://developer.xamarin.com/guides/xamarin-forms/controls/), puede haber casos que nuestros controles requieren agregar apariencia o una funcionalidad extra. En este caso los *custom controls* son de gran ayuda. Para esto podemos utilizar XAML —que es un lenguaje de marcado como el XML— que nos permitirá construir interfaces gráficas. XAML incluye elementos de *data binding* que nos sirven para mantener una sincronía de datos entre nuestras pantallas y los modelos. Por último Xamarin.Forms contiene el elemento *styles* y *triggers* que nos ayudan a tener una misma apariencia a lo largo del desarrollo de nuestra aplicación y que nuestras interfaces de usuario reaccionen en determinados estados de los datos.

### Requisitos

La instalación y configuración del hardware y software dependerá de las plataformas móviles sobre las cuales estemos pensando desarrollar. Además, dependerá de la plataforma de cómputo sobre la cual nos sintamos más agusto, una Mac o una PC.

<div class="table-responsive">
	<table class="table">
		<thead>
			<tr>
				<th>
					Sistema Operativo
				</th>
				<th>
					Mac con OS X Yosemite
				</th>
				<th colspan="2">
					PC con Windows
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<b>Ambiente de desarrollo</b>
				</td>
				<td>
					<b>Xamarin Studio</b>
				</td>
				<td>
					<b>Visual Studio</b>
				</td>
				<td>
					<b>Xamarin Studio</b>
				</td>
			</tr>
			<tr>
				<td>
					<b>Xamarin.Android</b>
				</td>
				<td>
					Si
				</td>
				<td>
					Si
				</td>
				<td>
					Si
				</td>
			</tr>
			<tr>
				<td>
					<b>Xamarin.iOS</b>
				</td>
				<td>
					Si
				</td>
				<td>
					Si (con conexión a una Mac para compilación y depuración)
				</td>
				<td>
					No
				</td>
			</tr>
			<tr>
				<td>
					<b>Xamarin.Forms</b>
				</td>
				<td>
					iOS y Android únicamente
				</td>
				<td>
					Android, Windows, Windows Phone, iOS (con una Mac)
				</td>
				<td>
					Android 
	únicamente
				</td>
			</tr>
		</tbody>
	</table>
</div>

Para desarrollar aplicaciones con Xamarin.Forms es necesario tener instalado el *Software Development Kit* de Xamarin.Android, Xamarin.iOS. Para desarrollar aplicaciones con UWP también se requiere contar con el SDK para el desarrollo de aplicaciones con Windows. Si vamos a desarrollar para iPhone, necesitaremos una Mac. Apple requiere que una Mac sea utilizada para compilar aplicaciones iPhone. Necesitamos instalar [Xcode](https://developer.apple.com/xcode/) en esa máquina.

#### Ambientes de desarrollo

Existen dos ambientes de desarrollo. Con [Visual Studio](https://www.visualstudio.com/) 2015 puede utilizarse la versión *Community* si estas desarrollando con Windows. Tambien podemos construir *apps* mediante [Xamarin Studio](https://www.xamarin.com/studio) que está disponible para Mac. Si desarrollas desde Windows es posible utilizar *Xamarin Mac Agent* para conectarnos a una computadora Mac disponible en nuestra red y probar los elementos de Xcode o depurar nuestras aplicaciones. La otra opción es ejecutar Visual Studio en una máquina virtual sobre la Mac.

#### Emuladores

Es posible probar nuestras aplicaciones en dispositivos reales conectados a la computadora de desarrollo a través de un cable USB, o podemos probar nuestros programas con emuladores. Existen ventajas y desventajas en cada enfoque. Un dispositivo real es esencial para probar una interacción táctil compleja o para probar los tiempos de arranque o respuesta de la aplicación. Sin embargo, los emuladores nos permiten ver como una aplicación se adapta a una variedad de tamaños y factores de forma.

Históricamente, los emuladores de Android proporcionados por Google han tendido a ser lentos, aunque a menudo son extremadamente versátiles en la emulación de una amplia gama de dispositivos Android actuales. Afortunadamente, Visual Studio ahora tiene su propio [emulador de Android](https://www.visualstudio.com/vs/msft-android-emulator/) que trabaja mucho mejor. También es muy fácil conectar un dispositivo Android real a la PC o a la Mac para realizar pruebas. Todo lo que necesitamos hacer es habilitar la conexión USB en el dispositivo. Otra alternativa sería instalar el emulador de [Genymotion](https://www.genymotion.com/).

Los emuladores de iPhone y iPad solo se ejecutan sobre la Mac. Sin embargo, debido a que las Mac de escritorio no tienen monitores táctiles, necesitamos utilizar un mouse o un *TrackPad* para simular los gestos táctiles. Los gestos táctiles, del TrackPad de la Mac no se trasladan hacia el emulador. También podemos conectar un iPhone real a la Mac, pero necesitamos activarlo como un dispositivo de desarrollo.

Los emuladores de Windows Phone pueden manejar diferentes resoluciones de pantalla y también tienden a ejecutarse bastante bien, aunque consumen demasiada memoria. Si ejecutamos el emulador de Windows Phone sobre un monitor táctil, podemos utilizar los gestos táctiles sobre la pantalla del emulador. Conectar un Windows Phone real a la PC es bastante fácil, pero requiere que habilitemos el teléfono para desarrollo desde la sección de Configuración. Si queremos desbloquear más de un teléfono, necesitaremos una cuenta de desarrollador.