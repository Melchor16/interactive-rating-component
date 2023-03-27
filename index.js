w = window
d = document

const $rtState = d.getElementById('rt-state'),
$tyState = d.getElementById('ty-state'),
$submit = d.querySelector('#submit'),
$calif = d.getElementById('calif'),
$selection = d.querySelector('.selection');

let number = 0;

$calif.addEventListener('click', e => {
    if(e.target.tagName === 'P'){
        for(let i=0; i<$calif.getElementsByTagName('P').length; i++){
            $calif.getElementsByTagName('P')[i].classList.replace('selected', 'unselected')
        }
        e.target.classList.toggle('selected');
        e.target.classList.toggle('unselected');
        number = e.target.textContent
        console.log(number)
    }
})

$submit.addEventListener('click', (e) => {
    if(number>0){
        $rtState.classList.toggle('hidden');
        $tyState.classList.toggle('hidden');

    $selection.textContent = `You selected ${number} out of 5`
    }
})