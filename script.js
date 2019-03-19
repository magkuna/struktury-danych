const kontynenty = ["Europa" , "Ameryka Północna", "Azja", 7, true]


const body = document.body

const render = (what,where)=> {
    what = Object.keys(kontynenty)

 where.innerHTML = what
}
render (kontynenty, body);