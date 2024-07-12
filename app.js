function lucky(ticket){
    let num = String(ticket).split("");
    let result = +num[0] + +num[1] + +num[2] == +num[3] + +num[4] + +num[5];
    return result;
}
console.log(lucky(123311))