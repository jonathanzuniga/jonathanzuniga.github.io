---
authors: [jonathan]
categories: [mobile development]
date: 2016-11-26
description: "Utilizandolos se simplifica mucho el desarrollo de una app."
layout: post
title: "Xamarin.Forms: Data Bindings y Value Converters"
---

En el modelo <abbr title="Model–View–ViewModel">MVVM</abbr> la forma de comunicar la [vista][vista] con el [modelo de vista][modelo-de-vista] es a través de _[data bindings][data-bindings]_. La idea es muy simple, primero tenemos un [objeto][objeto] que expone una propiedad pública (origen). Este objeto puede ser el modelo de vista o algún otro objeto dentro de este.<!-- more -->

{% highlight c# %}
Binding nameBinding = new Binding();
nameBinding.Source = person;
nameBinding.Path = "Name";

Entry nameEntry = new Entry();
nameEntry.SetBinding(Entry.TextProperty, nameBinding);
{% endhighlight %}

Dentro de la [interfaz gráfica][interfaz-grafica] tendremos otro objeto que tienen una propiedad, la cual recibirá el valor de la propiedad del objeto origen (destino). El mecanismo para lograr esta comunicación se conoce como _data binding_. Este se encarga de informar a los objetos cada que ocurre un cambio en cualquiera de los extremos.

{% highlight c# %}
// C#
BindingContext = person;
{% endhighlight %}

{% highlight xml %}

<!-- XAML -->
<Entry Text="{Binding Name}" />
{% endhighlight %}

#### Tipos de Data Bindings

Existen dos tipos de _data binding_ en [Xamarin.Forms][xamarin-forms]. El modo _one way_ donde el origen de datos informa cada que existe un cambio en la propiedad enlazada. Este modo es el indicado para elementos visuales que solo muestran datos y nunca los reciben, como un [`Label`][label]. El otro modo es el _two way_, donde tanto el origen como el destino informan de cambios en sus propiedades. Este modo es útil en controles de entrada de datos.

En la mayoría de los controles, el modo _one way_ es el predeterminado y aunque existen controles donde el modo _two way_ es el predeterminado, la buena práctica es indicar que se está utilizando este segundo modo siempre que se requiera.

#### Implementación

Para lograr el enlace de datos mediante _data bindings_, se requiere que un objeto implemente la [interfaz][interfaz] [`INotifyPropertyChanged`][inotifypropertychanged]. La dinámica de como funciona es la siguiente: El primer paso es implementar la interfaz `INotifyPropertyChanged` a la cual se va a suscribir el _binding_. Cuando ocurre un cambio, el objeto notifica mediante el evento expuesto en la interfaz `INotifyPropertyChanged`. Lo siguiente es que el _binding_ se entera de este cambio e informa a la interfaz de usuario para que se actualice con el nuevo valor.

1. El binding se suscribe al evento que contiene la interfaz `INotifyPropertyChanged`.
2. El objeto notifica mediante `INotifyPropertyChanged`.
3. El _binding_ lee el nuevo valor.
4. El destino se actualiza con el nuevo valor.

### Value Converters

Otro concepto es el de _value converters_. Estos nos ayudaran a poder enlazar propiedades del objeto origen a las propiedades del elemento gráfico que espera otro tipo de dato.

{% highlight xml %}
<Label Text="{Binding PasswordStrength}"
       TextColor="{Binding PasswordStrength}"
       FontSize="24" />
{% endhighlight %}

En el código anterior, se está enlazando la propiedad `PasswordStrength` al texto de un `Label` que espera ese tipo de dato y también se está enlazando ese `PasswordStrength` al `TextColor`. El cual esperaría un tipo de dato diferente, que en este caso sería un color. Para lograr convertir ese `PasswordStrength` que es un texto a un color, se utiliza un [_converter_][converter].

{% highlight c# %}
// El 'value converter' trabaja en conjunto con el 'data binding' para hacer estas conversiones de datos en ambos sentidos.
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

#### Su estructura

La interfaz necesaria para crear un _value converter_ es `IValueConverter` la cual contiene dos métodos. El método `Convert` para convertir los valores del origen hacia el destino, como en el ejemplo de arriba. Donde el `PasswordStrength` que es un texto, se convierte a un tipo de dato `Color` para mostrarse en el `Label`. Y esta interfaz también contiene un método `ConvertBack` para cuando sea necesario convertir datos desde el elemento gráfico hacia la propiedad origen de estos datos.

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
