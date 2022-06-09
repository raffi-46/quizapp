const apiUrl = 'https://opentdb.com/api.php?amount=50';
fetch(apiUrl).then(res => res.json()).then(data => {
    let quizData = data.results;
    QuizData_Length = quizData.length;
    
    let qNum = Math.floor((Math.random() * (QuizData_Length)) + 1);
    let quizQuestion = quizData[qNum].question;
    let quizCorrectAnswer = quizData[qNum].correct_answer;
    let quizincorrectAnswers = quizData[qNum].incorrect_answers;
    let quizCategory = quizData[qNum].category;
    let quizDiffLevel = quizData[qNum].difficulty;
    
    console.log("API Data:" , quizData);
    console.log(qNum);
    console.log(quizQuestion);
    console.log(quizCorrectAnswer);
    console.log(quizincorrectAnswers);
    console.log(quizCategory);
    console.log(quizDiffLevel);

    let quizDataKeys = ["question","correct_answer","incorrect_answers","category","difficulty"];
    let rNum = Math.floor((Math.random() * (quizincorrectAnswers.length +1)) );
    
    quizincorrectAnswers.splice(rNum,0,(quizCorrectAnswer))
    console.log(rNum);
    console.log(quizincorrectAnswers);

       
})
