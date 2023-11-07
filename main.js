let display1 = document.querySelector('#display1');
let feedback = document.querySelector('#feedback');
let result = document.querySelector('#result');
let button = document.querySelector('#btn');
let button2 = document.querySelector('#btn2');

const reset = () => {
    document.body.style.backgroundColor = 'white';
    result.value = '';
    result.style.backgroundColor = 'white';
    feedback.innerHTML = '';
    button2.removeEventListener('click', () => { });
    button2.style.display = 'none';
    button.style.display = 'block';
    main();
}

const main = () => {
    button2.style.display = 'none';
    let trys_left = 3;

    const helper = (a, b) => {
        if (a >= b) {
            return NaN;
        }
        return Math.floor(Math.random() * (b - a)) + a;
    }


    let num1 = helper(100, 200);
    let num2 = helper(100, 200);
    let sum = num1 + num2;
    display1.innerHTML = `${num1} + ${num2} = `;




    button.addEventListener('click', () => {
        let input = parseInt(result.value);
        if (input == sum) {
            feedback.innerHTML = 'Helyes!';
            document.body.style.backgroundColor = 'green';
            result.style.backgroundColor = 'green';
            button2.style.display = 'block';
            button.style.display = 'none';
            button2.addEventListener('click', () => {reset();});
            button.removeEventListener('click', () => { });
        } else {
            trys_left--;
            if (trys_left > 0) {
                feedback.innerHTML = `Hibás! Még ${trys_left} próbálkozásod van.`;
                result.style.backgroundColor = 'yellow';
            } else {
                feedback.innerHTML = `Hibás! A helyes eredmény: ${sum}`;
                document.body.style.backgroundColor = 'red';
                result.style.backgroundColor = 'red';
                button2.style.display = 'block';
                button.style.display = 'none';
                button2.addEventListener('click', () => {reset();});
                button.removeEventListener('click', () => { });
            }
        }
    });
};

main();