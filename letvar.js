
'use strict';
//"use strict"; Defines that JavaScript code should be executed in "strict mode".
function TestVarLetDifference() { 

    let he = 201;
    for (var i=0;i<10; i++){

        var a = 2;
    }
    //define a variable with var will have scope leak issue, it can be accessed outside
    //for loop as it is a functional scope variable
    console.log(i);
    console.log(a);
    console.log(he);
    
    for (let j=0;j<10; j++){

        let b = 2;
    }
    //J cannot be accessed as it is not defined, a ReferenceError will be prompted
    //Same for b as it is not defined outside the loop
    console.log(j);
    console.log(b); 
}

TestVarLetDifference()