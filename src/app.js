// Hamburger
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav-ul');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
})

document.querySelectorAll('.nav-a').forEach(element => element.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navUl.classList.toggle('active');
}))

// Scroll
const root = document.documentElement;
const marqueElementsDisplayed = getComputedStyle(root).getPropertyValue('--marque-elements-displayed');

const marqueContent = document.querySelector('.marque-content');

root.style.setProperty('--marque-elements', marqueContent.children.length);

for (let i = 0; i < marqueElementsDisplayed; i++) {
    marqueContent.appendChild(marqueContent.children[i].cloneNode(true));
}

// Media query
const marqueAni = document.getElementById('marque-ani')
const marqueFixed = document.getElementById('marque-fixed')

function screenChange(e) {
    if(e.matches) {
        marqueAni.classList.add('hide');
        marqueFixed.classList.remove('hide');
    } else {
        marqueFixed.classList.add('hide');
        marqueAni.classList.remove('hide');
    }
}

const mediaQuery = window.matchMedia('(min-width: 800px)')

mediaQuery.addListener(screenChange)

screenChange(mediaQuery)