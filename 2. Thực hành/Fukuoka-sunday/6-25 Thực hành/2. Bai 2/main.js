class Country {
  constructor(name, populations) {
    this.name = name;
    this.populations = populations;
  }
}

class Languages {
  constructor(language, speaker) {
    this.language = language;
    this.speaker = speaker;
  }
}

const listCountry = [
  new Country("China", "1444216107"),
  new Country("India", "1393489038"),
  new Country("United State", "332915073"),
  new Country("Indonesia", "276361783"),
  new Country("Pakistan", "225199937"),
  new Country("Brazil", "213993437"),
  new Country("Nigeria", "211400708"),
  new Country("Bangladesh", "166303498"),
  new Country("Russia", "145912025"),
  new Country("Mexico", "130262216"),
];

listCountry.forEach((country) => {
  let item = document.createElement("div");
  document.getElementById("container").appendChild(item);
  item.style.display = "flex";
  //item.style.width = "500px";

  let name = document.createElement("div");
  name.innerHTML = country.name;
  name.style.width = "150px";
  name.style.maxWidth = "100px";
  name.style.minWidth = "100px";

  let bar = document.createElement("div");
  const max = listCountry.reduce((prev, current) =>
    prev.population > current.population ? prev : current
  );

  bar.style.width = `${(country.population / max.population) * 100}px`;
  bar.style.height = "20px";
  bar.style.background = "red";

  let population = document.createElement("div");
  population.innerHTML = country.populations;

  item.appendChild(name);
  item.appendChild(bar);
  item.appendChild(population);
});

// const listLanguages = [
//     new Languages ("English", "91"),
//     new Languages ("French", "45"),
//     new Languages ("Arabic", "25"),
//     new Languages ("Spanish", "24"),
//     new Languages ("Portuguese", "9"),
//     new Languages ("English", "91"),
//     new Languages ("English", "91"),
//     new Languages ("English", "91"),
//     new Languages ("English", "91"),
// ]
