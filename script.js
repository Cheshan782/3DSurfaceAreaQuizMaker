// calculate the surface area of a rectangular prism
function calculateRectangularPrismSurfaceArea(length, width, height) {
  return 2 * (length * width + width * height + length * height);
}

// calculate the surface area of a triangular prism
function calculateTriangularPrismSurfaceArea(base, height, length) {
  return 2 * ((base * length) / 2) + base * length + 2 * ((base * height) / 2);
}

// calculate the surface area of a hexagonal prism
function calculateHexagonalPrismSurfaceArea(sideLength, height) {
  return (
    6 * (((3 * Math.sqrt(3)) / 2) * sideLength * sideLength) +
    6 * sideLength * height
  );
}

// calculate the surface area of a trapezoidal prism
function calculateTrapezoidalPrismSurfaceArea(base1, base2, height, length) {
  return 2 * (0.5 * (base1 + base2) * height + base1 * length + base2 * length);
}

// Define a function to calculate the surface area of a cone
function calculateConeSurfaceArea(radius, height) {
  return Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));
}

// Generate a random question
function generateQuestion() {
  const shapes = [
    "Rectangular Prism",
    "Triangular Prism",
    "Hexagonal Prism",
    "Trapezoidal Prism",
    "Cone"
  ];
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

  let question, correctAnswer;

  var imgChanger = document.getElementById('img');
  
  //-------------------------------------------------------------------------------------------------Rectangle Prism x
  if (randomShape === "Rectangular Prism") {
    const length = Math.floor(Math.random() * 10) + 1;
    const Lengthword = "Length = " + length;
    document.getElementById("1").textContent = Lengthword;

    const width = Math.floor(Math.random() * 10) + 1;
    const WidthWord = "Width = " + width;
    document.getElementById("2").textContent = WidthWord;

    const height = Math.floor(Math.random() * 10) + 1;
    const HeightWord = "Height = " + height;
    document.getElementById("3").textContent = HeightWord;

    document.getElementById("4").textContent = "";

    imgChanger.src = "img/Rectangular.png";
    correctAnswer = calculateRectangularPrismSurfaceArea(length, width, height);
    question = 'What is the surface area of this Rectangular Prism?';

  //-------------------------------------------------------------------------------------------------Triangular Prism x
  } else if (randomShape === "Triangular Prism") {
    const base = Math.floor(Math.random() * 10) + 1;
    const baseWord = "Base = " + base;
    document.getElementById("1").textContent = baseWord;

    const height = Math.floor(Math.random() * 10) + 1;
    const HeightWord = "Height = " + height;
    document.getElementById("2").textContent = HeightWord;

    const length = Math.floor(Math.random() * 10) + 1;
    const Lengthword = "Length = " + length;
    document.getElementById("3").textContent = Lengthword;

    document.getElementById("4").textContent = "";

    imgChanger.src = "img/Triangular.png";
    correctAnswer = calculateTriangularPrismSurfaceArea(base, height, length);
    question = 'What is the surface area of this Triangular Prism?';

  //-------------------------------------------------------------------------------------------------Hexagonal Prism x
  } else if (randomShape === "Hexagonal Prism") {

    const sideLength = Math.floor(Math.random() * 10) + 1;
    const sideLengthtWord = "Side Length = " + sideLength;
    document.getElementById("1").textContent = sideLengthtWord;

    const height = Math.floor(Math.random() * 10) + 1;
    const HeightWord = "Height = " + height;
    document.getElementById("2").textContent = HeightWord;

    document.getElementById("3").textContent = "";
    document.getElementById("4").textContent = "";

    imgChanger.src = "img/Hexagonal.png";
    correctAnswer = calculateHexagonalPrismSurfaceArea(sideLength, height);
    question = 'What is the surface area of this Hexagonal Prism?';

  //-------------------------------------------------------------------------------------------------Trapezodial Prism x
  } else if (randomShape == "Trapezoidal Prism"){
    //-------------------------------------------------------Base #1
    const base1 = Math.floor(Math.random() * 10) + 1;
    const base1Word = "Base 1 = " + base1;
    document.getElementById("1").textContent = base1Word;

    //-------------------------------------------------------Base #2
    const base2 = Math.floor(Math.random() * 10) + 1;
    const base2Word = "Base 2 = " + base2;
    document.getElementById("2").textContent = base2Word;

    //-------------------------------------------------------Height
    const height = Math.floor(Math.random() * 10) + 1;
    const HeightWord = "Height = " + height;
    document.getElementById("3").textContent = HeightWord;

    //-------------------------------------------------------Length
    const length = Math.floor(Math.random() * 10) + 1;
    const Lengthword = "Length = " + length;
    document.getElementById("4").textContent = Lengthword;

    imgChanger.src = "img/Trapezodial.png";
    correctAnswer = calculateTrapezoidalPrismSurfaceArea(base1, base2, height, length);
    question = 'What is the surface area of this Trapezodial Prism?';
  } else { // Cone

  const radius = Math.floor(Math.random() * 10) + 1;
  const RadiusWord = "Radius = " + radius;
  document.getElementById("1").textContent = RadiusWord;

  const height = Math.floor(Math.random() * 10) + 1;
  const HeightWord = "Height = " + height;
  document.getElementById("2").textContent = HeightWord;

  document.getElementById("3").textContent = "";
  document.getElementById("4").textContent = "";
  imgChanger.src = "img/cone.png";
  correctAnswer = calculateConeSurfaceArea(radius, height);
  question = `Calculate the surface area of a cone`;
  }

  document.getElementById("question").textContent = question;

  // Store the correct answer in a data attribute of the form for comparison
  document
    .getElementById("surface-area-form")
    .setAttribute("data-correct-answer", correctAnswer);
}

// clears input feild and answer
function nextQuestion() {
  window.scrollTo(0, 0);
  document.getElementById('answer').textContent = '';
  document.getElementById('user-answer').value = '';
  generateQuestion();
}

// Check the user's answer and give feedback
function checkAnswer() {
  window.scrollTo(0, document.body.scrollHeight);
  const userAnswer = parseFloat(document.getElementById("user-answer").value);
  const correctAnswer = parseFloat(
    document
      .getElementById("surface-area-form")
      .getAttribute("data-correct-answer")
  );

  var correctAnswerRounded = Math.round(correctAnswer)

  if (!isNaN(userAnswer)) {
    if (userAnswer === correctAnswer) {
      document.getElementById("answer").textContent = "Correct !!";
    } else {
      document.getElementById("answer").textContent = "Incorrect, the answer is: "+ correctAnswerRounded;    
    }

  } else {
    alert("Please enter a valid number as your answer.");
  }
}
//By: Cheshan 