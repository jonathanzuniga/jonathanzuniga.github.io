(function() {
	function displaySearchResults(results, store) {
		var searchResultsTitle = document.getElementById('search-results__title');
		var searchResultsMessage = document.getElementById('search-results__message');
		var searchResultsPosts = document.getElementById('search-results__posts');

		if (results.length) { // Are there any results?
			var appendString = '';

			for (var i = 0; i < results.length; i++) { // Iterate over the results
				var item = store[results[i].ref];

				// var post_description = '';
				// if (item.description)
				//   post_description = '<span class="post__description">' + item.description + '</span>';

				appendString += 
					`<div class="post bd-bottom-1">
						<header class="post__header maxsm-ta-center">
							<div class="post__meta">
								<span class="post__date">
									` + item.date + `
								</span>
							</div>

							<h3 class="post__title ac-c m-top-16 m-bottom-16">
								<a class="post__link" href="` + item.url + `">
									` + item.title + `
								</a>
							</h3>
							
							<div class="post__content">
								` + item.excerpt + `
							</div>
						</header>
					</div>`;
			}

			searchResultsTitle.innerHTML = 'Search Results for ‘' + searchTerm + '’';
			searchResultsMessage.innerHTML = '';
			searchResultsPosts.innerHTML = appendString;
		} else {
			searchResultsTitle.innerHTML = 'No se encontró ningún resultado';
			searchResultsMessage.innerHTML = '<p>Lo siento, pero ninguna publicación coincide con tu búsqueda «' + searchTerm + '». Trata de buscar algo un poco menos específico o si solo estas aburrido y buscas una delicia para la vista, busca «Lettering».</p>';
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
		document.getElementById('header__search-input').setAttribute('value', searchTerm);

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
