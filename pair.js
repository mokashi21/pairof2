function find(num) {

    let max=findMax(num);

    for(let a=0;a<=max;a++) {
        for(let b=0;b<=max;b++) {
            if(a*a+(b*b) == num) {
                if(a<=b) {
                    console.log("Number pair is \t"+(a)+" and " +(b));
                }
            }
        }
    }
}

console.log(num(50));

