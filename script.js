let div = document.querySelector('div')

document.getElementById('first-button').addEventListener('click', () => {
    div.style.color = 'green';
})

document.getElementById('second-button').addEventListener('click', () => {
    div.style.color = 'red';
})