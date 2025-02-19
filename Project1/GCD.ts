function gcd (a:number, b:number){
    let answer: number =1;
    let val1: number = a;
    let val2: number = b;
    let hcf1: number[]=[];
    let hcf2: number[]=[];
    let GCD : number[] =[];
    let i: number =1
    while(i< val1){
        i++
        if (val1%i === 0) {
            hcf1.push(i);
            val1=val1/i;
            i=1;
            if (val1 == 1) {
                break;
            }
        }     
    }
    i=1
    while(i< val2){
        i++
        if (val2%i === 0) {
            hcf2.push(i);
            val2=val2/i;
            i=1;
            if (val2 == 1) {
                break;
            }
        }     
    }
    for (let i = 0; i < hcf1.length; i++) {
        for (let j = 0; j < hcf2.length; j++) {
            if (hcf1[i] === hcf2[j]) {
                GCD.push(hcf1[i]);
                hcf2.splice(j, 1);
                break;
            }
        }
    }

    for (let i = 0; i < GCD.length; i++) {
        answer*=GCD[i];
    }

    return `GCD of ${a} and ${b} is ${answer} `;
}

console.log(gcd(35,14))