const osoby = [
    {
        imie: 'Jan',
        nazwisko: 'Kowalski',
        wiek: 18,
        imieNazwisko: function() { return this.imie + ' ' + this.nazwisko; }
    },
    {
        imie: 'Maria',
        nazwisko: 'Nowak',
        wiek: 21,
        imieNazwisko: function() { return this.imie + ' ' + this.nazwisko; }
    }
];

let table = '';

table += '<table>';
table += '<tr><th>Imię i Nazwisko</th><th>Wiek</th></tr>'
for (property in osoby ){
    table +='<tr><td>' + osoby[property].imieNazwisko()  + '</td><td>' + osoby[property].wiek  + '</td></tr>'
    
}
table += '</table>';

document.body.innerHTML = table;
            
        
        
    