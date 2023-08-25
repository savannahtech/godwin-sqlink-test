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

const documentsCollection = document.getElementsByClassName("document__body");

for (let i = 0; i < documentsCollection.length; i++) {
    const documentBody = documentsCollection[i];
    const collapsibleSection = documentBody.querySelector(".expand__document--content");

    const collapseBtns = documentBody.getElementsByClassName("collapse-btn");
    const collapseBtnsPhone = documentBody.getElementsByClassName("collapse-btn-phone");
    const expandBtns = documentBody.getElementsByClassName("expand-btn");
    const expandBtnsPhone = documentBody.getElementsByClassName("expand-btn-phone");

    for (let cB of collapseBtns) {
        cB.onclick = function (e) {
            collapseDoc(documentBody);
            console.log("cb");
        }
    }

    for (let cB of collapseBtnsPhone) {
        cB.onclick = function (e) {
            collapseDoc(documentBody);
            console.log("cb");
        }
    }

    for (let eB of expandBtns) {
        eB.onclick = function (e) {
            expandDoc(documentBody);
            console.log("ex");
            for (const otherDocs of documentsCollection) {
                if (documentBody !== otherDocs) {
                    collapseDoc(otherDocs);
                }
            }
        }
    }

    for (let eB of expandBtnsPhone) {
        eB.onclick = function (e) {
            expandDoc(documentBody);
            console.log("ex");
            for (const otherDocs of documentsCollection) {
                if (documentBody !== otherDocs) {
                    collapseDoc(otherDocs);
                }
            }
        }
    }

    if (i === 0) {
        expandDoc(documentBody);
    } else {
        collapseDoc(documentBody);
    }
}

function collapseDoc(documentBody) {
    const collapsibleSection = documentBody.querySelector(".expand__document--content");

    const collapseBtns = documentBody.getElementsByClassName("collapse-btn");
    const collapseBtnsPhone = documentBody.getElementsByClassName("collapse-btn-phone");

    const expandBtns = documentBody.getElementsByClassName("expand-btn");
    const expandBtnsPhone = documentBody.getElementsByClassName("expand-btn-phone");

    const atPhoneWidth = window.matchMedia('(max-width: 70rem)').matches;

    collapsibleSection.classList.remove('expand-out');
    collapsibleSection.classList.add('collapse-in');

    //hide all btns
    if (!atPhoneWidth) {
        for (let btn of collapseBtns) {
            btn.style.display = 'none';
        }
    } else {
        for (let btn of collapseBtnsPhone) {
            btn.style.display = 'none';
        }
    }


    //show all expand btns
    if (!atPhoneWidth) {
        for (let btn of expandBtns) {
            btn.style.display = 'inline-block';
        }
    } else {
        for (let btn of expandBtnsPhone) {
            btn.style.display = 'flex';
        }
    }

    setTimeout(function () {
        collapsibleSection.classList.add('hidden');
    }, 500);
}

function expandDoc(documentBody) {
    const collapsibleSection = documentBody.querySelector(".expand__document--content");

    collapsibleSection.classList.remove('hidden');
    collapsibleSection.classList.remove('collapse-in');
    collapsibleSection.classList.add('expand-out');

    const collapseBtns = documentBody.getElementsByClassName("collapse-btn");
    const collapseBtnsPhone = documentBody.getElementsByClassName("collapse-btn-phone");

    const expandBtns = documentBody.getElementsByClassName("expand-btn");
    const expandBtnsPhone = documentBody.getElementsByClassName("expand-btn-phone");

    const atPhoneWidth = window.matchMedia('(max-width: 70rem)').matches;

    //hide all btns
    if (!atPhoneWidth) {
        for (let btn of expandBtns) {
            btn.style.display = 'none';
        }
    } else {
        for (let btn of expandBtnsPhone) {
            btn.style.display = 'none';
        }
    }


    //show all expand btns
    if (!atPhoneWidth) {
        for (let btn of collapseBtns) {
            btn.style.display = 'inline-block';
        }
    } else {
        for (let btn of collapseBtnsPhone) {
            btn.style.display = 'flex';
        }
    }

}