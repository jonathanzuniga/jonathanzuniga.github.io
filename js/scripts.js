function empty() {
    const value = document.getElementById("search__input").value;
    if (value.trim() == "") return false;
}

const fragment = document.createDocumentFragment();
fragment.appendChild(document.getElementsByClassName("footnotes")[0]);
document.getElementsByClassName("post__notes--right")[0].appendChild(fragment);

setFootNotes = () => {
    if ($(window).width() >= 1024)
        $(".post--full sup").footprint({
            notes: ".footnotes li",
            container: ".footnotes"
        });
};

setFootNotes();

$(window).resize(() => setFootNotes());
