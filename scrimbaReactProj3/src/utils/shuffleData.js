import {decode} from "html-entities";

function shuffleData(questionObj) {
    let output = []
    output.push(decode(questionObj.question))
    output.push(questionObj.correct_answer)
    for (let incorrectAns of questionObj.incorrect_answers) {
        output.push(incorrectAns)
    }
    output = shuffleArray(output)

    return output
}

export {shuffleData}


function shuffleArray(questionArr) {
    for (let i = questionArr.length - 1; i > 1; i--) {
        let j = Math.floor(Math.random() * i) + 1 // shuffle array only in range [1...end of array]
        let tmp = questionArr[i];
        questionArr[i] = questionArr[j];
        questionArr[j] = tmp;
    }

    return questionArr;
}