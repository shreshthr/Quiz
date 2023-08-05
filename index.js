#!/usr/bin/env node
import readline from 'readline';

let questions = ["Which city did I complete my postgraduate program in Applied AI Solutions?: ",
                 "What are my primary professional skills? Choose the best combination.: ",
                 "Where did I intern as a Data Analyst in India?: ",
                 "Which of the following projects did I not work upon?:: ",
                 "Which university did I graduate from with a B.Tech in Computer Science and Engineering?: "];

let options = [["A. Vancouver", "B. Montreal", "C. Toronto", "D. Calgary"],
               ["A. Development and Design", "B. Data Science and Project Management", "C. Graphic Design and Cloud Computing", "D. Data Science and Development"],
               ["A. Deloitte", "B. Ernst and Young", "C. KPMG", "D. PwC"],
               ["A. Movie Revenue Prediction", "B. Static Landing Page", "C. Exploratory Data Analysis", "D. Dataset Creation"],
               ["A. SRM University", "B. Delhi University", "C. National Institute of Fashion Technology", "D. Christ University"]];

let answers = ["C", "D", "B", "B", "A"];
let guesses = [];
let score = 0;
let question_num = 0;

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question_num) {
    if(question_num == 0) {
        console.log("-------------------------");
        console.log("Welcome To A Fun Quiz 🔥");
    }
    if(question_num < questions.length) {
        console.log("-------------------------");
        console.log(questions[question_num]);
        for(let option of options[question_num]) {
            console.log(option);
        }

        rl.question("Enter (A, B, C, D): ", (guess) => {
            guess = guess.toUpperCase();
            guesses.push(guess);
            if(guess === answers[question_num]) {
                score += 1;
                console.log("CORRECT 🎉");
            } else {
                console.log("INCORRECT 😰");
            }
            askQuestion(question_num + 1);
        });
    } else {
        console.log("----------------------");
        console.log("       RESULTS        ");
        console.log("----------------------");

        console.log("answers: ", answers.join(" "));
        console.log("guesses: ", guesses.join(" "));

        score = parseInt(score / questions.length * 100);
        if (score == 100) {
            console.log(`Your score is: ${score}%`);
            "Congratulations on completing the quiz! Now you know a bit more about my education, skills, experience, and projects. "
            console.log("Congratulations on completing the quiz! 👏");
            console.log("--------------------------------------------------------------------------");
            console.log("- My name is Shreshth Rajpal, and I am actively seeking job opportunities,");
            console.log("  having done projects in both Data Science and Development.");
            console.log("- Portfolio: https://shreshth.streamlit.app/");
            console.log("- Get In Touch: shreshthrajpal@gmail.com ");
            console.log("--------------------------------------------------------------------------");
        } else {
            console.log(`Your score is: ${score}%`);
            console.log("-------------------------------------------------------");
            console.log(`Please complete the game to view my portfolio... 🚀`);
            console.log("-------------------------------------------------------");
        }
        rl.close();
    }
}

askQuestion(question_num);