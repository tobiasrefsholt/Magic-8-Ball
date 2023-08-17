const appContainer = document.getElementById("app");
const answers = {
    "affirmative": [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes"
    ],
    'nonCommittal': [
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again"
    ],
    'negative': [
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ]
}
let previousAnswer;

clearBallView();

function updateView(content) {
    appContainer.innerHTML = /*html*/`
        <div class="ball">
            ${content}
        </div>
        <div class="buttons">
            <button onclick="getAnswerView()">Show answer</button>
            <button onclick="clearBallView()">Clear</button>
        </div>
    `;
}

function getAnswerView() {
    let answer = getAnswer();
    let html = /*html*/ `
        <span class="answer-${answer.currentAnswerType}">${answer.currentAnswer}</span>
    `;
    updateView(html);
}

function clearBallView() {
    let html = /*html*/ `
        <span class="big-8">8</span>
    `;
    updateView(html);
}

function getAnswer() {
    let currentAnswer;
    let currentAnswerType;

    // Definer currentAnswerType som en tilfdig array i answers-objektet
    let randomIndex = Math.floor(Math.random() * 3);
    
    if (randomIndex == 0) {
        currentAnswerType = 'affirmative';
    } else if (randomIndex == 1) {
        currentAnswerType = 'nonCommittal';
    } else if (randomIndex == 2) {
        currentAnswerType = 'negative';
    }

    // Definer currentAnswer tilfelig innenfor currentAnswerType
    currentAnswer = answers[currentAnswerType][Math.floor(Math.random() * answers[currentAnswerType].length)];
    
    if (currentAnswer == previousAnswer) {
        return getAnswer()
    }
    
    previousAnswer = currentAnswer;

    // Returner array med currentAnswer og currentAnswerType(Kun for css styling)
    return {currentAnswer, currentAnswerType}
    /* updateView(); */
}