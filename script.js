// A
/*const continents = ["Europa","Azja", "Antarktyda","Afryka", "Australia i Oceania", "Ameryka Północna", "Ameryka Południowa" ];

console.log  (continents.sort());  // alfabetycznie
console.log (continents.reverse()); // odwraca kolejnosc tablicy
console.log (continents);*/

console.log ("napisane w render");

const renderA = myArray =>{
    console.log (myArray.sort());
    console.log(myArray.reverse());
};
const kontynenty = ["Europa","Azja", "Antarktyda","Afryka", "Australia i Oceania", "Ameryka Północna", "Ameryka Południowa" ];
renderA(kontynenty);



// B
const renderB = myArray => {
console.log(myArray.sort((x, y) => x - y ));
console.log(myArray.sort((x, y) => y - x )); 
};

const numbers = [1, 12, 13, 0, 2, 20, 9, 3, 22, 10, -2,11];
renderB(numbers);
