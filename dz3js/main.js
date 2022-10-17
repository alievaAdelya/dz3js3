// const input = document.querySelector('input')
// const btn = document.querySelector('button')

// let age = 16

// btn.addEventListener( 'click',  () => {
//     let time = new Promise((resolve,reject) => {
//         if (age == input.value) {
//             resolve("урра вы угадали")
//         }else{ 
//             reject('не угадали попробуйте еще раз')
//         }
//     }).then((resolve) => console.log(resolve))
//     .catch((reject) => console.log(reject)) 
// })


const input = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    new Promise((resolve, reject) => {
        if(input.value == 10) {
            resolve(alert('Правильно!'))
        }else{
            reject(alert('Не правильно'))
        }
    }).then((response) => console.log(response))
    .catch((er) => console.log(er))
})