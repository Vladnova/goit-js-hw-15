const input = document.querySelector('#validation-input');

input.addEventListener('blur', handlerValid);


function handlerValid(e) {
    const {target, currentTarget} = e;

    if (currentTarget.value.trim().length === Number(target.dataset.length)) {
        target.className = 'valid' 
    }else {
        target.className = 'invalid' 
    }
}

