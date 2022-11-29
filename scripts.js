const questionText = document.querySelector(".question-text");
const optionBox = document.querySelector(".option-box");
const currentQuestionNum = document.querySelector(".current-question-num");
const answerDescription = document.querySelector(".answer-description");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const correctAnswers = document.querySelector(".correct-answer");
const seeResultBtn = document.querySelector(".see-result-btn");
const remainingTime = document.querySelector(".remaining-time");
const timeUpText = document.querySelector(".time-up-text");
const quizHomeBox = document.querySelector(".quiz-home-box");
const quizBox = document.querySelector(".quiz-box");
const quizOverBox = document.querySelector(".quiz-over-box");
const startAgainQuizBtn = document.querySelector(".start-again-quiz-btn");
const goHomeBtn = document.querySelector(".go-home-btn");
const categoryBox = document.querySelector(".category-box");
const categoryText = document.querySelector(".category-text");
//const startQuizBtn=document.querySelector(".start-quiz-btn");
let attempt = 0;
let questionIndex = 0;
let score = 0;
let number = 0;
let myArray = [];
let interval;
let categoryIndex;


myApp = [
    {
        category: "Pipes And Cisterns",
        quizWrap: [
            {
                question: 'A cistern has two taps attached to it. Tap B can empty the cistern in 45 minutes. But Tap A can fill the cistern in just 30 minutes. Rohit started both taps unknowingly but realized his mistake after 30 minutes. He immediately closed Tap B. Now after this, in how much time will the cistern be filled?',
                options: ['30 minutes', '45 minutes', '15 minutes', '20 minutes'],
                answer: 3,

            },
            {
                question: 'Pipe R can empty a full tank in 30 hours. But two pipes P and Q can fill a tank in 15 hours and 10 hours respectively. Ram unknowingly opened all three taps. After 2 hours Shyam realized it and closed Pipe R. Due to this mistake how much time more would it take to fill the tank?',
                options: ['18 minutes ', '24 minutes ', '1 hour 20 minutes', '2 hours 15 minutes'],
                answer: 1
            },
            {
                question: 'A cistern is filled by Pipe A and Pipe B together in 2.4 hours. Pipe A alone can fill the cistern at the rate of 100 litres per hour. Pipe B alone can fill the cistern in 4 hours. What is the capacity of the cistern?',
                options: ['1200 litres', '600 litres', '1000 litres', '500 litres'],
                answer: 1
            },
            {
                question: 'There is a leak at the bottom of a cistern. Due to this it takes 8 hours to fill the cistern. Had there not been a leak, it would take one hour less to fill the cistern. How much time does it take for the leak to completely empty the cistern?',
                options: ['48 hours', '55(1/3) hours', '56 hours ', '56 hours'],
                answer: 2
            },
            {
                question: 'Tap P alone fills a cistern in 2 hours; while tap Q alone fills the same cistern in 3 hours. A new tap R is attached to the bottom of the cistern which can empty the completely filled cistern in 6 hours. Sunny started all three taps together at 9am. When will the tank be full?',
                options: ['10.30 am ', '11.15 am', '12 am', '9.45 am'],
                answer: 3,

            },
            {
                question: 'A cistern can be filled in 6 hours by taps P and Q. If tap R also joins them, then cistern is filled in 5 hours. Tap P can fill the cistern at twice the rate of tap Q. In what time tap Q and R fill the cistern?',
                options: [' 9.75 hours', ' 10. 90 hours', '11.25 hours', '12.90 hours'],
                answer: 2
            },
            {
                question: 'A cistern is normally filled with water in 10 hours but takes 5 hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty the cistern in',
                options: [' 20 hours', ' 40 hours', ' 50 hours', ' 30 hours'],
                answer: 3
            },
            {
                question: 'A tank has three taps P, Q and R. Taps P and Q can fill the tank in 1.5 and 2 hours, respectively. Tap R can empty the completely filled tank in just half hour. Tap P is opened at 8 am, tap Q is opened at 9am and tap R is opened at 10 am. At what exact time will the tank be empty?',
                options: ['12 pm', '1.25 pm', ' 12.12 pm', ' 12.28 pm'],
                answer: 2
            },
            {
                question: 'A pipe can fill a tank in 6 hours. Another pipe can empty the tank in 12 hours. If both pipes are opened simultaneously, the part of tank filled by both pipes in 1 hour is?',
                options: ['1/9 th part', '1/6 th part', '1/12 th part', '1/3 th part'],
                answer: 2,

            },
            {
                question: 'Pipe A can fill a tank 5 times faster than Pipe B and takes 32 minutes less than Pipe B to fill the tank. If both the pipes are opened together, then in how much time the tank would be full?',
                options: ['32/3 minutes', '32/5 minutes', ' 20/3 minutes', '5/32 minutes'],
                answer: 2
            }
        ]
    },
    {
        category: "Probability",
        quizWrap: [
            {
                question: ' What is the probability of an impossible event?',
                options: ['1', '0', '  Insufficient data', ' Not defined'],
                answer: 1
            },
            {
                question: ' Two unbiased coins are tossed. What is the probability of getting at most one head?',
                options: ['3⁄4', ' 1⁄6', '1⁄3', '1⁄2'],
                answer: 0
            },
            {
                question: ' Who provided the definition for probability?',
                options: ['Archimedes', 'Einstein', 'Euclid', 'Simon Laplace'],
                answer: 3
            },
            {
                question: ' Company A produces 10% defective products, Company B produces 20% defective products and C produces 5% defective products. If choosing a company is an equally likely event, then find the probability that the product chosen is defective.',
                options: ['0.11', '0.21', '0.22', '0.12'],
                answer: 2
            },
            {
                question: 'A problem in mathematics is given to three students A, B and C. If the probability of A solving the problem is 1⁄2 and B not solving it is 1⁄4. The whole probability of the problem being solved is 63⁄64 then what is the probability of solving it?',
                options: [' 1⁄2', ' 7⁄8', '  1⁄64', ' 1⁄8'],
                answer: 1
            },
            {
                question: ' Which of the following is a table with all possible values of a random variable and its corresponding probabilities?',
                options: ['Probability Density Function', ' Probability Mass Function', 'Probability Distribution', 'Cumulative distribution function'],
                answer: 2,

            },
            {
                question: 'The probability that at least one of the events Q and R occur is 0.6. If Q and R have probability of occurring together as 0.2, then P(Q) + P(R) is?',
                options: [' 1.2', ' 0.8', '0.4  ', ' Indeterminate'],
                answer: 0,
            },

            {
                question: 'Let there be two newly launched phones A and B. The probability that phone A has good battery life is 0.7 and the probability that phone B has a good battery life is 0.8. Then find the probability that a phone has good battery life.',
                options: [' 0.45', ' 0.85', '0.75  ', ' 0.65'],
                answer: 2,
            },
            {
                question: ' Suppose box A contains 4 green and 5 black coins and box B contains 6 green and 3 black coins. A coin is chosen at random from the box A and placed in box B. Finally, a coin is chosen at random from among those now in box B. What is the probability a blue coin was transferred from box A to box B given that the coin chosen from box B is green?',
                options: ['  14⁄29', '  15⁄29', ' 7⁄10  ', '  1⁄2'],
                answer: 1,
            },
            {
                question: '  Which of the following mentioned standard Probability density functions is applicable to discrete Random Variables?',
                options: ['  Rayleigh Distribution', ' Exponential Distribution', 'Poisson Distribution ', ' Gaussian Distribution'],
                answer: 2,
            }

        ]
    },
    {
        category: "Problem On Ages",
        quizWrap: [
            {
                question: "Age of Umesh will be 4 times the age of Reena in 6 years from today. If ages of Umesh and Mahesh are 7 times and 6 times the age of Reena respectively, what is present age of Umesh?",
                options: [" 64 years", " 30 years", " 48 years", " 42 years"],
                answer: 3
            },
            {
                question: " Rohan's age is five times Ajay’s and seven-eighteenth of Meena’s age. The sum of the ages of all three of them is 132 years. How much younger is Ajay to Meena?",
                options: ["56 years", "83 years", "27 years", " Cannot be determined"],
                answer: 1,
            },
            {
                question: "The average age of 10 students and their teacher is 15 years. The average age of the first seven students is 15 yr and that of the last three is 11 yr. What is the teacher's age?",
                options: ["33 years", "30 years", "27 years", "24 years"],
                answer: 2
            },
            {
                question: " Ram and Shyam’s average age is 65 years. The average age of Ram, Shyam and John is 53 years. What is the age of John?",
                options: ["29 years", "31 years", "59 years", "45 years"],
                answer: 0,

            }
            ,
            {
                question: "The present ages of Aman and Nina are 59 and 37 years, respectively. What was the ratio of the ages of Nina and Aman 13 years ago?",
                options: ["3:2", "46:25", "12:23", "8:3"],
                answer: 2
            },
            {
                question: " Rohan is as much younger than Ajay as he is older than Meena. The sum of ages of Ajay and Meena is 108 years. How old is Rohan?",
                options: [" 32 years", " 64 years", " 52 years", " 36 years"],
                answer: 2
            },
            {
                question: "Average age of a family of 4 members was 19 years, 4 years back. Birth of a new child kept the average age of the family same even today. How old is the child today?",
                options: ["4 years", "1 years", "2 years", "3 years"],
                answer: 3
            },
            {
                question: "12 years ago, age of P was 3 times the age of Q. After 12 years, ratio of ages of Q to P will be 2:3. What is the present age of P?",
                options: ["54 years", "36 years", "24 years", "144 years"],
                answer: 1
            },
            {
                question: "The present ages of A and B are 42 and 36 years, respectively. After K years, the ratio of ages of B to A will be 15:17.What is value of K?",
                options: ["9 years", "12 years", "5 years", "3"],
                answer: 0,

            }
            ,
            {
                question: "A father is 4 times as old as his son. 8 years hence, the ratio of father’s age to the son’s age will be 20:7. What is the sum of their present ages?",
                options: ["50", "72", "68", "65"],
                answer: 3
            },

        ]
    },

    {
        category: "Profit And Loss",
        quizWrap: [
            {
                question: ' A person sold a stove for Rs. 423 and incurred a loss of 6%. At what price would it be sold so as to earn a profit of 8%?',
                options: ['525', '500', ' 490', ' 486'],
                answer: 3
            },
            {
                question: ' A fruit seller buys lemons at 2 for a rupee and sells then at 5 for three rupees. His gain percent is',
                options: [' 10%', ' 15%', ' 20%', ' 25%'],
                answer: 2
            },
            {
                question: 'A sells a car to B at 10% loss. If B sells it for Rs. 54000 and gains 20%, the cost price of the car for A was',
                options: ['25000', '50000', '37500', '60000'],
                answer: 1
            },
            {
                question: ' Ramesh sold a statue for a price 25% higher than the original price of the statue. He had however bought the statue at 20% discount on the original price. With the profit of Rs. 2025, find the original price of the statue.',
                options: [' 6000', ' 7500', ' 3500', ' 4500'],
                answer: 3,

            },
            {
                question: 'If selling price of 40 articles is equal to cost price of 50 articles, the loss or gain percent is',
                options: [' 25% loss', ' 20% loss', '25% gain  ', '20% gain '],
                answer: 2
            },
            {
                question: 'Two bicycles were sold for Rs. 3990 each, gaining 5% on one and losing 5% on the other. The gain or loss percent on the whole transaction is',
                options: ['Neither gain nor loss', '2.5% gain', '2.5% loss ', ' 0.25% loss'],
                answer: 2
            },
            {
                question: 'The ratio of cost price and selling price is 4:5. The profit percent is',
                options: ['10%', '20%', '25% ', '30%'],
                answer: 2
            },
            {
                question: 'If a person sells a ‘sari’ for Rs. 5200, making a profit of 30%, then the cost price of the sari is',
                options: ['Rs. 4420 ', 'Rs. 4000 ', 'Rs. 3900  ', 'Rs. 3800 '],
                answer: 0
            },
            {
                question: 'A shopkeeper earns a profit of 15% after selling a book at 20% discount on the printed price. The ratio of the cost price and printed price of the book is? ',
                options: [' 20:23', '23:20 ', ' 16:23', ' 23:16 '],
                answer: 2
            },
            {
                question: 'Simran bought pet food worth Rs. 56000. She then sold 1/3rd of it incurring a loss of 40%. What profit she must earn on rest of the supplies to nullify this loss? ',
                options: ['25% ', '20% ', '45% ', '50% '],
                answer: 1
            }
        ]
    },
]
function createCategory() {
    //console.log(myApp[1].category);
    for (let i = 0; i < myApp.length; i++) {
        categoryList = document.createElement("div");
        categoryList.innerHTML = myApp[i].category;
        categoryList.setAttribute("data-id", i);
        categoryList.setAttribute("onclick", "selectCategory(this)");
        categoryBox.appendChild(categoryList)
    }

}
function selectCategory(ele) {
    categoryIndex = ele.getAttribute("data-id");
    //console.log(categoryIndex)
    categoryText.innerHTML = myApp[categoryIndex].category;
    quizHomeBox.classList.remove("show");
    quizBox.classList.add("show");
    nextQuestion();
}
function load() {
    number++;
    questionText.innerHTML = myApp[categoryIndex].quizWrap[questionIndex].question;
    creatOptions();
    scoreBoard();
    currentQuestionNum.innerHTML = number + " / " + myApp[categoryIndex].quizWrap.length;
}
function creatOptions() {
    optionBox.innerHTML = "";
    let animationDelay = 0.2;
    for (let i = 0; i < myApp[categoryIndex].quizWrap[questionIndex].options.length; i++) {
        const option = document.createElement("div");
        option.innerHTML = myApp[categoryIndex].quizWrap[questionIndex].options[i];
        option.classList.add("option");
        option.id = i;
        option.style.animationDelay = animationDelay + "s";
        animationDelay = animationDelay + 0.2;
        option.setAttribute("onclick", "check(this)");
        optionBox.appendChild(option);

    }
}

