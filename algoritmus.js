function myFunction() {
    let a = document.getElementById('My_FirstNumber').value;
    let b = document.getElementById('My_SecoundtNumber').value;
    let max;


    if (a > b) { max = a }
    else { max = b };

    for (let i = 1; i <= max; i++) {
        if (a % i == 0 && b % i == 0) {
            text = i;
        }
        else (
            text = "nincs közös osztó"
        )
    }
    document.getElementById("eredmeny").innerHTML = text;
}