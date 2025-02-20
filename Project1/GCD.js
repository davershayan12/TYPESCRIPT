function gcd(a, b) {
    var answer = 1;
    var val1 = a;
    var val2 = b;
    var hcf1 = [];
    var hcf2 = [];
    var GCD = [];
    var i = 1;
    while (i < val1) {
        i++;
        if (val1 % i === 0) {
            hcf1.push(i);
            val1 = val1 / i;
            i = 1;
            if (val1 == 1) {
                break;
            }
        }
    }
    i = 1;
    while (i < val2) {
        i++;
        if (val2 % i === 0) {
            hcf2.push(i);
            val2 = val2 / i;
            i = 1;
            if (val2 == 1) {
                break;
            }
        }
    }
    for (var i_1 = 0; i_1 < hcf1.length; i_1++) {
        for (var j = 0; j < hcf2.length; j++) {
            if (hcf1[i_1] === hcf2[j]) {
                GCD.push(hcf1[i_1]);
                hcf2.splice(j, 1);
                break;
            }
        }
    }
    for (var i_2 = 0; i_2 < GCD.length; i_2++) {
        answer *= GCD[i_2];
    }
    return "GCD of ".concat(a, " and ").concat(b, " is ").concat(answer, " ");
}
console.log(gcd(35, 14));
