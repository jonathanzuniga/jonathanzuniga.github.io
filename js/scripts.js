var slider = tns({
    container: ".slider",
    items: 1,
    controls: false,
    navContainer: ".slider-nav"
});

function empty() {
    const value = document.getElementById("search__input").value;
    if (value.trim() == "") return false;
}
