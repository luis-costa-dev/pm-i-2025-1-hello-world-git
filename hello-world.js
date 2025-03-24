const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }
}
nameInput.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        messageP.innerText = `Hello World, ${nameInput.value}!`;
    }
}
)

nameInput.addEventListener('keydown', function(event){
    if (event.key === 'Escape') {
        nameInput.value = '';
    }
}
)

const Apagar = () =>{
    nameInput.value = '';
    messageP.innerText = '';
}

const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}