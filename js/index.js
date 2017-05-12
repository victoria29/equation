var a = Number(prompt('Enter A'));
var b = Number(prompt('Enter B'));
var c = Number(prompt('Enter C'));
if (Number.isNaN(a)) {
    alert('Insert the number!')
    (prompt('Enter A'))
}
if (Number.isNaN(b)) {
    alert('Insert the number!')
    (prompt('Enter B'))
}
if (Number.isNaN(c)) {
    alert('Insert the number!')
    (prompt('Enter C'))
}
if (a==0){
    document.write('This equation is not a square.');
}
else{
    var result = squareEq(a, b, c);
    document.write(result);
}
function squareEq(a, b, c) {
    var D = Math.pow(b, 2)-(4*a*c);
    var result;
    if(D < 0){
        result = 'This equation has no roots';
    }
    else if(D == 0){
        result = 'This equation has one root x = ' + ((-b)/(2*a));
    }
    else if(D > 0) {
        result = 'x1 = ' + ((-b) - Math.sqrt(D)) / (2 * a);
        result += ' x2 = ' + ((-b) + Math.sqrt(D)) / (2 * a);
    }
    return result;
}