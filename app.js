const correctAnswers = ['B', 'B', 'B', 'B']
const form = document.querySelector(".quiz-form")
const result = document.querySelector(".result")
form.addEventListener('submit', e => {
    e.preventDefault()
    let score = 0
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    //compare to correct answers
    userAnswers.forEach((answer, index)=> {
        if(answer === correctAnswers[index]){
            score += 25
        }
    })
    //show result on page
    scrollTo(0,0)
    result.classList.remove('d-none')
    
    let output = 0
    const timer = setInterval(()=> {
        result.querySelector("span").textContent = `${output}%`
        if(output === score){
            clearInterval(timer)
        } else {
            output++
        }
    }, 10)

})

//window object (global object)

//console.log('hi')
// console.log(document.querySelector('form'))
// console.log(window.document.querySelector('form'))

//alert('hey!')
//window.alert('hi!')

// setTimeout(()=>{
//     console.log('new job!')
// },2000)

// let i = 0

// const timer = setInterval(()=> {
//     console.log('hello')
//     i++
//     if(i === 5){
//         clearInterval(timer)
//     }
// },1000)