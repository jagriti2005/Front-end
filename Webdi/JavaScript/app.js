// // console.log("Hello Jagriti")
// let a=12;
// let b=10;
// console.log(`The sum of two numbers is: ${a+b}.`)

// // Conditional statement
// console.log("some code before if");
// let age=23;
// if(age>=18){
//     console.log("You can vote")
// }
// console.log("some code after if");

// let size='XL';
// if(size=='XL'){
//     console.log("price is Rs. 250");
// }
// if(size=="L"){
//     console.log("price is Rs. 200");
// }
// if(size=='M'){
//     console.log("price is Rs. 100");
// }
// if(size=="S"){
//     console.log("price is Rs. 50");
// }

//....Nested if-else statement.........
// let marks=32;
// if(marks>=33){
//     if(marks>=80){
//         console.log("Grade:O");
//     }
//     else{
//         console.log("Grade:A");
//     }
// }
// else{
//     console.log("better luck next time");
// }

// let string="aam";
// if(string[0]==='a' && string.length>3){
//     console.log("string is good");
// }
// else{
//     console.log("string is not good");
// }

//........Switch statement...........
// let day=7;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thurshday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("Not a week");
// }

// alert("something is wrong");
// alert("error");

// prompt("please enter your roll no.");
// prompt("enter your name:")

// let msg="    Hello";

// let str = "ILoveCoding";

// let msg="     Hello  ";
// let newMsg = msg.trim();
// console.log("After trim: ",newMsg);
// newMsg=newMsg.toUpperCase();
// console.log("After UpperCase: ",newMsg);

// newMsg = newMsg.slice(1,4);
// console.log("After slicing: ",newMsg);
// console.log(newMsg.slice(-1));

// let str="IloveCoding";
// // console.log(str.replace("love","do"));
// // console.log(str.replace("o","x"));
// console.log(str.repeat(3));

//...Arrays(Data Structure)
// let student=['aman','rahul','badal'];
// console.log(student);
// console.log(student[2]);
// let name='Jagriti';
// console.log(name[0]);
// console.log(name[5]);
// console.log(typeof(student));
// let marks=[99,89,67,42,100];
// console.log(marks);
// console.log(student);
// console.log(student[2]);

//Creating arrays............

// let info=['jagriti',23,89.4];
// console.log(info);
// console.log(info.length)
// console.log(info[0][0]);
// console.log(info[0].length);

// let newArr=[];
// console.log(newArr);
// console.log([].length);
// console.log(newArr.length);

//Arrays are Mutable........
// let fruits=['mango','banana','grapes'];
// fruits[2]='litchi';
// console.log(fruits);
// fruits[11]='papaya';
// console.log(fruits);

//Arrays methods...........
//Push:add to end
//Unshift:add to start
//Pop:delete from end &returns it
//Shift:delete from start & returns it

// let cars=['audi','tesla','maruti','bmw'];
// console.log(cars);
// console.log(cars.push('toyota'));
// console.log(cars);
// console.log(cars.unshift('xuv'));
// console.log(cars);
// console.log(cars.pop());
// console.log(cars);
// console.log(cars.shift());
// console.log(cars);

//Practice Qs..........
// let start=['january','july','march','august']
// console.log(start.shift());
// console.log(start.shift());
// console.log(start.unshift('june'));
// console.log(start.unshift('july'));
// console.log(start);


//indexOf_includes Method
//indexOf: returns index of something

// let color=['yellow','green','orange','pink'];
// console.log(color.indexOf('green'));
// console.log(color.indexOf('grey'));

//includes:serach for a value
// console.log(color.includes('yellow'));   //return true or false



//Concatenation_Reverse
//concat:merge 2 arrays
// let color = ['yellow','green','orange','pink'];
// let start = ['january','july','march','august'];
// console.log(color.concat(start));

//reverse:reverse an Array
// console.log(color.reverse());

//slice methods..
// slice:copies a portion of an array
// let start=['january','july','march','august'];
// console.log(start.slice());
// console.log(start.slice(2));
// console.log(start.slice(2,3));
// console.log(start.slice(-2));

//splice methods...
// splice:removes/replaces/add elements in place
// splice(start,deleteCount,item0....itemN)

// let color = ['yellow','green','orange','pink','blue','black'];
// console.log(color.splice(1,3,'grey','white'));


//Sort in arrays
//Sort:sort an array in acending or descending
// let color = ['yellow','green','orange','pink','blue','black'];
// console.log(color.sort())

// let alphabet=['a','b','c','z','k'];
// console.log(alphabet.sort())

// let num=[12,34,67,100,89];
// console.log(num.sort());


// Practice Question
// let Array=['c','c++','html','javascript','python','java','c#','sql'];
// console.log(Array.indexOf('c++'));
// console.log(Array.reverse());

//Arrays Reference
// arr1=[1];
// arr2=[1];
// console.log(arr1==arr2)
// console.log(arr1===arr2)
// let arr=['a','b'];
// let arrCopy=arr;
// console.log(arrCopy);
// console.log(arrCopy.push('c'));
// console.log(arr);
// console.log(arr=arrCopy);

//Constant Arrays......
// const arr=[1,2,3];
// console.log(arr.push(4));
// console.log(arr)
// arr=[2,3,4,5]    //constat means no new array will form by using same variabld name


//Nested Arrays..........
//array of arrays
// let nums=[[2,4],[3,6],[4,8,7]];
// console.log(nums); 
// console.log(nums[1][1]);
// console.log(nums[0][0]);
// console.log(nums.length);
// console.log(nums[1]);


//Practice Questions..........
// let tic=[['X',null,'O'],[null,'X',null],['O',null,'X']];
// console.log(tic);
// console.log(tic[0]);
// console.log(tic[0][1]='O');
// console.log(tic[0]);


//Practice Questions...........
// let array=[7,9,0,-2];
// let n=3;
// let ans=array.slice(0,n);
// console.log(ans);

// let array=[7,9,0,-2];
// console.log(array.slice(1));

// let str=prompt("Enter the string");
// if(str.length==0){
//     console.log("string is empty");
// }
// else{
//     console.log("string is not empty");
// }


// let str='jagritirai';
// if(str[3]==str[3].toLowerCase()){
//     console.log("index is lower case");
// }
// else{
//     console.log("index is upper case");
// }


// let str=prompt("please enter a string");
// console.log(`original string=${str}`);
// console.log(`string without spaces=${str.trim()}`);


console.log("Hitesh");