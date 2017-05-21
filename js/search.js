(function() {
  function displaySearchResults(results, store) {
    var searchResultsTitle = document.getElementById('search-results__title');
    var searchResults = document.getElementById('search-results__posts');
    var noResultsFound = document.getElementById('search-results__message');

    if (results.length) { // Are there any results?
      var appendString = '';
      var appendCount = '';

      for (var i = 0; i < results.length; i++) { // Iterate over the results
        var item = store[results[i].ref];

        var post_description = '';
        if (item.description)
          post_description = '<span class="post__description">' + item.description + '</span>';

        var read_time = '';
        if (item.read_time < 360)
          read_time = '1 min';
        else
          read_time = (item.read_time / 180 | 0) + ' mins'

        appendString += 
          '<article class="post">\
            <header class="post__header">\
              <h2 class="post__title">\
                <a class="post__link" href="' + item.url + '">' +
                  item.title + 
                '</a>\
              </h2>\
              \
              <p class="post__meta">' +
                post_description +
                '<span class="post__read-time">\
                  <span class="post-reading-time" title="Tiempo estimado de lectura">' +
                    read_time + '. de lectura</span></span>, \
                <span class="post__date">' +
                    item.date +
                '</span>\
              </p>\
            </header>\
          </article>';
      }
      
      if (i == 1)
        appendCount = 'Se encontró un resultado';
      else if (i > 0)
        appendCount = 'Se encontraron ' + i + ' resultados';

      searchResultsTitle.innerHTML = appendCount;
      searchResults.innerHTML = appendString;
      noResultsFound.innerHTML = '';
    } else {
      searchResultsTitle.innerHTML = 'No se encontró ningún resultado';
      noResultsFound.innerHTML = 'Lo siento, pero ninguna publicación coincide con tu búsqueda «' + searchTerm + '».';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('consulta');
  if (searchTerm) {
    document.getElementById('search__box').setAttribute('value', searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('description');
      this.field('categories');
      this.field('content');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'description': window.store[key].description,
        'categories': window.store[key].categories,
        'content': window.store[key].content
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
