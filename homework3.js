 //"has 3 arguments returns the result"
 const triangle = function(side1, side2, side3){
   
   return side1 + side2 + side3;
};


//:-A function that takes no arguments and returns something 
const notAUsefulFunction = function(){
 return "Where is the food?";
};

//"-A function that takes arguments, does something but does not return anything"
const func= function(num1,num2,num3) {
  
 	 console.log(num1 + num2 - num3)*num3;

};

//"-A function called fullName that takes as argument first name and last name and returns the full name of the person
const fn = function (name){
  return name;
};
const ln = function (surname){
	return surname;
};
const fullName = function f(fn, ln) {
	return  (fn + " " + ln);
};



//:-A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
const values = function(x, y){
	if (x===y){
    console.log(0);
	}
	else if (x>y){
		console.log(1);
	}
	else{
		console.log(-1);
	}
}
//strings length
const string = function(tiv1, tiv2, tiv3) {
	const tiv1Length = tiv1.length;
    const tiv2Length = tiv2.length;
    const tiv3Length = tiv3.length;

    if (tiv1Length>=tiv2Length && tiv1Length>=tiv3Length){
    	return tiv1;}
    if (tiv2Length>=tiv3Length && tiv2Length>=tiv1Length){
    	return tiv2;}
    else  {
    	return tiv3;}
}

//:-A function that takes three inputs and returns the first truethy value (example:  firstTruethy(0, '', 1); should return 1) -

const truthyvalue = function (arg1, arg2, arg3){
	return arg1 || arg2 || arg3;
}