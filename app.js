const inputBox = document.getElementById('inputBox')
const list = document.getElementById('list')
const underLine = document.querySelector('.underline')
const sunIcon = document.querySelector('.Sun') 
const CountItems = document.getElementById('Itemsleft')
const ClearComplited = document.getElementById('ClearComplited')
const ShowAll = document.getElementById('ShowAll')
const onlyActive = document.getElementById('onlyActive')
const onlyCompleted = document.getElementById('onlyCompleted')


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
        console.log('Entered')
    }else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        list.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = 'x'
        li.appendChild(span)
        let underline = document.createElement('div');
        underline.className = 'underline';
        list.appendChild(underline);
    }
    inputBox.value = ''
}


list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }
})

ClearComplited.addEventListener('click', function(e){
    
})



document.querySelector('.inputText').addEventListener('keydown', function(e) {
if (e.key === 'Enter') {
    gela()
    }
});


ShowAll.addEventListener('click', function() {
    list.querySelectorAll('li').forEach(li => {
      li.style.display = '';
    });
});
  

onlyActive.addEventListener('click', function() {
    list.querySelectorAll('li.checked').forEach(li => {
      li.style.display = 'none';
    });
    list.querySelectorAll('li.checked::before').forEach(li => {
      li.style.display = '';
  });
});
  
  
onlyCompleted.addEventListener('click', function() {
    list.querySelectorAll('li.checked::before').forEach(li => {
      li.style.display = 'none';
    });
    list.querySelectorAll('li.checked').forEach(li => {
      li.style.display = '';
    });
});