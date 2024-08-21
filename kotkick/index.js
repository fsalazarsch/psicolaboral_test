Object.keys(questions).forEach(questionId => {
    const question = questions[questionId];
    console.log(`Pregunta ${questionId}:`);
    Object.keys(question.options).forEach(optionText => {
        const scores = question.options[optionText];
        console.log(`  Opción: ${optionText}`);
        Object.keys(scores).forEach(dimension => {
            console.log(`    Dimensión ${dimension}: ${scores[dimension]}`);
        });
    });
});
