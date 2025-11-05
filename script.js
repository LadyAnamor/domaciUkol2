const max3 = (cislo1, cislo2, cislo3) =>{
    if (cislo1 >= cislo2 && cislo1 >= cislo3) {
        return cislo1
    }  else if (cislo2 > cislo1 && cislo2 >= cislo3){
        return cislo2
    } else if (cislo3 > cislo1 && cislo3 > cislo2){
        return cislo3
    }
}

console.log (max3 (5, 6,9))
