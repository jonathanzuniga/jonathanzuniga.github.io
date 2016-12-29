(function() {
  function displaySearchResults(results, store) {
    var searchResultsTitle = document.getElementById('search-results-title');
    var searchResults = document.getElementById('search-results');
    var noResultsFound = document.getElementById('no-results-found');

    if (results.length) { // Are there any results?
      var appendString = '';
      var appendCount = '';

      for (var i = 0; i < results.length; i++) { // Iterate over the results
        var item = store[results[i].ref];

        appendString += 
          '<article class="post">\
            <a class="post-link" href="' + item.url + '">\
              <h2 class="post-title">\
                <span class="post-date">' +
                  item.date +
                '</span>\
                <small>' +
                  item.title + 
                '</small>\
              </h2>\
            </a>\
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
      noResultsFound.innerHTML = '<p>Lo siento, pero ninguna publicación coincide con tu búsqueda «' + searchTerm + '».</p>';
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
      this.field('authors');
      this.field('categories');
      this.field('content');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'authors': window.store[key].authors,
        'categories': window.store[key].categories,
        'content': window.store[key].content
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
