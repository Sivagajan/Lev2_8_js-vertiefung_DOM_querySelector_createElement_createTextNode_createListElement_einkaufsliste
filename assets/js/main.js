const inputText = document.getElementsByTagName('input')[0]
const listBody = document.getElementsByTagName('ul')[0]
const myBtn = document.getElementsByTagName('input')[1]

console.log(myBtn)

myBtn.addEventListener('click', () => {

    if (inputText.value === ''){
        alert('bitte text eingeben')
    }else{
        createListElement(inputText.value)
    }
})

inputText.addEventListener('keypress', (e) => {

    console.log(e.key)

    if(e.key == 'Enter'){

        if (inputText.value === ''){
            alert('bitte text eingeben')
        }else{
            createListElement(inputText.value)
        }
    }

})


const createListElement = (text) =>{
    const listElement = document.createElement('li')
    const textNode = document.createTextNode(text)
    listElement.appendChild(textNode)
    listBody.appendChild(listElement) 
    console.log(text)
    inputText.value = ''
}