function generateRandomQuestion() {
    const randomNumber = Math.floor(Math.random() * myApp[categoryIndex].quizWrap.length);
    let hitDuplicate = 0;
    if (myArray.length == 0) {
        questionIndex = randomNumber;
    }
    else {
        for (let i = 0; i < myArray.length; i++) {
            if (randomNumber == myArray[i]) {
                //if duplicate found
                hitDuplicate = 1;

            }
        }
        if (hitDuplicate == 1) {
            generateRandomQuestion();
            return;
        }
        else {
            questionIndex = randomNumber;
        }
    }

    myArray.push(randomNumber);
    console.log(myArray)
    load();
}

function check(ele) {
    const id = ele.id;
    if (id == myApp[categoryIndex].quizWrap[questionIndex].answer) {
        ele.classList.add("correct");
        score++;
        scoreBoard();
    }
    else {
        ele.classList.add("wrong");
        //show correct option when clicked answer is wrong
        for (let i = 0; i < optionBox.children.length; i++) {
            if (optionBox.children[i].id == myApp[categoryIndex].quizWrap[questionIndex].answer) {
                optionBox.children[i].classList.add("show-correct");
            }
        }
    }
    attempt++;
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
    stopTimer();

    if (number == myApp[categoryIndex].quizWrap.length) {
        quizOver();
    }
}
function timeIsUp() {
    showTimeUpText();
    //when time is up Show Correct Answer
    for (let i = 0; i < optionBox.children.length; i++) {
        if (optionBox.children[i].id == myApp[categoryIndex].quizWrap[questionIndex].answer) {
            optionBox.children[i].classList.add("show-correct");
            if (number == myApp[categoryIndex].quizWrap.length) {
                quizOver();
            }
        }
    }
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
    if (number == myApp.length) {
        quizOver();
    }
}
function startTimer() {
    let timeLimit = 10;
    remainingTime.innerHTML = timeLimit;
    remainingTime.classList.remove("less-time");
    interval = setInterval(() => {
        timeLimit--;
        if (timeLimit < 10) {
            timeLimit = "0" + timeLimit;

        }
        if (timeLimit < 6) {
            remainingTime.classList.add("less-time");
        }
        remainingTime.innerHTML = timeLimit;
        if (timeLimit == 0) {
            clearInterval(interval);
            timeIsUp();
        }
    }, 1000)
}
function stopTimer() {
    clearInterval(interval);
}
function disableOptions() {
    for (let i = 0; i < optionBox.children.length; i++) {
        optionBox.children[i].classList.add("already-answered")
    }
}
function showAnswerDescription() {
    if (typeof myApp[categoryIndex].quizWrap[questionIndex].description !== 'undefined') {
        answerDescription.classList.add("show");
        answerDescription.innerHTML = myApp[categoryIndex].quizWrap[questionIndex].description;
    }

}
function hideAnswerDescription() {
    answerDescription.classList.remove("show");
    answerDescription.innerHTML = "";
}

