const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("nav__search--input")

searchBtn.onclick = function (e) {
    const isHidden = searchInput.classList.contains('hidden');

    if (isHidden) {
        searchInput.classList.remove('hidden');
        searchInput.classList.add('slide-in');
    } else {
        searchInput.classList.add('hidden');
        searchInput.classList.remove('slide-in');
    }
}