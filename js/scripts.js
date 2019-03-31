function empty() {
    const value = document.getElementById("search__input").value;
    if (value.trim() == "") return false;
}
