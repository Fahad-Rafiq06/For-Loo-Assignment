// Printing Hello World
for (var i = 0; i <= 4; i++) {
    document.write("Hello World" + "<br></br>")
}

// Printing Nummbers

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}

// Printing Table

var tableValue = prompt("Enter any value to print it's table");

var limit = prompt("Enter the limit to print table");

if (tableValue === "" && limit === "") {
    alert("Enter Value in the input field")
}

else {
    for (var i = 1; i <= limit; i++) {
        var table = tableValue * i;

        document.write("<p>" + tableValue + "x" + i + "=" + table + "</p>")
    }


}

// Printing Mobile Companies 

var a = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

for (var i = 0; i <= a.length - 1; i++) {
    document.write("</p>" + a[i] + "</p>")
}

// Printing Fruits 

fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i <= fruits.length - 1; i++) {
    document.write(fruits[i] + "<br>")

}

for (var i = 0; i <= fruits.length - 1; i++) {
    document.write("<p> Element at index " + i + " is " + fruits[i] + "</p>")
}

// storing data in array with prompt

var data = [];
var ask = prompt("How many Prompts do you want?")
if (ask !== "") {
    for (var i = 0; i <= ask -1; i++ ) {
        var ask2 = prompt("Store Date through these inputs");
        data.push(ask2)
        document.write(data )
    }

}
else{
    alert("Nothing in the field")
}



// Largest No.

var arr = [12,54,10,55,100];

document.write("<p>" + arr + "</p>");
document.write("Largest Number in these is: " + Math.max(...arr));

// Smallest No.

document.write("<p>" + arr + "<br>");
document.write("Smallest Number in these is: " + Math.min(12,54,10,55,100));

// Largest and Smallest Number

var nos = [24, 53, 78, 91, 12];

document.write("<p> Array Values:" + nos + "</p>")

document.write("<p> Largest Number in this array is: " + Math.max(...nos) + "</p>")

document.write("<p> Smallest Number in this array is: " + Math.min(...nos) + "</p>");

// Print user input search

var ask = prompt("Search Bakery")
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

for (var i = 0; i <= bakery.length; i++) {
    if (bakery[i] === ask) {
        document.write(ask + " is avaiable at index " + i + " in our bakery");
        break;
    }
    else {
        document.write("We are Sorry " + ask + " is not avaiable in our bakery");
        break;
    }
}

// Print value with + of 5

for (var i = 1; i <= 20; i++) {
    document.write(5 * i + ",")
}

// Printing Odd and Even Values

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (var i = 0; i <= numbers.length - 1; i++) {
    var xyz = numbers[i] % 2;
    console.log(xyz)
    if (xyz == 0) {
        document.write("<p>" + i + " is even </p>")
    }
    else {
        document.write("<p>" + i + " is odd <br>")
    }
}

// Printing Stars 

var stars = parseInt(prompt("how may lines of stars do you want?"));

for (var i = 0; i <= stars - 1; i++) {
    for (var j = 0; j <= stars - 1; j++) {
        document.write("*")
    }
    document.write("<br>")
}

// Printing Stars
var a = [];
a2 = "*"
var b = prompt("How many lines do you want")
for(var i = 0; i <=b - 1; i++){
    
    a.push(a2)
    document.write(a + "<br>")
    
    
}

for(var i = 0; i <=b -1; i++){
    a.pop(a2)
    document.write(a + "<br>")
}