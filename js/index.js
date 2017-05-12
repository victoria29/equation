var a = Number(prompt('Enter A'));
while(Number.isNaN(a)){
    a=Number(prompt('Insert the number!'));
    }
var b = Number(prompt('Enter B'));
while(Number.isNaN(b)) {
    b = Number(prompt('Insert the number!'));
    }
var c = Number(prompt('Enter C'));
    while(Number.isNaN(c)) {
        c = Number(prompt('Insert the number!'));
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