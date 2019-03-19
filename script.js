const sentence =  'Lorem, ipsum, dolor, sit, ament'

const paragraph = document.createElement('p')
const text = document.createTextNode(' Przykładowy napis: ')
const arrayText = document.createTextNode (Object.values(sentence));

const body = document.body

const render = (what,where)=> {
what.appendChild(text)
what.appendChild(arrayText)
where.appendChild(what) 
}
render (paragraph, body)