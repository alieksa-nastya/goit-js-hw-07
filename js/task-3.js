{/* <input type="text" id="name-input" placeholder="Please enter your name" />
    <h1>Hello, <span id="name-output">Anonymous</span>!</h1> */}


const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector('#name-output')


function onInputChange(e) {
    const inputValue = e.target.value.trim();

    if (inputValue) {
        nameOutput.textContent = inputValue;
    } else {
        nameOutput.textContent = 'Anonymous';
    }
}

nameInput.addEventListener('input', onInputChange);




