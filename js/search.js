(function() {
  function displaySearchResults(results, store) {
    var searchResultsTitle = document.getElementById('search-results-title');
    var searchResults = document.getElementById('search-results');
    var noResultsFound = document.getElementById('no-results-found');

    if (results.length) { // Are there any results?
      var appendString = '';
      var appendCount = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        var item_image = '';
        var item_categories = '';

        if (item.image)
          item_image = '<img class="teaser-image" src="' + item.image + '" alt="' + item.title + '">';

        if (item.categories == 'artículos')
          item_categories = '<a class="teaser-category" href="/articulos">artículos</a>';
        else if (item.categories == 'relatos')
          item_categories = '<a class="teaser-category" href="/relatos">relatos</a>';
        else if (item.categories == 'momentos')
          item_categories = '<a class="teaser-category" href="/momentos">momentos</a>';

        // appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
        // appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
        appendString += 
          '<article class="teaser">\
            <a class="teaser-link" href="' + item.url + '">\
              <h3 class="teaser-title">' + item.title + '</h3>' +
              item_image + '\
            </a>\
            \
            <div class="teaser-content">\
              <p class="teaser-meta">\
                Publicado en ' + 
                item_categories + ' ' + 
                item.date + '\
              </p>\
              \
              <div class="teaser-intro">' + item.content.split(' ').splice(0, 32).join(' ') + '...</div>\
            </div>\
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
      noResultsFound.innerHTML = '<p>Lo sentimos, pero ninguna publicación coincide con tu búsqueda «' + searchTerm + '».</p>';
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
    document.getElementById('search-box').setAttribute('value', searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('categories');
      this.field('content');
      this.field('tags');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'categories': window.store[key].categories,
        'content': window.store[key].content,
        'tags': window.store[key].tags
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
