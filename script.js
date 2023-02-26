// q1
// var x = prompt("Enter a number")
// var y = x
// console.log(x);

// ====================================================

// q2
// var i = prompt("Enter number")
// if (i % 3 == 0 && i % 4 == 0) {
//     console.log('yes');
// }

// ====================================================

// q3
// var x = prompt("Enter a number")
// var y = prompt("Enter a number")
// if (x>y) {
//     console.log(x);
// }
// else if (y > x) {
//     console.log(y);
// }

// ====================================================

// q4
// var x = prompt("Enter a number")
// if (x > 0) {
//     console.log('positive');
// }
// else if (x < 0) {
//          console.log('Negative');
// }

// ====================================================

// q5
// var x = prompt("Enter a number")
// var y = prompt("Enter a number")
// var z = prompt("Enter a number")
// if (x > y && x < z) {
//     console.log("Maximum is", z);
//     console.log("Minimum is", y);
// }
//     else if (y > x && y < z) {
//         console.log("Maximum is", z);
//         console.log("Minimum is", x);
//     }
//     else if (x > z && x < y) {
//         console.log("Maximum is", y);
//         console.log("Minimum is", z);
// }
    
//     else if (z > x && z < y) {
//         console.log("Maximum is", y);
//         console.log("Minimum is", x);
// }
// else if (y > z && y < x) {
//     console.log("Maximum is", x);
//     console.log("Minimum is", z);
// }
// else if (z > y && z < x) {
//     console.log("Maximum is", x);
//     console.log("Minimum is", y);
//     }
// else {
//     console.log('Rwaaaa7');
// }

// ====================================================

// Q6
// var x = prompt("Enter a number")
// if (x % 2 == 0) {
//     console.log("even");
// }
// else {
//     console.log("odd");
// }

// ====================================================

// q7
// var x = prompt("Enter a chart vowel")
// if (x == "a" || x == "e" || x == "o" || x=="i" || x == "u") {
//     console.log("vowel");
// }
// else {
//     console.log("consonant");
// }

// ====================================================

// q8
// var i = prompt("Enter a number")
// for (i = 1; i <= 5; i++){
//     console.log(i);
// }

// ====================================================

// q9
// var x = prompt("Enter a number")
// for (i = 1; i <= 12; i++){
//     console.log(x + "*" +i + "=" + x * i);
// }

// ====================================================

// q10
// var x = prompt("Enter a number")
// if (x % 2 == 0)
//     for (i = 1; i <= 20; i++) {
//         console.log("Even");
//     }
//     else {
//         console.log("Rwaaaaaaaa7");
//     }

// ====================================================

// q11
// var x = prompt("Enter a number")
// var y = prompt("Enter a number")
// console.log(x**y);

// ====================================================

// q12
// var a = prompt("Enter Marks")
// var b = prompt("Enter Marks")
// var c = prompt("Enter Marks")
// var d = prompt("Enter Marks")
// var e = prompt("Enter Marks")
// var totalmarks = (Number(a) + Number(b) + Number(c) + Number(d) + Number(e));
// var avg = (totalmarks / Number(a) + Number(b)+ Number(c) + Number(d) + Number(e));
// var persentages = (avg) ;
// console.log(totalmarks);
// console.log(avg) * 100;
// console.log(persentages, " % ");

// =====================================================

// q13
// var x = prompt("Enter a month")
// for (i = 1; i >= 12;i++){
//     if (x == 2) {
//         console.log("28 or 29 Days in a month");
//     }
//     else if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9 || x == 11) {
//         console.log("31 Days in a month");
//     }
//     else {
//         console.log("30 Days in a month");
//     }
// }

// =====================================================

// q14
// var phy = prompt("Enter Marks")
// var chem = prompt("Enter Marks")
// var bio = prompt("Enter Marks")
// var eng = prompt("Enter Marks")
// var math = prompt("Enter Marks")
// var persentages = (Number(phy) + Number(chem) +
// Number(bio) + Number(eng) + Number(math)) /5.0;
// if (phy >= 95) {
//     console.log("Grade A");
// }
//     else if (chem >= 85) {
//         console.log("Grade B");
// }
//     else if (bio >= 80) {
//         console.log("Grade C");
// }
//     else if (eng >= 70) {
//         console.log("Grade D");
// }
//     else if (math >= 60) {
//         console.log("Grade F");
// }
// console.log(persentages,' % ');

// =====================================================

// q15
// var x = prompt("Enter a month")
// switch (x) {
//     case '1':
//         console.log("31 days");
//         break;
//     case '2':
//         console.log("28/29 days");;
//         break;
//     case '3':
//         console.log("31 days");
//         break;
//     case '4':
//         console.log("30 days");
//         break;
//     case '5':
//         console.log("31 days");
//         break;
//     case '6':
//         console.log("30 days");
//         break;
//     case '7':
//         console.log("31 days");
//         break;
//     case '8':
//         console.log("31 days");
//         break;
//     case '9':
//         console.log("30 days");
//         break;
//     case '10':
//         console.log("31 days");
//         break;
//     case '11':
//         console.log("30 days");
//         break;
//     case '12':
//         console.log("31 days");
//         break;
//     default:console.log("this month not found");
// }

// =====================================================

// q16
// var x = prompt("Enter a char")
// switch (x) {
//     case 'a':
//         console.log("vowel");
//         break;
//     case 'e':
//         console.log("vowel");
//         break;
//     case 'o':
//         console.log("vowel");
//         break;
//     case 'i':
//         console.log("vowel");
//         break;
//     case 'u':
//         console.log("vowel");
//         break;
//     default:console.log("Consonant");
// }

// =====================================================

// q17
// var x = prompt("Enter a number")
// var y = prompt("Enter a number")
// switch (true) {
//     case (x > y):
//         console.log("Maximum is", x);
//         break;
//     case (y > x):
//         console.log("Maximum is", y);
//         break;
// }

// =====================================================

// q18
// var x = prompt("Enter a number")
// var y = x % 2;
// switch (y) {
//     case 0:
//         console.log("Even");
//         break;
//     default:
//         console.log("Odd");
//         break;
// }

// =====================================================

// q19
// var x = prompt("Enter a number")
// switch (true) {
//     case (x > 0):
//         console.log("Positive");
//         break;
//     case (x < 0):
//         console.log("Negative");
//         break;
//     case (x == 0):
//         console.log("Zero");
//         break;
//     default:
//         console.log("Rwaaaaa7");
//     }

// =====================================================

// q20
// var x = prompt("Enter a number one")
// var y = prompt("Enter operator")
// var z = prompt("Enter a number two")
// var plus = Number(x) + Number(z);
// var minus = Number(x) - Number(z);
// var multi = Number(x) * Number(z);
// var dividual = Number(x) / Number(z);
// var sup = Number(x) ** Number(z);
// switch (y) {
//     case "+":
//         console.log(plus);
//         break;
//     case '-':
//         console.log(minus);
//         break;
//     case '*':
//         console.log(multi);
//         break;
//     case "**":
//         console.log(sup);
//         break;
//     case '/':
//         console.log(dividual);
//         break;
//     default:
//         console.log("Error");
//         break;
// }