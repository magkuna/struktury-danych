const sentence =  'Lorem, ipsum, dolor, sit, ament'

const body = document.body

const render = (what,where)=> {
what = Object.values(sentence) 
where.innerHTML = what
}
render (sentence, body)