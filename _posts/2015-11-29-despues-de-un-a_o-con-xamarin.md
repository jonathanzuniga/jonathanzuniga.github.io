---
authors: [jonathan]
categories: [codigo]
cover: https://www.dropbox.com/s/vf2izk773g5aj6r/cover.jpg?raw=1
date: 2015-11-29 14:50:00
layout: post
tags: [destacado]
title: 'Después de un año con Xamarin'
---

En un principio de existencia me preguntaba si las aplicaciones móviles realmente merecen ser desarrolladas de forma nativa.<!--more--> Si fuera asi ¿conseguiría aprender a un buen nivel de comprensión dos o tres diferentes lenguajes de programación para hacer la misma tarea a la vez? ¿alcanzaria a mantenerme actualizado? Sería muy abrumador ¿no les parece? ¡Ah! ¿Pero por qué no ir más allá? soñar con una alternativa donde tengamos solamente un proyecto por aplicación, donde haya un único equipo de desarrollo y lo mejor de todo ¡que esté hecho con un solo lenguaje!

Mientras seguía preguntándome si aun estoy en un sueño o si hubo una falla en la *Matrix*, vuelvo a inclinarme sobre el teclado y escribo de nuevo en el buscador. Mi búsqueda me llevó a probar algunas opciones como [PhoneGap][phonegap], [Cordova][cordova], [Appcelerator][appcelerator]… hasta [React Native][react-native], que en ese entonces aún no existía soporte para [Android][android], un factor importante para considerar pero que sin duda éste proyecto luce prometedor. Al final decidí darle una oportunidad seria a [Xamarin][xamarin].

La razón principal que tuve para elegir Xamarin fue que quería desarrollar aplicaciones móviles lo más cercano posible a una nativa, tenía algo de experiencia con [C#][csharp] y sabía que las bondades de este lenguaje son grandísimas, además de que nos proporciona un sin fin de posibilidades para crear software; conocía el proyecto [Mono][mono-project] desde hace ya bastante tiempo, pero nunca lo tomé muy en serio para mis planes como programador. Y quería comprobar eso que Xamarin dice, que todo lo que puedes hacer en Objective-C, Swift o Java lo puedes hacer en C#.

## Experimentando

A lo largo de todo este tiempo he tenido oportunidad de experimentar con la mayor cantidad de características posibles que una aplicación móvil puede contar, entre lo que más recuerdo ha sido el desarrollo con proyectos [PCL][pcl] y compartir código, integrar SQLite, utilizar los servicios de [Parse][parse] y Azure, base de datos NoSQL como [Couchbase][couchbase], integración de redes sociales y [OAuth][oauth], consumir datos a través de una API REST, el uso de la cámara fotográfica y procesamiento de imágenes, OCR, el envío de notificaciones remotas, etc. El desarrollo para Android es más lento que para iOS y hacer las pruebas con el emulador ni se diga, pero en verdad funciona bastante bien y puedes desarrollar directamente en Mac usando Xamarin Studio o en Windows con Visual Studio; sin embargo si deseas desarrollar *apps* para iOS de todos modos vas a necesitar una Mac.

Si tienes la intención de crear una aplicación con una interfaz de usuario específica y profundizar en términos de interacción, entonces lo vas a tener muy complicado. Porque como se añade una capa por encima del ambiente nativo, realmente no tienes control del código que se está generando para ser ejecutado en el dispositivo. Pero si no es asi, nuestro aliado son las librerías portables que nos aseguran que la mayoría de nuestro código lo vamos a compartir y va a funcionar en todas las plataformas disponibles. También es común encontrarte con [bugs][xamarin-bugs], son cosas inesperadas y normales pero hay veces que encuentras algo en los foros que dices genial esto va a solucionar mi problema pero luego ¡oh gran desilusión! al saber que es para nativo o a veces encuentras un componente que te fascinaría que existiera una versión para [Xamarin.Forms][xamarin.forms].

El [costo][xamarin-price] es otro tema, aunque ciertamente no es nada barato esto depende de la cantidad de desarrolladores que tengas en tu equipo y de lo que esperas ahorrarte usandolo.

En general me da la sensación de que lo que dicen los chicos de Xamarin es cierto, pero también es verdad que no es fácil. Para los más experimentados programadores en .net no va a ser un problema y si, si puedes usar [LINQ][linq], expresiones lambda, programación asíncrona (async y await) y casi todo lo que te gusta de tu *framework* favorito.

Cada vez hay más desarrolladores que lo ven como una gran alternativa, hay una comunidad activa y en crecimiento, otras empresas han comenzado a unirse y apoyar seriamente el proyecto.

## Conclusión

Así que, entonces en resumen ¿vale la pena continuar con Xamarin? Para quien es el autor de cada una de estas palabras... ¡Por supuesto que sí!, es una excelente herramienta pero que de ninguna forma sustituye al desarrollo «nativo» de una *app*, al menos por ahora no es posible y seguiré siendo feliz si en los próximos proyectos tengo disponible Xamarin.

[phonegap]: http://phonegap.com/
[cordova]: https://cordova.apache.org/
[appcelerator]: http://www.appcelerator.com/
[react-native]: https://facebook.github.io/react-native/
[android]: https://www.android.com/
[xamarin]: https://xamarin.com/
[csharp]: https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29
[mono-project]: http://www.mono-project.com/
[pcl]: https://msdn.microsoft.com/en-us/library/gg597391%28v=vs.110%29.aspx
[parse]: https://www.parse.com/?
[couchbase]: http://www.couchbase.com/nosql-databases/couchbase-mobile
[oauth]: http://oauth.net/
[xamarin-bugs]: https://bugzilla.xamarin.com/buglist.cgi?chfield=[Bug%20creation]&chfieldfrom=24h
[xamarin.forms]: https://xamarin.com/forms
[xamarin-price]: https://store.xamarin.com/
[linq]: https://msdn.microsoft.com/en-us/library/bb397926.aspx
