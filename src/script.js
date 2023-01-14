const btn_again = document.getElementById('btn-again');
const btn_check = document.getElementById('btn-check');
const hint = document.getElementById('hint');
const secret_num = document.getElementById('secret-num');
const entered_num = document.getElementById('guessed');
const score = document.getElementById('score');
const high_score = document.getElementById('high-score');
const random_number = 12;
// const random_number = Math.trunc(Math.random() * 11);
let scores = 20;
score.innerText = scores;
let highScore = 0;
high_score.innerText = highScore;

btn_check.addEventListener('click', () => {
    if (entered_num.value == random_number) {
        document.body.style.backgroundColor = '#0E9F6E';
        entered_num.style.backgroundColor = '#0E9F6E';
        secret_num.style.color = '#0E9F6E';
        secret_num.innerText = random_number;
        hint.innerText = '✅ CORRECT';
        if (scores > highScore) {
            highScore = scores;
            high_score.innerText = scores;
        }
    } else if (entered_num.value > random_number) {
        hint.innerText = '📈 Too High';
        scores = scores - 1;
        score.innerText = scores;
    } else if (entered_num.value < random_number) {
        hint.innerText = '📉 Too Low';
        scores = scores - 1;
        score.innerText = scores;
    }
});

btn_again.addEventListener('click', () => {
    entered_num.value = '';
    secret_num.style.color = '#1F2937';
    secret_num.innerText = '?';
    document.body.style.backgroundColor = '#1F2937';
    entered_num.style.backgroundColor = '#1F2937';
    scores = 20;
    score.innerText = scores;
    hint.innerText = 'Start guessing..';
});