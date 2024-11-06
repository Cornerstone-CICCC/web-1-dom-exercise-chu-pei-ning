// YOUR CODE HERE
const btn1 = document.querySelector('#btn1')
const output1 = document.querySelector('#output1')

btn1.addEventListener("click", () => {
      output1.style.color = "red"
})

const btn2 = document.querySelector('#btn2')
const output2 = document.querySelector('#output2')
const span = document.createElement('span')
span.textContent = "Hello word"

btn2.addEventListener("click", () => {
      //加在p 的後面
      output2.append(span)
})

const btn3 = document.querySelector('#btn3')
const smallText = document.querySelector('.small-text')

btn3.addEventListener("click", () => {
      smallText.classList.remove("small-text")
})

const btn4 = document.querySelector('#btn4')
const output4 = document.querySelector('#output4')
const elementList = output4.querySelectorAll('p');


btn4.addEventListener("click", () => {
      for (let element of elementList) {
            element.style.backgroundColor = 'red';
          }          
})

const btn5 = document.querySelector('#btn5')
const message = document.querySelector('#message')

btn5.addEventListener("click", () => {
      const result = message.value
      console.log(result)
})
