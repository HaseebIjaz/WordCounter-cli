// The user will enter a english paragraph and all that is needed is to just to implement counting characters and words without whitespaces.

import inquirer, { Question, QuestionCollection } from "inquirer"


const wordCounter = async () => {
    const nameQuestion: Question = {
        type: "input",
        name: "username",
        message: "What's your name ?",
        default: "Ali"
    };
    const paragraphInputQuestion: Question = {
        type: "input",
        name: "paragraph",
        message: "Input a paragraph: ",
        default: "Ut culpa elit duis nisi veniam voluptate ut sit in ullamco tempor et officia anim. Duis consectetur cupidatat et excepteur quis magna nostrud voluptate id sit pariatur mollit velit veniam. Exercitation qui quis commodo exercitation aliqua."
    };
    const questions:QuestionCollection = [ nameQuestion,paragraphInputQuestion];
    await inquirer.prompt(questions)
                    .then((answers) => {
                        let wordsArray = answers["paragraph"].trim().split(".").trim().join(" ");
                        wordsArray.split("")
                    })
}

wordCounter();