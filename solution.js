//1

function calculateBMI (x,y,z) {
    console.log(x+"'s BMI is", (y/(z*z)).toString()+".")
}
calculateBMI ('Mark', 1.83, 80)
calculateBMI ('John', 1.68, 50)

//2

function whoIsBiggest (x,y,z,w) {
    if (y > w) {
        console.log(x+"'s BMI is", y.toString(), "and it is greater than", z+ ".")
    } else if (y == w) {
        console.log(x+"'s BMI and", z,"'s BMI re equal.", z)
    } else {
        console.log(z+"'s BMI is", w.toString(), "and it is greater than", x+".")

    }
}

whoIsBiggest ('Mark',0.0002859375,'John',0.000672)

//Bonus

function whoIsBiggest2 (x,y,z,a,b,c) {
    const bmi1 = calculateBMI(x,y,z);
    const bmi2 = calculateBMI(a,b,c);

    if(bmi1 > bmi2) {
        console.log(x, "is bigger")
    } else {
        console.log(a, "is bigger")
    }
}
whoIsBiggest2 ('Mark', 1.83, 80, 'John', 1.68, 50)