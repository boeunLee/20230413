// 집합, 합집합, 교집합, 차집합
// 실무에서는 많이 사용이 안되지만
// 알고리즘 문제에서는 거의 필수로 사용되는 자료형입니다.

let s = new Set('aabbbccccdd') //중복을 제거하는구나
s.size //4

회사게시판 = ['이호준', '이호준', '이호준', '이호준', '이호준', '이호준', '이호준', '김연하', '김연하', '최흥석', '이나영']
let 게시자 = new Set(회사게시판)

//문제1: 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야 합니다.)
게시자.size //4

//문제2: 각각 몇 개의 게시물을 작성하였나요?
for (const i of 게시자){
    console.log(i, 회사게시판.filter(e => e===i))
}

for (const i of 게시자){
    console.log(i, 회사게시판.filter(e => e===i).length)
}

// 이 풀이는 매우 어렵습니다. 초급자 분들에게 권장하지 않습니다.
let map = new Map()
for (const i of 회사게시판) {
    map.set(i, (map.get(i) || 0) + 1)
}

// 1번째 순회 i에 '이호준'
map.set(i, (map.get(i) || 0) + 1)

let map = new Map()
map.get('이호준') // undefined

map.set('이호준', 1) // 최종

// 2번째 순회 i에 '이호준'
map.set(i, (map.get(i) || 0) + 1)

map.set('이호준', 2) // 최종


/// set 연습 /// 

let s = new Set('aabbbccccdd')
s.size
s.has('a') //true
s.has('f') //false
s.add('z')
s //Set(5) {'a', 'b', 'c', 'd', 'z'}

for (const i of s) {
    console.log(i)
}

let s = new Set('aabbbccccdd'.split(''))
let s = new Set(['a', 'a', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'd'])

//교집합
//배열 a를 돌면서, set b에서 a 원소를 가지고 있는지 판별
let a = new Set('abc')
let b = new Set('cde')
let cro = [...a].filter(e => b.has(e))

//합집합
let union = new Set([...a].concat(...b))
let union = new Set([...a, ...b])

//차집합
let dif = [...a].filter(e => !b.has(e))