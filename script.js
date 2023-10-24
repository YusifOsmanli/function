// 1. Tam adı funksiyanı elan edin və o, tam adınızı çap edir.
let name=prompt("adini daxil edin")
let surname=prompt("soyadnizi daxil edin")
function ad (Name,Surname){
console.log(`${Name}  ${Surname}`)
}

ad(name,surname);
   
task2.js


// 2. TamAd ox funksiyasını elan edin və indi parametr kimi firstName, LastName götürür və tam adınızı qaytarır.
 const fullName= (firstName,lastName) =>{
  let fullName=firstName+lastName
  return fullName
 }
 console.log(fullName("yusif","osmanli"));
  
task3.js


// 3. Düzbucaqlının perimetri aşağıdakı kimi hesablanır: perimetri= 2x(uzunluq + en). perimeterOfRectangle hesablayan funksiyanı yazın.

let a= parseInt(prompt("uzunluqu daxil edin"))
let  b=parseInt(prompt("eni daxil edin"))
function calculated (uzunluq,en ){
    perimetr=2*(uzunluq+en)
    return perimetr


}
console.log(calculated(abc,cba));
  
task4.js

let abc = parseInt(prompt("cekinizi daxil edin"))
let cba =parseInt(prompt( "boyunuzu daxil edin"))


function hesablayan (boy,ceki){
     bmi=ceki/(boy*boy)
     console.log(bmi);
     if(bmi<18.5){
        console.log("Az çəki")
     }else if(18.5<bmi && bmi<24.9){
        console.log("Normal Çəki")
     }

}
console.log(hesablayan(a,b));

task5.js

function findMax (num1,num2,num3){
if(num1>num2){
    if(num1>num3){
        return num1
    }else{
        return num3
    }
}else{
    if(num2>num3){
        return num2
    }else{
        return num3
    }
}

}
console.log(findMax(20,34,245))
 
task6.js

// Funksiya adını elan edin. O, massivi parametr kimi götürür və massivin əksini qaytarır (metoddan istifadə etməyin).
let array=[1,2,3,4,5,6,7]
let array1=[0,0,0,0,0,0,0,]
function ters(){
    for(i>=array.length;i=0;i--){
        array+=array1
        return array1
    }

}
console.log(array1)
   
task7.js

// . n səviyyəsində x-i qaytaran pow(x,n) funksiyasını yazın. Və ya başqa sözlə, x-i özünə n dəfə vurur və nəticəni qaytarır.
let x = parseInt(prompt("x ededin daxil edin"))
let n = parseInt(prompt("n ededin daxil edin"))

function calculated(eded,quvvet){
    hesablayan=Math.pow(eded,quvvet)

    return hesablayan


}
console.log(calculated(x,n))