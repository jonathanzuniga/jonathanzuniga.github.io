(function () {
    function displaySearchResults(results, store) {
        var searchResultsMessage = document.getElementById('search-results__message');
        var searchResultsPosts = document.getElementById('search-results__posts');
        var searchTotalResults = document.getElementById('search__total-results');

        if (results.length) { // Are there any results?
            var appendString = '';

            for (var i = 0; i < results.length; i++) { // Iterate over the results
                var item = store[results[i].ref];

                appendString +=
                    `<article class="post post--${i}">
                        <header class="post__header">
                            <div class="post__meta">
                                <div class="post__date small">
                                    ${item.date}
                                </div>
                            </div>

                            <h2 class="post__title h4">
                                <a href="${item.url}">
                                    ${item.title}
                                </a>
                            </h2>

                            <div class="post__content post__content--excerpt">
                                ${item.excerpt}
                            </div>
                        </header>
                    </article>`;
            }

            searchResultsMessage.innerHTML = '';
            searchResultsPosts.innerHTML = appendString;
            searchTotalResults.innerHTML =  `<strong>${i}</strong> resultados para <strong>${searchTerm}</strong>`;
        } else {
            searchResultsMessage.innerHTML =
                `<p>
                    Lo siento, pero ninguna publicación coincide con tu búsqueda <strong>${searchTerm}</strong>.
                    Intenta buscar algo un poco menos específico o si solo estas aburrido y buscas una delicia para la vista, busca <strong>lettering</strong>.
                </p>`;
            searchTotalResults.innerHTML =  ``;
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

    var searchTerm = getQueryVariable('query');
    if (searchTerm) {
        document.getElementById('search__input').setAttribute('value', searchTerm);

        // Initalize lunr with the fields it will be searching on. I've given title
        // a boost of 10 to indicate matches on this field are more important.

        var idx = lunr(function () {
            this.field('id');
            this.field('title', {boost: 10});
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