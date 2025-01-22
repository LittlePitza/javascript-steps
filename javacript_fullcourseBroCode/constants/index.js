const PI = 3.14159;
const CIRCUMFERENCE_TEXT = "Circumference: ";

document.getElementById("mySubmit").onclick = function () {
    const radiusInput = document.getElementById("myText").value;
    const radius = Number(radiusInput);

    if (isNaN(radius) || radius <= 0) {
        document.getElementById("myH3").textContent = "Please enter a valid radius.";
        return;
    }

    const circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `${CIRCUMFERENCE_TEXT}${circumference}`;
};


