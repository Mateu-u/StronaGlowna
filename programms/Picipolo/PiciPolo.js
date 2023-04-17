const number = document.getElementById('numbers');
const result = document.getElementById('result');
const Button = document.getElementById('btn');
const ClearButton = document.getElementById('clear');
const wynik = document.getElementById('container-clear');
const Rezultat = document.getElementById('Komputer');
const counter = [];


Button.addEventListener('click', ()=> {
    result.innerHTML = picipolo();
    counter.push(1);
    let x = counter.reduce(function(a, b) {
        return a + b;
    })
    Rezultat.innerHTML = "Komputer: " + x;
})

ClearButton.addEventListener('click', ()=> {
    wynik.style.display = "none";
    number.value = '';
})

function picipolo() {
    if (number.value < 1 || number.value > 10) {
        wynik.style.display = "flex";
        return result.innerHTML = "Podaj liczbe z przedziału od 1 do 10 &#128528;";
    } else {
        if (number.value < 5) {
            x = result.innerHTML = "Gramy na większe, Przegrałeś &#128514;";
            y = wynik.style.display = "flex";
            return x;            
        } else {
            xx = result.innerHTML = "Gramy na mniejsze, Przegrałeś &#128514;";
            yy = wynik.style.display = "flex";
            return xx;
        }
    }
}