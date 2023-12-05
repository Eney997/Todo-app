const inputBox = document.getElementById('inputBox')
const list = document.getElementById('list')
const underLine = document.querySelector('.underline')
const sunIcon = document.querySelector('.Sun') 

sunIcon.onclick = function(){
    document.body.classList.toggle('light-mode')
    if(document.body.classList.contains('light-mode')){
        sunIcon.src = '/assets/Moon.svg'
    }else {
        sunIcon.src = '/assets/Sun.svg'
    }
}

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