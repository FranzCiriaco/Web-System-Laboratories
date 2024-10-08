const wrestler = document.getElementById('wrestler');
const catchphrase = document.getElementById('catchphrase');
const addBtn = document.getElementById('addBtn');


addBtn.addEventListener('click', ()=>{
    const newWrestler = wrestler.value;
    const newCatchphrase = catchphrase.value;

    const span = document.createElement('span');
    const small = document.createElement('small');

    const div = document.createElement('div');

    span.innerHTML = newWrestler;
    small.innerHTML = newCatchphrase;

    div.classList.add('Baller-info');

    div.append(span);
    div.append(small);

    const li = document.createElement('li');
    li.append(span);
    li.append(small);

})

console.log(li);