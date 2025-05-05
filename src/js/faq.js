
const questions = document.querySelectorAll(".question");


questions.forEach((question) => {
    const questionTrigger = question.querySelector(".question-trigger");
    const answer = question.querySelector("p");
    
    questionTrigger.addEventListener("click", () => {
        answer.toggleAttribute("hidden");
        console.log("|a")
    });
});