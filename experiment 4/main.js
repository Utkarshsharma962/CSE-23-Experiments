function calculateResult() {
    let n = document.getElementById("subjects").value;
    n = parseInt(n);

    let resultBox = document.getElementById("result");

    
    if (!n || n <= 0) {
        resultBox.innerHTML = "⚠ Please enter a valid number of subjects.";
        return;
    }

    let total = 0;

    for (let i = 1; i <= n; i++) {
        let marks = prompt("Enter marks for Subject " + i);

        
        marks = parseFloat(marks);

        
        if (isNaN(marks) || marks < 0 || marks > 100) {
            resultBox.innerHTML =
                "⚠ Invalid marks entered. Please reload and enter values between 0–100.";
            return;
        }

        total += marks;
    }

    let average = total / n;

    let grade = "";
    let result = "";

    
    if (average >= 90) {
        grade = "A+";
    } else if (average >= 75) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    
    result = average >= 40 ? "PASS" : "FAIL";

    
    resultBox.innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}