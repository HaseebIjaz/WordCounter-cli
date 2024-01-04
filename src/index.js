// The user will enter a english paragraph and all that is needed is to just to implement counting characters and words without whitespaces.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
const wordCounter = () => __awaiter(void 0, void 0, void 0, function* () {
    const nameQuestion = {
        type: "input",
        name: "username",
        message: "What's your name ?",
        default: "Ali"
    };
    const paragraphInputQuestion = {
        type: "input",
        name: "paragraph",
        message: "Input a paragraph: ",
        default: "Ut culpa elit duis nisi veniam voluptate ut sit in ullamco tempor et officia anim. Duis consectetur cupidatat et excepteur quis magna nostrud voluptate id sit pariatur mollit velit veniam. Exercitation qui quis commodo exercitation aliqua."
    };
    const questions = [nameQuestion, paragraphInputQuestion];
    yield inquirer.prompt(questions)
        .then((answers) => {
        console.log(answers);
        console.log(answers["paragraph"].trim().split(".")[0].split(" ").length);
    });
});
wordCounter();
