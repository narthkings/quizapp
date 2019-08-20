const correctAns = ['D', 'C', 'A', 'A', 'B', 'C', 'B', 'A', 'D', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // a default score
    let score = 0;

    // userAns from the radio value
    let userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    // loop through the answers of the user and check (if) their answer === correctAns position
    userAns.forEach((ans, index) => {
        if (ans === correctAns[index]) {
            score += 10;
        }
    });

    // input the score on the browser and remove the classlist
    scrollTo(0, 0);
    result.classList.remove('d-none');


    // we use the count to animate the score

    let count = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${count}%`;
        if (count === score) {
            clearInterval(timer);
        } else {
            count++;
        }

    }, 10);
});