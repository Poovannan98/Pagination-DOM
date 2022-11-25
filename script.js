const items = [
    {
      src: "images/1.jpg",
      desc: "Pine tree leaves",
    },
    {
      src: "images/2.jpg",
      desc: "Abandoned building",
    },
    {
      src: "images/3.jpg",
      desc: "Book Reading",
    },
    {
      src: "images/4.jpg",
      desc: "Sunny day",
    },
    {
      src: "images/5.jpg",
      desc: "Flying over the sea",
    },
    {
      src: "images/6.jpg",
      desc: "Sunset",
    },
    {
      src: "images/7.jpg",
      desc: "Clubhouse",
    },
    {
      src: "images/8.jpg",
      desc: "Suburbs",
    },
    {
      src: "images/9.jpg",
      desc: "By boat",
    },
    {
      src: "images/10.jpg",
      desc: "Laptop",
    },
];

const nav = document.getElementById('nav');
const content = document.getElementById('content');

let pageIndex = 0; // Page index initialized at 0
let itemsPerPage = 2; // Sets items on each page

loadItems();

function loadItems() {
    content.innerHTML = "";
    for (let i=pageIndex*itemsPerPage; i<(pageIndex*itemsPerPage)+itemsPerPage; i++) {
        if (!items[i]) { break }
        const item = document.createElement('div');
        item.innerHTML = `
        <div>
            <img src="${items[i].src}"/>
        </div>
        <div>
            <span>${items[i].desc}</span>
        </div>
        `;
        content.append(item);
    }
    loadPageNav();
}
function loadPageNav() {
    nav.innerHTML = "";
    for (let i=0; i<(items.length/itemsPerPage); i++) {
        
        const span = document.createElement('span');
        span.innerHTML = i+1;
        span.addEventListener('click', (e) => {
            pageIndex = e.target.innerHTML-1;
            loadItems();
        });
        if (i === pageIndex) {
            span.style.fontSize = "4rem";
        }
        nav.append(span);
    }
}

