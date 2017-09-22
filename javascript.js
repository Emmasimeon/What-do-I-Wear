/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 26;
var shirtLength = 33;
var shirtSleeve = 9.63;

// your code goes here
if ((shirtWidth >= 18 && shirtWidth <20) && (shirtLength = 28) && (shirtSleeve >= 8.13 && shirtSleeve <8.38) ){
    console.log("S \(Small\)");
} else if ((shirtWidth >= 20 && shirtWidth <22) && (shirtLength = 29) && (shirtSleeve >= 8.38 && shirtSleeve <8.63)){
    console.log("M \(Medium\)");
} else if ((shirtWidth >= 22 && shirtWidth <24) && (shirtLength = 30) && (shirtSleeve >= 8.63 && shirtSleeve <8.88) ){
    console.log("L \(Large\)");
} else if ((shirtWidth >= 24 && shirtWidth <26) && (shirtLength = 31) && (shirtSleeve >= 8.88 && shirtSleeve <9.63) ){
    console.log("XL \(Xtra Large\)");
} else if ((shirtWidth >= 26 && shirtWidth <28) && (shirtLength = 33) && (shirtSleeve >= 9.63 && shirtSleeve <10.13) ){
    console.log("2XL \(2 Xtra Large\)");
} else if ((shirtWidth = 28) && (shirtLength = 34) && (shirtSleeve >= 10.13) ){
    console.log("3XL \(3 Xtra Large\)");
} else console.log("N\/A");
