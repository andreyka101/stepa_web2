// import './style.css'





// вывод данных
console.log("hello");



// typeof - возвращает тип данных

// number
console.log(typeof (0));
// string
console.log(typeof ("stt"));
// boolean
console.log(typeof (true));
// object
console.log(typeof (Math));
// function
console.log(typeof (alert));
// null - пустота
let num_none1 = null
console.log(num_none1);
// undefined - переменная созданная пустой
let num_none2
console.log(num_none2);
// Infinity - ошибка вычисления чисел
let num_none3 = 2 / 0
console.log(num_none3);
// NaN - ошибка вычисления разных тип данных
// let num_none4 = "text" - 6
// console.log(num_none4);



// объявление переменной
// let num = 0
// объявление пустой переменной
// let num 
// объявление пустой переменной с типом
let num: number
// меняем переменную
num = 50
// переменную с типом number нельзя менять на string
// num = "ty"
console.log(num);

// константу менять нельзя
// const num_const = 5
// num_const = 10
console.log(num);



// сообшение
// alert('text')
// alert('text2')
// alert('text3')

// сообщение prompt возвращает текст или None
// let prom_num = prompt("num ?" , "6")
// console.log(prom_num);

// сообщение confirm возвращает boolean
// console.log(confirm("да / нет   ?"));



// условие
// let num_if = 4
// if(num_if == 5){
//     console.log("ok1");
// }
// else if(num_if == 4){
//     console.log("ok2");
// }
// else{
//     console.log("else");
// }


// any - любой тип
// let num_if2:any = 4
// неточное сравнение
// if(num_if2 == "4"){
// точное сравнение
// if(num_if2 === "4"){
//     console.log("ok1");
// }
// else{
//     console.log("else");
// }


// || - or
// let num_if3:any = 5
// if(num_if3 == 3 || num_if3 < 10){
//     console.log("ok1");
// }
// else{
//     console.log("else");
// }



// && - and
// let num_if4:any = 5
// if(num_if4 == 3 && num_if4 < 10){
//     console.log("ok1");
// }
// else{
//     console.log("else");
// }


// ! - not
// let num_if5:any = 5
// if(!(num_if5 == 3)){
//     console.log("ok1");
// }
// else{
//     console.log("else");
// }



//  арифметические вычисления
// +
// -
// /
// *
// **
// %




console.log(num);
// создание массива с числами
let arr = [1, 2, 3, 4, 5, 3] as Array<Number>
// создание массива с разными значениями
let arr_2 = ["q1", "w2", "e3", 2] as Array<any>
console.log(arr);
console.log(arr_2);


// for(начало; условие; шаг)
// for(let i=0; i<=20; i+=1){
//     console.log(i);
// }
console.log("------------------------");

// for(; num<=60; num++){
//     console.log(num);
// }

// необязательно писать начало и шаг
// for(;num<55;){
//     console.log(num);
//     if(confirm("go?")){
//         num++
//     }
//     else{
//         num-=2
//     }
// }

// перебор массива по индексу
for (let i in arr_2){
    console.log(i);
}

// перебор массива по элементам
for (let i of arr_2){
    console.log(i);
}

// цикл может работать с несколькими переменными
// for(let i = 0,a=20; i != a; i++ , a--){
//     console.log(i,a);
// }



// let num_2 = 0
// while (num_2 != 10){
//     console.log(num_2);
//     num_2++
// }



// do while - делает минимум один оборот цикла , даже если в условии false
// console.log("while start");
// let num_3 = 10
// do{
//     console.log(num_3);
//     num_3++
// }while (num_3 <= 10)
// console.log("while end");



// вызов функции
// fun1(true, 40)
// console.log(typeof(fun1))
// console.log(fun1)
// console.log(fun1(3, 40))



// создание функции
// function fun1( a:any, b:number,s="text"){
//     console.log("i fun1");
//     console.log(a,b,s);
    
//     // return 4
// можно указать тип возврата функции
//     return (a + b) as number
// }
