/*function render(what, where, myArray) {
			
    var what = '<ol>';

    myArray.forEach(function(element, index, array) {
        what += '<li>' + element + ' (' + index + ')</li>';
    });
    what += '</ol>';

    where.innerHTML = what;
    where.innerHTML += 'Zwrócony typ danych: <strong>' + typeof what + '</strong>';
}

var tekst = '';

var body = document.body;
// albo var body = document.getElementsByTagName('body')[0];
var owoce = ['Kiwi', 'Mango', 'Ananas', 'Grapefruit'];
render(tekst, body, owoce);*/

/*const render = (what,where) =>{

what += '<ol>'

owoce.forEach ( (element, index, array) => { what += '<li>' + element +  ' ('  + index +  ')</li>'
});

what += '</ol>'

where.innerHTML = what
where.innerHTML += 'Zwrócony typ danych: <strong>' + typeof what + '</strong>';
}

const owoce = ['Kiwi', 'Mango', 'Ananas', 'Grapefruit'];
let html = ''
let body = document.body
render (html, body)*/

const owoce = ['Kiwi', 'Mango', 'Ananas', 'Grapefruit'];

const newArray = []

const body = document.body;

const render = (what,where) => {
    what = owoce.map ( function(element,index,array)   {
        return element + " - obszar uprawy:tereny tropikalne"
} )
     where.innerHTML = what;
}


render (newArray, body);
