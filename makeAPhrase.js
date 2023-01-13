
function makeAPhrase() {

    var words1 = ["Anna", "Matthaios", "Alexandros", "Rafail", "Axileas", "Zoi", "Fotini", "Elpida"];
    var words2 = [" is falling", " is a crazy", " is a fan of", " want's to get to know ", " reads on", " walk's to", " make's no sense why", " is wondering.."];
    var words3 = [" for you.", " Climber.", " Harry Potter.", " Pandora.", " what????", " Programming.", " Music.", " To faaart or not to faaart?"];

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);
    
    alert(words1[rand1] + words2[rand2] + words3[rand3]);
}

makeAPhrase();