function showNextQuestionBtn() {
    nextQuestionBtn.classList.add("show");
}
function hideNextQuestionBtn() {
    nextQuestionBtn.classList.remove("show");
}
function showTimeUpText() {
    timeUpText.classList.add("show");
}
function hideTimeUpText() {
    timeUpText.classList.remove("show");

}
function scoreBoard() {
    correctAnswers.innerHTML = score;
}

nextQuestionBtn.addEventListener("click", nextQuestion);

function nextQuestion() {
    generateRandomQuestion();
    hideNextQuestionBtn();
    hideAnswerDescription();
    hideTimeUpText();
    startTimer();
}
function quizResult() {
    document.querySelector(".total-questions").innerHTML = myApp[categoryIndex].quizWrap.length;
    document.querySelector(".total-attempt").innerHTML = attempt;
    document.querySelector(".total-correct").innerHTML = score;
    document.querySelector(".total-wrong").innerHTML = attempt - score;
    const percentage = (score / myApp[categoryIndex].quizWrap.length) * 100;
    document.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
}
function resetQuiz() {
    attempt = 0;
    score = 0;
    number = 0;
    myArray = [];
}

function quizOver() {
    nextQuestionBtn.classList.remove("show");
    seeResultBtn.classList.add("show");
}
seeResultBtn.addEventListener("click", () => {
    quizBox.classList.remove("show");
    seeResultBtn.classList.remove("show");
    quizOverBox.classList.add("show");
    quizResult();
})

startAgainQuizBtn.addEventListener("click", () => {
    quizBox.classList.add("show");
    quizOverBox.classList.remove("show");
    resetQuiz();
    nextQuestion();
})

goHomeBtn.addEventListener("click", () => {
    quizOverBox.classList.remove("show");
    quizHomeBox.classList.add("show")
    resetQuiz();
})


window.onload = () => {
    createCategory();
}