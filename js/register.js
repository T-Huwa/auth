//alert("Success!");
var slideNum = 1;
var id = '';

function next(btn){
    id = 'slide' + slideNum;
    document.getElementById(id).style.height = 0;
    slideNum++;
    id = 'slide' + slideNum;
    document.getElementById(id).style.height = 'auto';
    // form validation over here
}

function back(btn){
    id = 'slide' + slideNum;
    document.getElementById(id).style.height = 0;
    slideNum--;
    id = 'slide' + slideNum;
    document.getElementById(id).style.height = 'auto';
    // form validation over here
}