var Score_Correct = 0;
var Score_Wrong = 0;

// calculate the surface area of a rectangular prism
function calculateRectangularPrismSurfaceArea(length, width, height) {
  return 2 * (length * width + width * height + length * height);
}

// calculate the surface area of a triangular prism                                                                  x
function calculateTriangularPrismSurfaceArea(height, length, s1, s2, s3) {
  return base * height + (s1 + s2 + s3) * length;
}

// calculate the surface area of a hexagonal prism
function calculateHexagonalPrismSurfaceArea(sideLength, height) {
  return 6 * sideLength * height + 3 * 1.73205080757 * Math.pow(sideLength, 2);
}

// calculate the surface area of a pentagonal prism
function calculatePentagonalPrismSurfaceArea(baseEdgeLength, height, apothem) {
  return 5 * apothem * baseEdgeLength + 5 * baseEdgeLength * height;
}

// Define a function to calculate the surface area of a cone
function calculateConeSurfaceArea(radius, height) {
  return (
    Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height))
  );
}

// Generate a random question
function generateQuestion() {
  const shapes = [
    "Rectangular Prism",
    "Triangular Prism",
    "Hexagonal Prism",
    "Pentagonal Prism",
    "Cone",
  ];
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

  let question, correctAnswer;

  var imgChanger = document.getElementById("img");

  //-------------------------------------------------------------------------------------------------Rectangle Prism
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
    document.getElementById("5").textContent = "";

    imgChanger.src = "img/Rectangular.png";
    correctAnswer = calculateRectangularPrismSurfaceArea(length, width, height);
    question = "What is the surface area of this Rectangular Prism?";

    //-------------------------------------------------------------------------------------------------Triangular Prism
  } else if (randomShape === "Triangular Prism") {
    const height = Math.floor(Math.random() * 10) + 1;
    const HeightWord = "Height = " + height;
    document.getElementById("1").textContent = HeightWord;

    const length = Math.floor(Math.random() * 10) + 1;
    const Lengthword = "Length = " + length;
    document.getElementById("2").textContent = Lengthword;

    const s1 = Math.floor(Math.random() * 10) + 1;
    const s1word = "Side 1 = " + s1;
    document.getElementById("3").textContent = s1word;

    const s2 = Math.floor(Math.random() * 10) + 1;
    const s2word = "Side 2 = " + s2;
    document.getElementById("4").textContent = s2word;

    const s3 = Math.floor(Math.random() * 10) + 1;
    const s3word = "Side 3 = " + s3;
    document.getElementById("5").textContent = s3word;

    imgChanger.src = "img/Triangular.png";
    correctAnswer = calculateTriangularPrismSurfaceArea(
      base,
      height,
      length,
      s1,
      s2,
      s3
    );
    question = "What is the surface area of this Triangular Prism?";

    //-------------------------------------------------------------------------------------------------Hexagonal Prism
  } else if (randomShape === "Hexagonal Prism") {
    const sideLength = Math.floor(Math.random() * 10) + 1;
    const sideLengthtWord = "Side Length = " + sideLength;
    document.getElementById("1").textContent = sideLengthtWord;

    const height = Math.floor(Math.random() * 10) + 1;
    const HeightWord = "Height = " + height;
    document.getElementById("2").textContent = HeightWord;

    document.getElementById("3").textContent = "";
    document.getElementById("4").textContent = "";
    document.getElementById("5").textContent = "";

    imgChanger.src = "img/Hexagonal.png";
    correctAnswer = calculateHexagonalPrismSurfaceArea(sideLength, height);
    question = "What is the surface area of this Hexagonal Prism?";

    //-------------------------------------------------------------------------------------------------Pentagonal Prism
  } else if (randomShape == "Pentagonal Prism") {
    //-------------------------------------------------------Base #1
    const baseEdgeLength = Math.floor(Math.random() * 10) + 1;
    const baseEdgeWord = "Base Edge = " + baseEdgeLength;
    document.getElementById("1").textContent = baseEdgeWord;

    //-------------------------------------------------------Height
    const height = Math.floor(Math.random() * 10) + 1;
    const HeightWord = "Height = " + height;
    document.getElementById("2").textContent = HeightWord;

    //-------------------------------------------------------Apothem
    const apothem = Math.floor(Math.random() * 10) + 1;
    const ApothemWord = "Apothem = " + apothem;
    document.getElementById("3").textContent = ApothemWord;

    document.getElementById("4").textContent = "";
    document.getElementById("5").textContent = "";

    imgChanger.src = "img/Pentagonal.png";
    correctAnswer = calculatePentagonalPrismSurfaceArea(
      baseEdgeLength,
      height,
      apothem
    );
    question = "What is the surface area of this Pentagonal Prism?";
  } else {
    // ----------------------------------------------------------------------------------------------Cone

    const radius = Math.floor(Math.random() * 10) + 1;
    const RadiusWord = "Radius = " + radius;
    document.getElementById("1").textContent = RadiusWord;

    const height = Math.floor(Math.random() * 10) + 1;
    const HeightWord = "Height = " + height;
    document.getElementById("2").textContent = HeightWord;

    document.getElementById("3").textContent = "";
    document.getElementById("4").textContent = "";
    document.getElementById("5").textContent = "";

    imgChanger.src = "img/cone.png";
    correctAnswer = calculateConeSurfaceArea(radius, height);
    question = `Calculate the surface area of a cone`;
  }

  //-----------------------------------------------------------------------------------------------------------Getting Correct Answer

  document.getElementById("question").textContent = question;

  // Store the correct answer in a data attribute of the form for comparison
  document
    .getElementById("surface-area-form")
    .setAttribute("data-correct-answer", correctAnswer);
}

// clears input feild and answer
function nextQuestion() {
  window.scrollTo(0, 0);
  stop;
  document.getElementById("answer").textContent = "";
  document.getElementById("user-answer").value = "";
  generateQuestion();
}

// Check the user's answer and give response
function checkAnswer() {
  window.scrollTo(0, document.body.scrollHeight);
  const userAnswer = parseFloat(document.getElementById("user-answer").value);
  const correctAnswer = parseFloat(
    document
      .getElementById("surface-area-form")
      .getAttribute("data-correct-answer")
  );

  var correctAnswerRounded = Math.round(correctAnswer);

  if (!isNaN(userAnswer)) {
    if (userAnswer === correctAnswerRounded) {
      Score_Correct = Score_Correct + 1;
      document.getElementById("answer").textContent =
        "Thats Correct The Answer Is " + correctAnswerRounded;
      document.getElementById("score_correct").textContent = Score_Correct;
    } else {
      document.getElementById("answer").textContent =
        "Sorry Thats Incorrect, The Actual Answer Is: " + correctAnswerRounded;
      Score_Wrong = Score_Wrong + 1;
      document.getElementById("score_wrong").textContent = Score_Wrong;
    }
  } else {
    alert("Please enter a valid number as your answer.");
  }
}
