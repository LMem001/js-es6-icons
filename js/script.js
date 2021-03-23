// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

function insertInHtml(htmlAdr, color, family, prefix, name) {
  let html = `<div style="color:${color}">
    <i class="${family} ${prefix}${name}"></i>
    <div class="title">${name}</div>
  </div>`
  htmlAdr.append(html);
  return 0;
}

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

const categories = [];

icons.forEach((element) => {
  if(categories.includes(element.category) == false) {
    categories.push(element.category);
  }
});

const colors = ["red", "purple", "black"]

iconHtml = $(".container .icons")

icons.forEach((element) => {
  // add color attribute to the object
  if(element.category == categories[0]) {
    element["color"] = colors[0];
  } else if(element.category == categories[1]) {
    element["color"] = colors[1];
  } else {
    element["color"] = colors[2];
  }
  insertInHtml(iconHtml, element.color, element.family, element.prefix, element.name);
});

const option = $("#type");

categories.forEach((element) => {
  let html = `<option value="${element}">${element}</option>`;
  option.append(html);
});

option.change(function() {
  iconHtml.html("");
  if(option.val() != "all") {
    const chosenIcons = icons.filter((element) => {
      return element.category == option.val();
    });
    chosenIcons.forEach((element) => {
      insertInHtml(iconHtml, element.color, element.family, element.prefix, element.name);
    });
  } else {
      icons.forEach((element) => {
        insertInHtml(iconHtml, element.color, element.family, element.prefix, element.name);
      });
  }
});
