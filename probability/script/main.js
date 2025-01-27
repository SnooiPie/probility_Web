function calculateProbabilities(outcomes, trials) {
    const probability = 1 / outcomes;
    const expectedResults = {};
    const actualResults = {};

    for (let i = 0; i < outcomes; i++) {
        expectedResults[`Outcome ${i + 1}`] = trials * probability;
        actualResults[`Outcome ${i + 1}`] = 0;
    }

    for (let i = 0; i < trials; i++) {
        const result = Math.floor(Math.random() * outcomes) + 1;
        actualResults[`Outcome ${result}`] += 1;
    }

    return [expectedResults, actualResults];
}

function calculate() {
    const outcomes = parseInt(document.getElementById('outcomes').value);
    const trials = parseInt(document.getElementById('trials').value);

    if (isNaN(outcomes) || outcomes <= 0 || isNaN(trials) || trials <= 0) {
        alert("Please enter positive numbers for both fields.");
        return;
    }

    const [expectedResults, actualResults] = calculateProbabilities(outcomes, trials);

    let resultHTML = "<div class='result-box'><h2>Expected Values (Probability):</h2>";
    for (const [outcome, expectedCount] of Object.entries(expectedResults)) {
        const expectedPercentage = (expectedCount / trials) * 100;
        resultHTML += `<p>${outcome}: ${expectedCount.toFixed(2)} times (${expectedPercentage.toFixed(2)}%)</p>`;
    }
    resultHTML += "</div>";

    resultHTML += "<div class='result-box'><h2>Actual Results:</h2>";
    for (const [outcome, actualCount] of Object.entries(actualResults)) {
        const actualPercentage = (actualCount / trials) * 100;
        resultHTML += `<p>${outcome}: ${actualCount} times (${actualPercentage.toFixed(2)}%)</p>`;
    }
    resultHTML += "</div>";

    document.getElementById('result').innerHTML = resultHTML;
}
