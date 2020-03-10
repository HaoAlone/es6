// let a = new Promise(function (resolve , reject) {
//     console.log('开始了。。')
//     setTimeout(function () {
//         let a = Math.random();
//         if(a>5){
//             resolve('ko')
//         }else {
//             reject('small')
//         }
//
//     },3000)
// })
//
// a.then(function (value) {
//     console.log(value)
// },function (error) {
//     console.log(error)
// })
//
// function b(a){
//     console.log(a)
// }

// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject('fail'), 3000)
// })
//
// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
// })
//
// p2
//     .then(result => console.log('res'+result))
//     .catch(error => console.log('error'+error))

let a = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('fail'), 3000)
})

// a.then(function (res) {
//     console.log(res)
// })
console.log(a.then(function (res) {
    console.log(res)
}))

Promise.resolve('foo') === new Promise(resolve => resolve('foo'))