
const cislo1 = prompt ("Zadej první číslo:")
const cislo2 = prompt ("Zadej druhhé číslo:")
const cislo3 = prompt ("Zadej třetí číslo:")

const max3 = (cislo1, cislo2, cislo3) =>{
    if (cislo1 >= cislo2 && cislo1 >= cislo3) {
        return cislo1
    }  else if (cislo2 > cislo1 && cislo2 >= cislo3){
        return cislo2
    } else if (cislo3 > cislo1 && cislo3 > cislo2){
        return cislo3
    }
}

document.body.innerHTML = `<p>Největší ze tří zadaných čísel (${cislo1}, ${cislo2} a ${cislo3}) je: <b> ${max3(cislo1, cislo2, cislo3)} </b></p>`
