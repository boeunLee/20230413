//별세개
//자신을 호출한 객쳋 = .앞을 보면됨
//a(); 면, 앞에 window가 생략되어있는 것. 
//myObj.func1(); -> func1에 있는 this가 누구일까. 헷갈리면 console.log로 찍어보면 되긴 함. 정답은 myObj

//test()로 했더니 myObj가 아니라 window가 this가 됨. window가 test를 가지고 있고, test가 myObj를 가리키게 된 것

//this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라지기 때문이다

function sayName(){
    console.log(this)
}

var c = {
    'hello': 'world',
    'say': sayName
}

var b = { // var b = {c}
    'c': c
}

var a = { // var a = {b}
    'b': b
}

// 문제를 조금 더 꼬아보겠습니다.
function sayName(){
    console.log(this)
}

var c = {
    'hello': 'world',
    'say': sayName
}

var b = { // var b = {c}
    'c': c,
    'say': sayName
}

var a = { // var a = {b}
    'b': b,
    'say': sayName
}

//a.b.say : b
//a.say: a
//c.say: c
//a.b.c.say: c
//a.b.c.window.console: console
//sayname(): window

/////////
// https://school.programmers.co.kr/learn/courses/30/lessons/120852
function solution(n) {
    let answer = [];

    let i = 2;
    while (i <= n) {
        if (n % i === 0) {
            answer.push(i);
            n = n / i;
        } else {
            i++;
        }
    }

    return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}

////
var name = 'hojun'
function sayName(){
    console.log(this.name)
}

sayName()

////
function attackBeam(){ // 레이저 공격
    this.hp -= 20
}

function attackKnife(){ // 레이저 공격
    this.hp -= 5
}

let jombi = {
    name: 'jombi',
    // damaged: [attackBeam, attackKnife], 이렇게하면안됨
    damaged: attackBeam,
    hp: 10000,
    power: 2
}

let thanos = {
    name: 'thanos',
    damaged: attackBeam,
    hp: 1000,
    power: 100
}

jombi.damaged()
jombi

// jombi.damaged[0]() 
// jombi.damaged[1]() hp 안줄어듦. 안먹힘

jombi

// this 사용 예시
let 호텔 = [{
    '이름': '하나호텔',
    '위치': '제주도 제주시 001',
    '가격': { 'A': 50000, 'B': 30000, 'C': 15000 },
    '방의개수': 50,
    '예약자수': 25,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '둘호텔',
    '위치': '제주도 제주시 002',
    '가격': { 'A': 100000, 'B': 60000, 'C': 30000 },
    '방의개수': 100,
    '예약자수': 30,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '셋호텔',
    '위치': '제주도 제주시 003',
    '가격': { 'A': 80000, 'B': 50000, 'C': 30000 },
    '방의개수': 120,
    '예약자수': 80,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());


////////
function a() {
    console.log(this)
    function b() {
        console.log(this)
        function c() {
            console.log(this)
        }
        c()
    }
    b()
}
a()
// a, b, c모두 window
// 위 함수는 a.b.c()이런 식으로 호출한 객체를 타고 올라가는 형태가 아닙니다.



