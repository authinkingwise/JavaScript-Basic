
'use strict';
function TestVarLetDifference() { 

    let he = 201;
    for (var i=0;i<10; i++){

        var a = 2;
    }

    console.log(i);
    console.log(a);
    console.log(he);

    for (let j=0;j<10; j++){

        let b = 2;
    }

    console.log(j);
    console.log(b);   
}

TestVarLetDifference()