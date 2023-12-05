const inputBox = document.getElementById('inputBox')
const list = document.getElementById('list')
const underLine = document.querySelector('.underline')

function gela(){
    if(inputBox.value === ''){
        alert('Pls write something bzshy !')
    }else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        list.appendChild(li)
    }
    inputBox.value = ''
}

document.querySelector('.inputText').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        gela()
    }
});