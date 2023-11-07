let display1 = document.querySelector('#display1');
let feedback = document.querySelector('#feedback');
let result = document.querySelector('#result');
let button = document.querySelector('#btn');
let button2 = document.querySelector('#btn2');

let sum;
let trys_left = 3;

const gen_new = () => {
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
    return sum;
}

const changeBgColor = (color) => {
    document.body.classList.remove('bg-slate-700');
    document.body.classList.remove('bg-green-700');
    document.body.classList.remove('bg-red-700');
    document.body.classList.add(color);
}

const changeInputColor = (color, color2) => {
    result.classList.remove('bg-gray-50');
    result.classList.remove('dark:bg-gray-700');
    result.classList.remove('bg-yellow-200');
    result.classList.remove('dark:bg-yellow-400');
    result.classList.add(color);
    result.classList.add(color2);
}

const feedBack = (text) => {
    feedback.innerHTML = text;
}

const reset = () => {
    changeBgColor('bg-slate-700');
    result.value = '';
    changeInputColor('bg-gray-50', 'dark:bg-gray-700');
    feedBack('');
    button2.removeEventListener('click', () => { });
    button2.style.display = 'none';
    button.style.display = 'block';
    trys_left = 3;

    sum = gen_new();
}

const main = () => {
    button2.style.display = 'none';

    sum = gen_new();

    button.addEventListener('click', () => {
        let input = parseInt(result.value);
        if (input == sum) {
            feedBack('Helyes!');
            changeBgColor('bg-green-700');
            changeInputColor('bg-gray-50', 'dark:bg-gray-700')
            button2.style.display = 'block';
            button.style.display = 'none';
            button2.addEventListener('click', () => {reset();});
            button.removeEventListener('click', () => { });
        } else {
            trys_left--;
            if (trys_left > 0) {
                feedBack(`Hibás! Még ${trys_left} próbálkozásod van.`);
                changeBgColor('bg-slate-700');
                changeInputColor('bg-yellow-200', 'dark:bg-yellow-400');
            } else {
                feedBack(`Hibás! A helyes eredmény: ${sum}`);
                changeBgColor('bg-red-700');
                changeInputColor('bg-gray-50', 'dark:bg-gray-700');
                button2.style.display = 'block';
                button.style.display = 'none';
                button2.addEventListener('click', () => {reset();});
                button.removeEventListener('click', () => { });
            }
        }
    });
};

main();