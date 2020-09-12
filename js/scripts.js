function empty() {
    const value = document.getElementById("search__input").value;
    if (value.trim() == "") return false;
}


// Processing doodles

const store = window.store
const { width, height, path } = store.settings

const formatArrays = function(elm) {
  return elm
    .replace('[', '')
    .replace(']', '')
    .split('"')
    .join('')
}

const images = store.doodles.map((doodle, index) => {
  const {date, categories, image, tags, title, content} = doodle
  const formatDate = date.slice(0, 10)
  const formatCategories = formatArrays(categories)
  const formatTags = formatArrays(tags)
  const g = `<g>
    <image
      x=""
      y=""
      id="doodle-${index}"
      xlink:href="${path + image}"
      width="480" />
    <text
      id="data-${index}"
      class="data data-${index}"
      data-date="${formatDate}"
      data-title="${title}"
      data-content="${content}"
      data-categories="${formatCategories}"
      data-tags="${formatTags}"
    >
      <tspan class="data__number" dx="0" dy="10">${index + 1}</tspan>
    </text>
  </g>`

  return g
})

document.querySelector("#doodles__g").innerHTML = images.join('').toString();

// panzoom

const container = document.querySelector('#doodles__g')
const instance = panzoom(container, {
    maxZoom: 4,
    minZoom: 0.5
  })

instance.zoomAbs(
  0, // initial x position
  0, // initial y position
  1.5  // initial zoom
);

const navZoomIn = document.querySelector('#nav__item--zoom-in')
const navZoomOut = document.querySelector('#nav__item--zoom-out')

let winW = window.innerWidth
let winH = window.innerHeight
let winCenter = winW / 2
let winMiddle = winH / 2

window.addEventListener("resize", () => {
  winW = window.innerWidth
  winH = window.innerHeight
  winCenter = winW / 2
  winMiddle = winH / 2
})

navZoomIn.addEventListener("click", () => {
  instance.smoothZoom(winCenter, winMiddle, 1.25)
});

navZoomOut.addEventListener("click", () => {
  instance.smoothZoom(winCenter, winMiddle, 0.5)
});

// Doodle data

const svgImages = document.querySelectorAll('.data')
const box = document.querySelector('#box--doodle-data')

// Show an element
const show = function (elem) {
	elem.classList.add('is-visible');
};

// Hide an element
const hide = function (elem) {
	elem.classList.remove('is-visible');
};

// Toggle element visibility
const toggle = function (elem) {
	elem.classList.toggle('is-visible');
};

svgImages.forEach((image) => {
  image.addEventListener("click", () => {
    const html = `
      <dl>
        <dt>date:</dt>
        <dd>${image.dataset.date}</dd>
        <dt>title:</dt>
        <dd>${image.dataset.title}</dd>
        <dt>categories:</dt>
        <dd>${image.dataset.categories}</dd>
        <dt>tags:</dt>
        <dd>${image.dataset.tags}</dd>
        <dt>content:</dt>
        <dd>${image.dataset.content}</dd>
      </dl>`
    box.innerHTML = html
    toggle(box)
  })
})
