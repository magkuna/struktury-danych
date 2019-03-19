let fieldNumber;  //zadeklarowanie zmiennej

const myArray = []  // zadeklarowanie tablicy 

document.querySelector('.button-array.button-array--add').addEventListener('click', () => {
  fieldNumber = document.querySelector('.input-array').value

if (fieldNumber !== '') {
myArray.push (fieldNumber)
document.querySelector('.info-array.info-array__output').innerHTML = myArray
} else {
    alert ('W polu musi znajdować się liczba, nie cwaniakuj')
}

document.querySelector('.input-array').value = ''
})    

document.querySelector ('.button-array.button-array--remove').addEventListener('click', () => {
    if ( myArray.length >0){
         myArray.pop()
    document.querySelector('.info-array.info-array__output').innerHTML = myArray
    } else {
        alert ('Tablica, jest pusta nie ma nic do usunięcia')
    }

})