let maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", " Kofi", "Kwame"];
let femaleNames=[" Akosua", "Adwoa", "Abenaa", " Akua", "Yaa","Afua", " Ama"];

function checkDayOfWeek() {
  let year =parseInt(document.getElementById("year").value);
  let month =parseInt(document.getElementById("month").value);
  let century =parseInt(document.getElementById("century").value);
  let monthDay =parseInt(document.getElementById("monthDay").value);
  let genders =parseInt(document.getElementById("rad1").value);

  let YY = century;
  let MM = month;
  let CC = century;
  let MD = monthDay;

  let d =parseInt(((CC / 4) - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + MD % 7)

  if (MD < 1 || MD > 31){
    alert("Day does not exist");
  }
  else if (MM < 1 || MM > 12 || MM == 2 && MD > 29){
    alert("Month does not exist");
  }
  else if ()
  






}