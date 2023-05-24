const btn = document.querySelector('#btn')
const notesArea = document.querySelector('.notes')
const notes = document.querySelectorAll('.input-box')

function showNotes(){
    notesArea.innerHTML = localStorage.getItem('notes')
}
showNotes()
function updateStorage(){
    localStorage.setItem('notes', notesArea.innerHTML)
}

btn.addEventListener('click', ()=>{
    let inputBox = document.createElement('p')
    let img = document.createElement('img')
    inputBox.className = 'input-box'
    img.src = 'del.jpg'
    inputBox.setAttribute('contenteditable','true')
    notesArea.appendChild(inputBox).appendChild(img)
}
)
notesArea.addEventListener("click", (e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        updateStorage()
    }else if(e.target.tagName === 'p'){
        notes = document.querySelectorAll('input-box');
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})

document.addEventListener('keydown', event=>{
if(event.key === 'Enter'){
document.execCommand('insertLineBreak')
event.preventDefault()
}
})