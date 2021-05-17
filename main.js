
function getNum(){

    var number = document.getElementById("numberHolder").value;

    return number;
}

function checkPrim(){

    num = getNum();

    var notPrimeMessage = " is not a prime number";
    var primeMessage = " is a prime number";

    // Corner case
    if (num <= 1)
        return num + notPrimeMessage;

    // Check from 2 to n-1
    var i = 2
    for (i = 2; i < num; i++)
        if (num % i == 0)
            return num + notPrimeMessage;

    // otherwise return true
    return num + primeMessage;


}

function evenOrOdd(){

    var even = " is an even number";
    var odd = " is an odd number";

    var num = getNum();

    if(num % 2 == 0)
        return num + even;

    return num + odd;
    
}

function nthFib(){

    var num = getNum();
    
    let [a, b] = [0, 1];

    while (num-- > 0) {
        [a, b] = [b, a + b];
    }


    if(b == "Infinity"){

        b = " a massive number ";
    }

    return getNum() + "th fibbinocci number is " + b;
}

function factorial(){

    let answer = 1;
    var n = getNum();

    if (n == 0 || n == 1)
    {
        return answer;
    }
    else
    {
        for(var i = n; i >= 1; i--)
        {
            answer = answer * i;
        }
    }

    if(answer == "Infinity"){

        answer = " a massive number ";
    }

    return n + "! is " + answer;

}

async function fact(){

    //http://numbersapi.com/55

    var api = "http://numbersapi.com/";
    var n = getNum();

    api = api + n;

    let response = await fetch(api, {referrerPolicy: "origin-when-cross-origin"});
    let data = await response.text();

    if(data.includes("unremarkable") || data.includes("boring") || data.includes("missing") || data.includes("uninteresting") ){


    }
    else{
        // unremarkable - boring - missing - uninteresting 
        console.log(data); 

        document.getElementById("bodyInfo").innerHTML += data + "<br>";
    }
    

    
}

async function getYear(){

    //http://numbersapi.com/55/yaer

    var api = "http://numbersapi.com/";
    var n = getNum();

    api = api + n + "/year";

    let response = await fetch(api, {referrerPolicy: "origin-when-cross-origin"});
    let data = await response.text();

    if(data.includes("unremarkable") || data.includes("boring") || data.includes("missing") || data.includes("uninteresting") ){


    }
    else{
        // unremarkable - boring - missing - uninteresting 
        console.log(data); 

        document.getElementById("bodyInfo").innerHTML += data + "<br>";
    }

}

function makeTheString(){
    
    var ourString = ""

    document.getElementById("headerNumber").innerHTML = "What's behind " + getNum();
    
    ourString += checkPrim() + "<br>";
    ourString += evenOrOdd() + "<br>";
    ourString += nthFib() + "<br>";
    ourString += factorial() + "<br>";
    // ourString += fact() + "<br>";
    fact();
    getYear();

    

    document.getElementById("bodyInfo").innerHTML = ourString;

    // alert(ourString);
}

