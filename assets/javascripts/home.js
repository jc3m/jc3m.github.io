function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

var birth = new Date();
birth.setMonth(7);
birth.setDate(15);
birth.setYear(1997);
var a = calculateAge(birth);

var age = document.getElementById('age');
age.innerHTML = a + " years";
console.log(a);
