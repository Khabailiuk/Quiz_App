let questions = [

  {

    question: 'Wer hat HTML efunden?',

    answer_1: 'Robbie Williams',

    answer_2: 'Lady Gaga',

    answer_3: 'Tim Berners-Lee',

    answer_4: 'Justin Bieber',

    right_answer: 3,

  },

 

  {

    question: 'Was ist keine gültige Schreibweise für die Farbe Weiß?',

    answer_1: 'rgba(255,255,255,1)',

    answer_2: 'white',

    answer_3: '#ff',

    answer_4: '#FFF',

    right_answer: 3,

  },

  {

    question:

      'top positioniert ein HTML-Element von oben. Mit welchem Wert für position funktioniert top nicht?',

    answer_1: 'fixed',

    answer_2: 'absolute',

    answer_3: 'relative',

    answer_4: 'static',

    right_answer: 4,

  },

  {

    question: 'Was ist nicht das gleiche wie margin: 10px?',

    answer_1: 'margin: 10px 10px 10px 10px ',

    answer_2: 'margin: 10px 10px',

    answer_3: 'margin: 10px 10px 10px',

    answer_4: 'margin: 10 ',

    right_answer: 4,

  },

  {

    question: 'Welchen Strukturselektor gibt es breits seit CSS 1?',

    answer_1: ':first-letter ',

    answer_2: ':root',

    answer_3: ':last-child',

    answer_4: ':first-child',

    right_answer: 1,

  },

 

  {

    question:

      'Die Eigenschaft display hat seit CSS 3 neue Werte. Welcher ist hinzugekommen?',

    answer_1: 'table-cell',

    answer_2: 'grid-row',

    answer_3: 'inline-flex',

    answer_4: 'columns',

    right_answer: 3,

  },

  {

    question: 'Wie heißt der Erfinder von JavaScript?',

    answer_1: 'Douglas Crockford',

    answer_2: 'Brendan Eich',

    answer_3: 'John Resig',

    answer_4: 'Chuck Norris',

    right_answer: 2,

  },

  {

    question: 'Wer passt hier nicht in die Reihe?',

    answer_1: 'ActionScript',

    answer_2: 'JavaScript',

    answer_3: 'CoffeeScript',

    answer_4: 'AppleScript',

    right_answer: 4,

  },

  {

    question: 'Was ist false?',

    answer_1: '1/0 === Infinity',

    answer_2: '1.8e+987 === Infinity',

    answer_3: 'Number.MIN_VALUE * -2 === -Infinity',

    answer_4: 'Number.MAX_VALUE * 2 === Infinity',

    right_answer: 3,
    
  },
  
  {
    
    question: 'Was ist true?',
    
    answer_1: '0 == null',
    
    answer_2: '0 >= undefined',
    
    answer_3: '0 >= null',
    
    answer_4: '0 > null',
    
    right_answer: 3,
    
  },
  
];

let rigthQuestions = 0;
let currentQuestion = 0;
let Audio_Success = new Audio('audio/nice.mp3');
let Audio_Fail = new Audio('audio/cow.mp3');

function init(){
  document.querySelector( '.question-amount').innerHTML = questions.length;
  showQuestions()
}

function showQuestions() {
  if (gameIsOver()) { 
    showEndScreen();// Show End Screen
  } else { 
    updateToNextQuestion();
    updateProgressBar();
  }
}
  function gameIsOver(){
    return currentQuestion >= questions.length;
  }
  
  function showEndScreen(){
    document.getElementById('endScreen').style='';
    document.getElementById('questionBody').style='display:none';
    document.getElementById('amount').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rigthQuestions;
    document.getElementById('header-image').src = 'img/peace.jpg'; //replace the image from one to another;
  };
  
  function updateProgressBar(){
    let percent = (currentQuestion + 1) / questions.length; 
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
  }
  
   function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('start-number').innerHTML = currentQuestion+1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
  
  function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    
    if(rightAnswerSelected(selectedQuestionNumber, question)){
      document.getElementById(selection).parentNode.classList.add('bg-success')
      Audio_Success.play();
      rigthQuestions ++;
    } else {
      document.getElementById(selection).parentNode.classList.add('bg-danger')
      document.getElementById(idOfRightAnswer)
      .parentNode.classList.add('bg-success');
      Audio_Fail.play();
    }
    
    document.getElementById('next-button').disabled = false;
  } 
  
  function rightAnswerSelected(selectedQuestionNumber,question){
    return selectedQuestionNumber == question['right_answer']
  }
  
  function nextQuestion(){
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestions();
    
  }
  
  function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');  
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');  
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');  
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
  }
  
  function restartGame() {
  document.getElementById('header-image').src = 'img/nature.jpg';
  rigthQuestions = 0;
  currentQuestion = 0;
  init();
  document.getElementById('endScreen').style='display:none';
  document.getElementById('questionBody').style='';
}
