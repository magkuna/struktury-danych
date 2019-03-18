
const letter = ['Kiwi', 'Mango', 'Ananas', 'Grapefruit'];

const Fruit = ' '

const body = document.body

const render = (what,where) => {
    what = letter.find ( ( element,index,array) => 
 element.indexOf('A') ===0  )

where.innerHTML= what 

}
render (Fruit, body)