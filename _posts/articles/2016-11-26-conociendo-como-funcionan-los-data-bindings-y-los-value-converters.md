---
authors: [jonathan]
categories: [articulos]
cover: 
date: 2016-11-26
layout: post
tags: [xamarin-forms, desarrollo-movil-multiplataforma, c-sharp, mvvm, data-binding, converter]
title: 'Conociendo como funcionan los Data Bindings y los Value Converters'
---

## Data Bindings

En el modelo <abbr title="Model–View–ViewModel">MVVM</abbr> la forma de comunicar la [vista][vista] con el [modelo de vista][modelo-de-vista] es a través de *[data bindings][data-bindings]*. La idea es muy simple, primero tenemos un [objeto][objeto] que expone una propiedad pública. Este objeto puede ser el modelo de vista o algún otro objeto dentro de este.<!--more-->

{% highlight c# %}
// Origen: Objeto exponiendo una propiedad pública.
Entry nameEntry = new Entry();

Binding nameBinding = new Binding();
nameBinding.Source = person;
nameBinding.Path = "Name";

nameEntry.SetBinding(Entry.TextProperty, nameBinding);
{% endhighlight %}

Dentro de la [interfaz gráfica][interfaz-grafica] tendremos otro objeto que tienen una propiedad, la cual recibirá el valor de la propiedad del objeto origen. El mecanismo para lograr esta comunicación se conoce como *data binding*. Este se encarga de informar a los objetos cada que ocurre un cambio en cualquiera de los extremos.

{% highlight c# %}
// Destino: Propiedad del objeto que va a recibir el valor de la propiedad del objeto origen.
BindingContext = person;
{% endhighlight %}

{% highlight xml %}
<!-- Con XAML. -->
<Entry Text="{Binding Name}" />
{% endhighlight %}

### Tipos de Data Bindings

Existen dos tipos de *data binding* en [Xamarin.Forms][xamarin-forms]. El modo *one way* donde el origen de datos informa cada que existe un cambio en la propiedad enlazada. Este modo es el indicado para elementos visuales que solo muestran datos y nunca los reciben, como un [`Label`][label]. El otro modo es el *two way*, donde  tanto el origen como el destino informan de cambios en sus propiedades. Este modo es útil en controles de entrada de datos.

En la mayoría de los controles, el modo *one way* es el predeterminado y aunque existen controles donde el modo *two way* es el predeterminado, la buena práctica es indicar que se está utilizando este segundo modo siempre que se requiera.

### Implementación

Para lograr el enlace de datos mediante *data bindings*, se requiere que un objeto implemente la [interfaz][interfaz]  [`INotifyPropertyChanged`][inotifypropertychanged]. La dinámica de como funciona es la siguiente: El primer paso es implementar la interfaz `INotifyPropertyChanged` a la cual se va a suscribir el *binding*. Cuando ocurre un cambio, el objeto notifica mediante el evento expuesto en la interfaz `INotifyPropertyChanged`. Lo siguiente es que el *binding* se entera de este cambio e informa a la interfaz de usuario para que se actualice con el nuevo valor.

1. El binding se suscribe al evento que contiene la interfaz `INotifyPropertyChanged`. 
2. El objeto notifica mediante `INotifyPropertyChanged`.
3. El *binding* lee el nuevo valor.
4. El destino se actualiza con el nuevo valor.

## Value Converters

Otro concepto es el de *value converters*. Estos nos ayudaran a poder enlazar propiedades del objeto origen a las propiedades del elemento gráfico que espera otro tipo de dato.

<figure class="figure">
{% highlight xml %}
<Label Text="{Binding PasswordStrength}"
       TextColor="{Binding PasswordStrength}"
       FontSize="24" />
{% endhighlight %}

  <figcaption class="figure-caption">
		Enlazando la propiedad <code>PasswordStrength</code> al texto y a <code>TextColor</code> de <code>Label</code>, que espera dos tipos de datos diferentes.
	</figcaption>
</figure>

En el código anterior, se está enlazando la propiedad `PasswordStrength` al texto de un `Label` que espera ese tipo de dato y también se está enlazando ese `PasswordStrength` al `TextColor`. El cual esperaría un tipo de dato diferente, que en este caso sería un color. Para lograr convertir ese `PasswordStrength` que es un texto a un color, se utiliza un [*converter*][converter].

<figure class="figure">
{% highlight c# %}
public class PWStrengthConverter : IValueConverter
{
	public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
	{
		PasswordStrength pwdstr = (PasswordStrength) value;
		...
		return Color.Red;
	}
	
	public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
	{
		throw new NotSupportedException();
	}
}
{% endhighlight %}

  <figcaption class="figure-caption">
		El <i>value converter</i> trabaja en conjunto con el <i>data binding</i> para hacer estas conversiones de datos en ambos sentidos.	
	</figcaption>
</figure>

### Su estructura

La interfaz necesaria para crear un *value converter* es `IValueConverter` la cual contiene dos métodos. El método `Convert` para convertir los valores del origen hacia el destino, como en el ejemplo de arriba. Donde el `PasswordStrength` que es un texto, se convierte a un tipo de dato `Color` para mostrarse en el `Label`. Y esta interfaz también contiene un método `ConvertBack` para cuando sea necesario convertir datos desde el elemento gráfico hacia la propiedad origen de estos datos.

[vista]: https://developer.xamarin.com/guides/xamarin-forms/controls/views/
[modelo-de-vista]: https://developer.xamarin.com/guides/xamarin-forms/xaml/xaml-basics/data_bindings_to_mvvm/
[data-bindings]: https://developer.xamarin.com/guides/xamarin-forms/xaml/xaml-basics/data_binding_basics/
[objeto]: https://es.wikipedia.org/wiki/Objeto_(programaci%C3%B3n)
[xamarin-forms]: https://developer.xamarin.com/guides/xamarin-forms/getting-started/
[label]: https://developer.xamarin.com/guides/xamarin-forms/user-interface/text/label/
[interfaz-grafica]: https://developer.xamarin.com/guides/xamarin-forms/user-interface/
[interfaz]: https://msdn.microsoft.com/en-us/library/87d83y5b.aspx
[inotifypropertychanged]: https://developer.xamarin.com/api/type/System.ComponentModel.INotifyPropertyChanged/
[converter]: https://developer.xamarin.com/api/property/Xamarin.Forms.Binding.Converter/