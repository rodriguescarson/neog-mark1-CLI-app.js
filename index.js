var readLineSync=require('readline-sync')

inputText=readLineSync.question("Enter your name: ")

console.log("Welcome "+inputText)

userAge = readLineSync.question("Enter your age: ")

if(userAge>25){
  console.log("Right")
}else{
 console.log("Wrong")
}