// import './style.css'





// вывод данных
// console.log("hello");



// typeof - возвращает тип данных

// number
// console.log(typeof (0));
// string
// console.log(typeof ("stt"));
// boolean
// console.log(typeof (true));
// object
// console.log(typeof (Math));
// function
// console.log(typeof (alert));
// null - пустота
// let num_none1 = null
// console.log(num_none1);
// undefined - переменная созданная пустой
// let num_none2
// console.log(num_none2);
// Infinity - ошибка вычисления чисел
// let num_none3 = 2 / 0
// console.log(num_none3);
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
// console.log(num);

// константу менять нельзя
// const num_const = 5
// num_const = 10
// console.log(num);



// сообшение
// alert('text')
// alert('text2')
// alert('text3')

// сообщение prompt возвращает текст или None
// let prom_num = prompt("num ?")
// let prom_num = prompt("num ?" , "6") as string
// console.log(+(prom_num) + 5);

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




// console.log(num);
// создание массива с числами
// let arr = [1, 2, 3, 4, 5, 3] as Array<Number>
// создание массива с разными значениями
// let arr_2 = ["q1", "w2", "e3", 2] as Array<any>
// console.log(arr);
// console.log(arr_2);


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
// for (let i in arr_2){
//     console.log(i);
// }

// перебор массива по элементам
// for (let i of arr_2){
//     console.log(i);
// }

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
// // можно указать тип возврата функции
//     return (a + b) as number
// }



// let fun2 = function(a:any = 3){
//     return (a + "textt")
// }
// console.log(fun2())



// создание функции и перезапись переменной
// let num_fun = 50 as Number | Function
// console.log(num_fun)
// num_fun = function(){
//     console.log("hi num fun");
    
// }
// num_fun()



// создание стрелочной функции с одной строкой
// const fun3 = ()=> alert("ererer")
// fun3()



let fun4 = (num_a = 2)=>{
    num_a *= 5
    console.log(num_a);
}
fun4(3);



(()=>{
    console.log("text 0");
})()



// с помошью document.querySelector достаём элемент HTML по (тегу, классу, ID)
// const span_el = document.querySelector("span") as HTMLElement
const span_el = document.querySelector("#aq") as HTMLSpanElement
// const span_el = document.querySelector("span") as HTMLSpanElement
console.log(span_el);
// innerText - вставляет текст в элемент HTML
// span_el.innerText = "text"
// span_el.innerText = "<div>text</div>"
// innerText - вставляет HTML в элемент HTML
// span_el.innerHTML = "text"
span_el.innerHTML = "<div>text</div>"



const click_but = document.querySelector('.click_but') as HTMLButtonElement
// function fun_click_but(){
//     alert("+-+")
// }
// click_but.addEventListener("click" , fun_click_but)


click_but.addEventListener("click", () => {
    span_el.innerHTML = "<div>text</div>"
})




// let a_num1 = 3;
// (() => {
//     a_num1 = 5
//     console.log(a_num1);

// })();
// console.log(a_num1);



// let a_num1 = 3;
// if (true) {
//     a_num1 = 5
//     console.log(a_num1);

// }
// console.log(a_num1);






// (() => {
//     let a_num1 = 5
//     console.log(a_num1);
// })();
// console.log(a_num1);



// if (true) {
//     let a_num1 = 5
//     console.log(a_num1);
// }
// console.log(a_num1);






//     (() => {
//         var a_num1 = 5
//         console.log(a_num1);
//     })();
// console.log(a_num1);



if (true) {
    var a_num1 = 5
    console.log(a_num1);
}
console.log(a_num1);


let str1 = '23744'
str1 = "23744"
str1 = "237\n4 \\ 4"
str1 = '<span id="aq">i t123<img src="" alt=""></span>'
str1 = `
<span id="aq">
i t123
<img src="" alt="">
</span>
`
str1 = 'twfdqREDygd9qwdREDg9dwgfREDefffjjs'
console.log(str1);
console.log(str1.indexOf("red"));
console.log(str1.indexOf("RED"));
console.log(str1.indexOf("RED", 6));



console.log(str1.toUpperCase());
console.log(str1.toLowerCase());



console.log(str1.includes('red'));
console.log(str1.includes('RED'));



console.log(str1.slice(5));
console.log(str1.slice(5, 8));



console.log(str1.split("R"));
console.log(str1.split(""));



let str2 = 'wddw' + "4455" + true + 55
console.log(str2);
console.log(typeof(str2));


str2 = '' + 55
console.log(str2);
console.log(typeof(str2));


str2 = String(false)
console.log(str2);
console.log(typeof(str2));







