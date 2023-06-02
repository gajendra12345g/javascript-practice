const colorsArray = [
  { id: 1, name: "red" },
  { id: 2, name: "yellow" },
  { id: 2, name: "green" },
  { id: 3, name: "brown" },
  { id: 4, name: "gray" },
  { id: 5, name: "white" },
  { id: 5, name: "red" },
  { id: 6, name: "black" }
];

// 1. Remove duplicates by id
const uniqueById = Array.from(new Set(colorsArray.map(color => color.id)))
  .map(id => colorsArray.find(color => color.id === id));

// 2. Remove duplicates by name
const uniqueByName = Array.from(new Set(colorsArray.map(color => color.name)))
  .map(name => colorsArray.find(color => color.name === name));

// 3. Delete the color with name "green"
const filteredColors = colorsArray.filter(color => color.name !== "green");


// 3. Delete the color with name "green"
colorsArray.unshift({id:1,name:"purple"})


// 4. Add color "Purple" at the beginning
const colorsWithPurple = [{ id: 7, name: "Purple" }, ...colorsArray];

console.log("Unique by id:", uniqueById);
console.log("Unique by name:", uniqueByName);
console.log("Colors without green:", filteredColors);
console.log(colorsArray);
console.log("Colors with Purple:", colorsWithPurple);
