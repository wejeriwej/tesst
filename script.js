try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}




var noteTextarea = $('#note-textarea');
var instructions = $('#recording-instructions');
var notesList = $('ul#notes');
var whatforgottosay = $('#whatforgottosay');
 
var noteContent = '';

let messagebeforeacceptingmic = document.getElementById('messagebeforeacceptingmic');
let initialpromptforpresssubmit = document.getElementById('initialpromptforpresssubmit');
let emptyif = document.getElementById('emptyif');




// Get all notes from previous sessions and display them.


//var notes = getAllNotes();
//renderNotes(notes);



//For the replay video Button!!
document.getElementById('replayButton').addEventListener('click', function() {
  replayVideo();
  document.getElementById('replayButton').style.display = 'none'; recognition.stop();  document.getElementById('listeninggif').style.display = 'none';    document.getElementById('stop-consultation-btn').style.display = 'none';  document.getElementById('home').style.display = 'none'; document.getElementById('executeButton').style.display = 'none';
    
});

function replayVideo() {
  var videoElement = document.getElementById('myVideo');
  videoElement.pause(); // Pause the video
  videoElement.currentTime = 0; // Set the current time of the video to the beginning
  videoElement.play(); // Start playing the video
  document.getElementById('myVideo').onended = function(e) {
    recognition.start();  document.getElementById('listeninggif').style.display = 'unset';    document.getElementById('stop-consultation-btn').style.display = 'unset';    document.getElementById('home').style.display = 'unset';
    document.getElementById('replayButton').style.display = 'unset';  document.getElementById('executeButton').style.display = 'unset';
  }}









function startFunction() { 
  timeLeft = slider.value * 60;//this and the next one is to start the timer
  timer = setInterval(updateTimeLeft, 1000);


  document.getElementById('myVideo').style.display = 'unset';
  document.getElementById("mp4_src").src = "videos/openinghiya.mp4"; document.getElementById("myVideo").load();
  

  document.getElementById('myVideo').onended = function(e) {
    //readOutLoud("Go");
    messagebeforeacceptingmic.style.display = 'unset';

  //readOutLoud("Enable the microphone and then start speaking, and once you've asked your question double press the ENTER key");
  recognition.start();  document.getElementById('listeninggif').style.display = 'unset'; 
  document.getElementById('stop-consultation-btn').style.display = 'unset'; document.getElementById('executeButton').style.display = 'unset';
  document.getElementById('replayButton').style.display = 'unset';  document.getElementById('home').style.display = 'unset';


  

  }
  
  
  

  //document.getElementById('recording-instructions').style.visibility = 'visible';
  //document.getElementById('start-record-btn').style.visibility = 'visible';
  //document.getElementById('save-note-btn').style.visibility = 'visible';
  //document.getElementById('note-textarea').style.visibility = 'visible';
  document.getElementById('introstatement').style.display = 'none';
  document.getElementById('fullscreenvideobackground').style.display = 'none';
  document.body.style.backgroundColor = 'black';
  document.getElementById('logoduringconsultation').style.display = 'unset';
  document.getElementById('fakeVideo').style.display = 'none';
  document.getElementById('page-description').style.display = 'none';document.getElementById('casename').style.display = 'none';

  //document.getElementById('casename').style.visibility = 'hidden';document.getElementById('page-description').style.visibility = 'hidden';


  
  //document.getElementById('end-consultation-btn').style.visibility = 'visible';
  //document.getElementById('move-onto-questions-btn').style.visibility = 'visible';
  

  document.getElementById('countdown-value').style.display = 'unset';//these bottom 5 are for the countdown
  document.getElementById('countdown-updated').style.display = 'none';
  document.getElementById('slider-value').style.display = 'none';
  document.getElementById('slider').style.display = 'none';
  document.getElementById('pause-countdown').style.display = 'unset';
  

  

} 

function initialstopConsultation(){
  document.getElementById('move-onto-questions-btn').style.display = 'unset';//this button goes to the first question
  document.getElementById('end-consultation-btn').style.display = 'unset';

  recognition.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('replayButton').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';  document.getElementById('home').style.display = 'none'; document.getElementById('executeButton').style.display = 'none';
  document.getElementById('pause-countdown').style.display = 'none';
  document.getElementById('countdown-value').style.display = 'none';


 

}



//this one is to go straight to the 'review section'
function endConsultation(){
  document.getElementById('review-section').style.display = 'unset';
  document.getElementById('taking-history-section').style.display = 'none';
  document.getElementById('taking-history-section-part2').style.display = 'none';
  document.getElementById('move-onto-questions-btn').style.display = 'none';

  document.getElementById('myVideo').pause();
  recognition.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('replayButton').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none'; document.getElementById('executeButton').style.display = 'none';
  recognition1.stop(); recognition1.stop(); recognition_differentials.stop(); recognition_investigations.stop(); recognition_riskfactors.stop(); recognition_treatments.stop();

  document.getElementById('examinations').style.display = 'none';
  document.getElementById('summary').style.display = 'none';
  document.getElementById('differentials').style.display = 'none';
  document.getElementById('investigations').style.display = 'none';
  document.getElementById('riskfactors').style.display = 'none';
  document.getElementById('treatments').style.display = 'none';


  document.getElementById('fullscreenvideobackground').style.display = 'unset';
  document.body.style.backgroundColor = 'rgb(233, 246, 253)';
  document.getElementById('logoduringconsultation').style.display = 'none';
  document.getElementById('myVideo').style.display = 'none';



/*------
THIS NEXT PART IS JUST TO MAKE THE ENDCONSULTATION BUTTON STILL SUBMIT THE ANSWER
--------*/

  //examinations - save the response if press the end consultation button
    recognition_examinations.stop();    document.getElementById('listeninggif').style.display = 'none';
        setTimeout(function() {
        var recordinginstructionsforexaminations = $('#recording-instructions-for-examinations');
        recognition_examinations.onspeechend = function() {
        recordinginstructionsforexaminations.text(noteexaminations);//IMPORTANT DO NOT DELETE!!!!
    }
    saveNote(new Date().toLocaleString(), noteexaminations);
    var examinationsfinal = $('#examinationsfinal');
    examinationsfinal.text(noteexaminations);
  }, 2000);
  
  
  //Summary - save the response if press the end consultation button
    recognition1.stop();    document.getElementById('listeninggif').style.display = 'none';
        setTimeout(function() {
        var recordinginstructionsforsummary = $('#recording-instructions-for-summary');
        recognition1.onspeechend = function() {
        recordinginstructionsforsummary.text(noteSummary);//IMPORTANT DO NOT DELETE!!!!
   }
    saveNote(new Date().toLocaleString(), noteSummary);
    var summaryfinal = $('#summaryfinal');
    summaryfinal.text(noteSummary.toLowerCase());
    summaryreview = noteSummary.toLowerCase();


    var summaryage =  $('#summaryage'); var summaryage1 = $('#summaryage1');
        if (summaryreview.includes("3")||summaryreview.includes("thirty")){
        summaryage.css('background-color', 'rgb(249, 221, 221)').css('color', 'rgb(249, 221, 221)'); 
        summaryage1.css('color', 'rgb(0, 0, 0)'); }  

    var summarygender =  $('#summarygender'); var summarygender1 = $('#summarygender1');
        if (summaryreview.includes("male")||summaryreview.includes("man")||summaryreview.includes("bloke")){
        summarygender.text(""); summarygender1.text("● sGender");
        summarygender1.css('color', 'rgb(0, 0, 0)');
  }
  }, 2000);
   
  
  //Differentials - save the response if press the end consultation button
    recognition_differentials.stop();   document.getElementById('listeninggif').style.display = 'none';
          setTimeout(function() {
          var recordinginstructionsfordifferentials = $('#recording-instructions-for-differentials');
          recognition_differentials.onspeechend = function() {
          recordinginstructionsfordifferentials.text(noteDifferentials);//IMPORTANT DO NOT DELETE!!!!
    }
      saveNote(new Date().toLocaleString(), noteDifferentials);
      var differentialsfinal = $('#differentialsfinal');
      differentialsfinal.text(noteDifferentials);
  }, 2000);


  //Investigations - save the response if press the end consultation button
    recognition_investigations.stop();    document.getElementById('listeninggif').style.display = 'none';
        setTimeout(function() {
        var recordinginstructionsforinvestigations = $('#recording-instructions-for-investigations');
        recognition_investigations.onspeechend = function() {
        recordinginstructionsforinvestigations.text(noteinvestigations);//IMPORTANT DO NOT DELETE!!!!
    }
      saveNote(new Date().toLocaleString(), noteinvestigations);
      var investigationsfinal = $('#investigationsfinal');
      investigationsfinal.text(noteinvestigations);
  }, 2000);
  

  //riskfactors - save the response if press the end consultation button
    recognition_riskfactors.stop();    document.getElementById('listeninggif').style.display = 'none';
        setTimeout(function() {
        var recordinginstructionsforriskfactors = $('#recording-instructions-for-riskfactors');
        recognition_riskfactors.onspeechend = function() {
        recordinginstructionsforriskfactors.text(noteriskfactors);//IMPORTANT DO NOT DELETE!!!!
    }
      saveNote(new Date().toLocaleString(), noteriskfactors);          
      var riskfactorsfinal = $('#riskfactorsfinal');
      riskfactorsfinal.text(noteriskfactors);
  }, 2000);


  //Treatments - save the response if press the end consultation button
    recognition_treatments.stop();    document.getElementById('listeninggif').style.display = 'none';
        setTimeout(function() {
        var recordinginstructionsfortreatments = $('#recording-instructions-for-treatments');
        recognition_treatments.onspeechend = function() {
        recordinginstructionsfortreatments.text(notetreatments);//IMPORTANT DO NOT DELETE!!!!
    }
      saveNote(new Date().toLocaleString(), notetreatments);
      var treatmentsfinal = $('#treatmentsfinal');
      treatmentsfinal.text(notetreatments);
  }, 2000);
  






}//end of the 'endConsultation' section.


//this one moves it to the first question (i.e.examination)
function movetoQuestions(){
  document.getElementById('taking-history-section').style.display = 'none';
  document.getElementById('taking-history-section-part2').style.display = 'none';
  document.getElementById('examinations').style.display = 'unset';
  document.getElementById('end-consultation-btn').style.display = 'none';


  
  document.getElementById('myVideo').style.display = 'unset'; document.getElementById("mp4_src").src = "videos/examinations.mp4"; document.getElementById("myVideo").load();
  
  document.getElementById('myVideo').onended = function(e) {
  recognition_examinations.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-examinations').style.display = 'unset';

  }
}









function movetoQuestions_examinations(){
  document.getElementById('examinations').style.display = 'none';
  document.getElementById('summary').style.display = 'unset';

  recognition_examinations.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "videos/summary.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition1.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-summary').style.display = 'unset';
  }
}


function movetoQuestions_summary(){
  document.getElementById('summary').style.display = 'none';
  document.getElementById('differentials').style.display = 'unset';

  recognition1.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "videos/differential.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_differentials.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-differentials').style.display = 'unset';
  }
}

function movetoQuestions_differentials(){
  document.getElementById('differentials').style.display = 'none';
  document.getElementById('investigations').style.display = 'unset';

  recognition_differentials.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "videos/investigations.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_investigations.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-investigations').style.display = 'unset';
  }
}

function movetoQuestions_investigations(){
  document.getElementById('investigations').style.display = 'none';
  document.getElementById('riskfactors').style.display = 'unset';

  recognition_investigations.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "videos/riskfactors.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_riskfactors.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-riskfactors').style.display = 'unset';
  }
}

function movetoQuestions_riskfactors(){
  document.getElementById('riskfactors').style.display = 'none';
  document.getElementById('treatments').style.display = 'unset';

  recognition_riskfactors.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "videos/management.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_treatments.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-treatments').style.display = 'unset';
  }
}

function movetoQuestions_treatments(){
  document.getElementById('treatments').style.display = 'none';
  //document.getElementById('').style.display = 'unset';

  recognition_treatments.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  //document.getElementById("mp4_src").src = "WIN_20230328_13_59_37_Pro.mp4"; document.getElementById("myVideo").load();
  //document.getElementById('myVideo').onended = function(e) {
  //recognition_.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  //document.getElementById('save-note-btn-for-').style.display = 'unset';
  }
//}






const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");
const countdownupdated = document.getElementById("countdown-updated");

const countdownValue = document.getElementById("countdown-value");
//const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause-countdown");

let timeLeft, timer;

function updateTimeLeft() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  countdownValue.innerHTML = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  timeLeft--;
  if (timeLeft === 59) {
    countdownValue.style.color = "orange";
  }
  if (timeLeft === 9) {
    countdownValue.style.color = "red";
  }
  if (timeLeft === -1) {
    clearInterval(timer);
    countdownValue.innerHTML = "0:00";
    setTimeout(() => {
      countdownValue.innerHTML = "Time's up!";
      //readOutLoud("Your time is up!")
    }, 2000);
  }
}
slider.addEventListener("input", function() {
  sliderValue.innerHTML = `${this.value} min`;
  countdownupdated.innerHTML = `${this.value}:00`;
});

//startBtn.addEventListener("click", function() {
//  timeLeft = slider.value * 60;
//  timer = setInterval(updateTimeLeft, 1000);
//});





pauseBtn.addEventListener("click", function() {
  if (pauseBtn.innerHTML === "") {
    clearInterval(timer);
    pauseBtn.innerHTML = "1"; pauseBtn.style.fontWeight = "bold"; pauseBtn.style.height = '85px'; pauseBtn.style.padding = '300px 280px'; pauseBtn.style.color = 'transparent';
    pauseBtn.style.top = '50%'; pauseBtn.style.left = '50%'; pauseBtn.style.transform = 'translate(-50%, -50%)';
    pauseBtn.style.backgroundImage = "url('play-button-black-and-white.png')";

    myVideo.pause(); recognition.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('replayButton').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';   document.getElementById('home').style.display = 'none'; document.getElementById('executeButton').style.display = 'none'; initialpromptforpresssubmit.style.display = 'none';
    pauseBtn.style.display = "unset"; //actionTriggered = true;

  } else {
    timer = setInterval(updateTimeLeft, 1000);
    pauseBtn.innerHTML = ""; pauseBtn.style.fontWeight = "normal"; pauseBtn.style.fontSize = "15px"; pauseBtn.style.height = '35px'; pauseBtn.style.padding = '10px 20px';
    recognition.start(); document.getElementById('listeninggif').style.display = 'unset'; document.getElementById('stop-consultation-btn').style.display = 'unset'; document.getElementById('executeButton').style.display = 'unset';
    pauseBtn.style.backgroundImage = "url('pause_button_black_and_white-removebg-preview.png')";  document.getElementById('silencemessage').style.display = 'none';

    pauseBtn.style.top = ''; pauseBtn.style.left = ''; pauseBtn.style.transform = ''; // Reset the position property to its default value
    pauseBtn.style.display = "unset"; //actionTriggered = true;
  }
});







function homeButton() {
  document.getElementById('taking-history-section').style.display = 'unset';
  document.getElementById('taking-history-section-part2').style.display = 'unset';
  recognition.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('replayButton').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none'; document.getElementById('executeButton').style.display = 'none';
  
  document.getElementById('fullscreenvideobackground').style.display = 'unset';
  document.body.style.backgroundColor = 'rgb(233, 246, 253)';//BACKGROUND OF REVIEW SECTION!!!!!!
  document.getElementById('logoduringconsultation').style.display = 'none';
  document.getElementById('myVideo').style.display = 'none';

  document.getElementById('home').style.display = 'none';
  document.getElementById('pause-countdown').style.display = 'none';
  document.getElementById('countdown-value').style.display = 'none';
  document.getElementById('countdown-updated').style.display = 'unset';
  document.getElementById('slider-value').style.display = 'unset';
  document.getElementById('slider').style.display = 'unset';

  document.getElementById('fakeVideo').style.display = 'unset';
  document.getElementById('introstatement').style.display = 'unset';
  document.getElementById('page-description').style.display = 'unset';document.getElementById('casename').style.display = 'unset';
  document.getElementById('start-consultation-btn').style.display = 'unset';

  
}








/*
pauseBtn.addEventListener("click", function() {
  if (pauseBtn.innerHTML === "Pause consultation") {
    clearInterval(timer);
    pauseBtn.innerHTML = "Unpause consultation"; pauseBtn.style.fontWeight = "bold"; pauseBtn.style.fontSize = "45px"; pauseBtn.style.height = '85px'; pauseBtn.style.padding = '1px 50px';
    myVideo.pause(); readOutLoud.pause();
    recognition.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';

  } else {
    timer = setInterval(updateTimeLeft, 1000);
    pauseBtn.innerHTML = "Pause consultation"; pauseBtn.style.fontWeight = "normal"; pauseBtn.style.fontSize = "15px"; pauseBtn.style.height = '35px'; pauseBtn.style.padding = '1px 5px';
    recognition.start(); document.getElementById('listeninggif').style.display = 'unset';     document.getElementById('stop-consultation-btn').style.display = 'unset';

  }
});
*/






   /*-----------------------------
        The While loops
  ------------------------------
  var jobx = 0;
  var radiatex = 0;
  var ratepainx = 0;
  var makeitbetterx = 0;
  var makeitworsex = 0;
  var walkdistancex = 0;
  var ideasx = 0;
  var concernsx = 0;
  var expectationsx = 0;
  var smokingx = 0;
  var alcoholx = 0;
  var familyhistoryx = 0;
  
  var counter = 0;
//  while (counter < 1) {

*/



/*General information gathering*/
painlocationx = false;
onsetx = false;
characterx = false;
radiatex = false;
associatedsymptomsx = false;
timecoursex = false;
makeitbetterx = false;
makeitworsex = false;
ratepainx = false;
happenbeforex = false;

ideasx = false;
concernsx = false;
expectationsx = false;
familyhistoryx = false;

pmhx = false;
surgicalx = false;
medsx = false;
allergiesx = false;

jobx = false;
walkdistancex = false;
homesituationx = false;
smokingx = false;
alcoholx = false;

/*Important not to miss*/
dyspnoeax = false;
orthopnoeax = false;
pndx = false;
coughx = false;
FHheartconditionsx = false;
diabetesx = false;
hypertensionx = false;
heartattacksx = false;
dizzinessx = false;
physicalactivityx = false;
palpitationsx = false;



/*Stand out questions*/
sleepapnoeax = false;
padx = false;
feverx = false;
weightx = false;
oedemax = false;






var painlocationrepeat = false;
var onsetrepeat = false;
let counterforpresssubmitprompt = 0;

var previousquestion = "";
var response_question = "";





//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
 $(function() {
  $('#note-textarea').focus();

  $(document).on('keydown', function() {
    $('#note-textarea').focus();
  });
});
 
/*-----------------------------
      Voice Recognition
------------------------------*/
 
// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses.

recognition.continuous = true;


var silenceTimeout = null;

// Function to reset the silence timeout

  
  






// This block is called every time the Speech APi captures a line.
recognition.onresult = function(event) {

  
  

  if(silenceTimeout){
  clearTimeout(silenceTimeout);
  silenceTimeout = null;
  }

  
  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far.
  // We only need the current one.
  var current = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;
 
  
 
  // Add the current transcript to the contents of our Note.
  // There is a weird bug on mobile, where everything is repeated twice.
  // There is no official solution so far so we have to handle an edge case.
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
 
  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteContent = noteContent.toLowerCase();
    noteTextarea.val(noteContent);
  }

/*
  silenceTimeout = setTimeout(function() {
    // Trigger pause action after 4 seconds of continuous silence
    pauseBtn.click();
  }, 5000);//change this to 12-15 seconds in the future
*/
};//end of recognition.onresult











//the button for submitting the question and if press enter then submits the question
let actionTriggered = false;


  document.getElementById("executeButton").addEventListener("click", function() {
        onesecdelaybeforestoprecog();
        actionTriggered = true; clearTimeout(silenceTimeout);
        document.getElementById('listeninggif').style.display = 'none';    document.getElementById('stop-consultation-btn').style.display = 'none';   document.getElementById('replayButton').style.display = 'none';   document.getElementById('home').style.display = 'none'; document.getElementById('executeButton').style.display = 'none'; document.getElementById('loadingcircle').style.display = 'unset';  micisworking.style.display = 'none'; initialpromptforpresssubmit.style.display = 'none';
        });


  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !actionTriggered) {
       onesecdelaybeforestoprecog();
       actionTriggered = true; clearTimeout(silenceTimeout);
       document.getElementById('listeninggif').style.display = 'none';    document.getElementById('stop-consultation-btn').style.display = 'none';   document.getElementById('replayButton').style.display = 'none';   document.getElementById('home').style.display = 'none'; document.getElementById('executeButton').style.display = 'none'; document.getElementById('loadingcircle').style.display = 'unset';  micisworking.style.display = 'none'; initialpromptforpresssubmit.style.display = 'none';
       document.getElementById("executeButton").removeEventListener("click", arguments.callee);    document.removeEventListener("keydown", handleKeyDown);
       
      }   });



///////check if i acc need this part
var onesecdelay = null;
  function onesecdelaybeforestoprecog() {
    onesecdelay = setTimeout(function () {
      recognition.stop(); executeActionAfterDelay(); clearTimeout(silenceTimeout);
    }, 1000);
  }
//////


var timerforsubmitting = null;


  function executeActionAfterDelay() {
    timerforsubmitting = setTimeout(function () {
      submitquestion(); clearTimeout(silenceTimeout); document.getElementById('loadingcircle').style.display = 'none';
    }, 1500);
  }



                                    /*-----------------------------///////////////////////// Set a new timer after 2 seconds of silence //""""""""
                                    var silenceTimer = null; //""""""""

                                    // Clear the timer if it's running //""""""""
                                    if (silenceTimer) {
                                      clearTimeout(silenceTimer);
                                      silenceTimer = null;
                                    }

                                    silenceTimer = setTimeout(function() {
                                      pauseBtn.click();
                                      }, 8000);

                                    ///////////////////////////////////////////////////////////////////////////////////////////////////////--*/
                                   /* document.getElementById('loadingcircle').style.display = 'none';
                                    navigator.permissions.query({ name: 'microphone' })
                                    .then(function(permissionStatus) {
                                      if (permissionStatus.state === 'granted') {
                                        document.getElementById('loadingcircle').style.display = 'unset';

                                      } else {
                                        startButton.addEventListener('click', function() {
                                          // Request microphone permission when the button is clicked
                                          navigator.mediaDevices.getUserMedia({ audio: true })//this gets the message asking for permission on the user interface to come back
                                            .then(function(stream) {
                                              //resultDisplay.style.display = 'block';
                                              document.getElementById('loadingcircle').style.display = 'unset';                                            })

                                          });
                                        }
                                      })*/




                                      //let executeButton = document.getElementById('executeButton');

                                      





                          /*        
                                      recognition.onend = function() {
                                        //console.log('Microphone is inactive');
                                        loadingcircle.style.display = 'none';
                                      };*/
                                  
                                      /*executeButton.addEventListener('click', function() {
                                        recognition.start();
                                      });*/
                                  
                                      // Check for microphone permission on page load
                                  /*    navigator.permissions.query({ name: 'microphone' })
                                    .then(function(permissionStatus) {
                                      if (permissionStatus.state === 'granted') {
                                        loadingcircle.style.display = 'unset';
                                      }
                                    });*/










                                                                                





  function submitquestion(){

  

  recognition.stop();
  document.getElementById('listeninggif').style.display = 'none';   document.getElementById('replayButton').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';  document.getElementById('home').style.display = 'none'; document.getElementById('executeButton').style.display = 'none';



    

    


    if(noteContent.includes("name") && noteContent.includes("age")) {
      //readOutLoud("My name is Marc Jevner and I am 31")
      previousquestion = noteContent;   response_question = "I'm Marc and am 31";
      document.getElementById("mp4_src").src = "videos/name+age.mp4"; allifsaction();}
    
    else if(noteContent.includes("age")||noteContent.includes("old")){
      //readOutLoud("I'm 31 years old")
      previousquestion = noteContent;   response_question = "I'm 31";
      document.getElementById("mp4_src").src = "videos/age.mp4"; allifsaction();}

    else if (noteContent.includes("is it ok")||noteContent.includes("would it be ok")||noteContent.includes("talk to you")
      ||noteContent.includes("chat")||noteContent.includes("speak to you")||noteContent.includes("ask you")||noteContent.includes("may i")) {
      //readOutLoud("yes that's fine");
      previousquestion = noteContent;   response_question = "yes that's fine";
      document.getElementById("mp4_src").src = "videos/yesthatsfine.mp4"; allifsaction();}//consent for consultation (can i ask you a few questions)

    else if (noteContent.includes("your name")||noteContent.includes("full name")) {
      /////////////////////////////////////////////////////////////////////////////////////////////
      //mp4video ='WIN_20230328_13_59_49_Pro.mp4';
      previousquestion = noteContent;   response_question = "I'm Marc";
      document.getElementById("mp4_src").src = "videos/marcjevner.mp4"; allifsaction();}//name

    else if (noteContent.includes("call")||noteContent.includes("address")) {
      //readOutLoud("Marc is fine");
      previousquestion = noteContent;   response_question = "Marc is fine";
      document.getElementById("mp4_src").src = "videos/marcisfine.mp4"; allifsaction();}//how would you like to be addressed as

    else if (noteContent.includes("age")||noteContent.includes("old")) {
      //readOutLoud("I'm 31");
      previousquestion = noteContent;   response_question = "I'm 31";
      document.getElementById("mp4_src").src = "videos/age.mp4"; allifsaction();}//age
    
    else if (noteContent.includes("date of birth")||noteContent.includes("when")&&noteContent.includes("born")) {
      //readOutLoud("the 4th of June 1991");
      previousquestion = noteContent;   response_question = "4th of June 1991";
      document.getElementById("mp4_src").src = "videos/dob.mp4"; allifsaction();}//DOB

    else if (noteContent.includes("where")&&noteContent.includes("born")) {
      //readOutLoud("In London");
      previousquestion = noteContent;   response_question = "London";
      document.getElementById("mp4_src").src = "videos/inlondon.mp4"; allifsaction();}//Where you live
    
    else if (noteContent.includes("occupation")||noteContent.includes("job")||noteContent.includes("work")) {
      //readOutLoud("I work as a banker");
      previousquestion = noteContent;   response_question = "I'm a banker";
      jobx = true;
      document.getElementById("mp4_src").src = "videos/job.mp4"; allifsaction();}//job
    
    else if (noteContent.includes("stress")) {
      //readOutLoud("to be honest I'm quite stressed in general, I find that my work is quite stressful, but I really enjoy it");
      previousquestion = noteContent;   response_question = "I've been stressed as my work as a banker is stressful";
      document.getElementById("mp4_src").src = "videos/stress.mp4"; allifsaction();}//Are you stressed at work
    
    else if (noteContent.includes("do you enjoy")) {
      //readOutLoud("Yes, I do");
      previousquestion = noteContent;   response_question = "Yes I do";
      document.getElementById("mp4_src").src = "videos/yesido.mp4"; allifsaction();}//do you enjoy your work?
    
    else if (noteContent.includes("how are you")||noteContent.includes("how are things")||noteContent.includes("what about you")) {
      //readOutLoud("I'm not feeling the best but I am ok");
      previousquestion = noteContent;   response_question = "I'm not feeling the best but I am ok";
      document.getElementById("mp4_src").src = "videos/imnotfeelingthebest.mp4"; allifsaction();}//how are you?



    

    else if (noteContent.includes("always there")&&noteContent.includes("come")) {
      //readOutLoud("The pain is constantly always there");
      previousquestion = noteContent;   response_question = "The pain's constantly always there";
      timecoursex = true;
      document.getElementById("mp4_src").src = "videos/painconstantlyalwaysthere.mp4"; allifsaction();}//is the pain always there OR constant (there's another one later too)

    else if (noteContent.includes("constant")&&noteContent.includes("come")) {
      //readOutLoud("The pain is constantly always there");
      previousquestion = noteContent;   response_question = "The pain's constantly always there";
      timecoursex = true;
      document.getElementById("mp4_src").src = "videos/painconstantlyalwaysthere.mp4"; allifsaction();}//is the pain always there OR constant (there's another one later too)

    else if (noteContent.includes("always there")&&noteContent.includes("intermittent")) {
      //readOutLoud("The pain is constantly always there");
      previousquestion = noteContent;   response_question = "The pain's constantly always there";
      timecoursex = true;
      document.getElementById("mp4_src").src = "videos/painconstantlyalwaysthere.mp4"; allifsaction();}//is the pain always there OR constant (there's another one later too)

    else if (noteContent.includes("constant")&&noteContent.includes("intermittent")) {
      //readOutLoud("The pain is constantly always there");
      previousquestion = noteContent;   response_question = "The pain's constantly always there";
      timecoursex = true;
      document.getElementById("mp4_src").src = "videos/painconstantlyalwaysthere.mp4"; allifsaction();}//is the pain always there OR constant (there's another one later too)



    else if (noteContent.includes("constant")||noteContent.includes("always there")) {
      //readOutLoud("Yes the pain is kind of always there");
      previousquestion = noteContent;   response_question = "The pain's constantly always there";
      timecoursex = true;
      document.getElementById("mp4_src").src = "videos/painconstantlyalwaysthere.mp4"; allifsaction();}//is the pain constant

    else if (noteContent.includes("intermittent")||noteContent.includes("come and go")||noteContent.includes("comes and go")) {
      //readOutLoud("No the pain is constantly always there");
      previousquestion = noteContent;   response_question = "The pain's constantly always there";
      timecoursex = true;
      document.getElementById("mp4_src").src = "videos/painconstantlyalwaysthere.mp4"; allifsaction();}//is the pain intermittent



    //Opening question    
    else if (painlocationrepeat === false&&!noteContent.includes("family")&&!noteContent.includes("other")&&!noteContent.includes("medical")
    &&(noteContent.includes("brought")||noteContent.includes("bring")||noteContent.includes("what can")||noteContent.includes("why")
        ||noteContent.includes("come")||noteContent.includes("how do you feel")
        ||noteContent.includes("I help")||(noteContent.includes("you have any pain")&&!noteContent.includes("else"))
        ||noteContent.includes("i can do for you")||noteContent.includes("can i do for you")
        ||noteContent.includes("problem"))) {
      //readOutLoud("This morning I was speaking to my friend and suddenly I had this really strange feeling in my chest. it was really painful and it felt as if I got kicked really hard in my chest region. I've tried taking paracetamol but it hasn't done anything");
      previousquestion = noteContent;   response_question = "I've got this strange painful feeling in my chest as if I got kicked by a horse. Paracetamol doesn't work";
      painlocationrepeat = true;  
      painlocationx = true;
      onsetx = true;
      document.getElementById("mp4_src").src = "videos/vid-whatsbroughtyouin.mp4"; allifsaction();}//HOPC/whats made you come to the hospital/ why did you come to the hospital
    




    else if (noteContent.includes("arm")&&noteContent.includes("right")) {
      //readOutLoud("I didn't have any pain in my right arm.");
      previousquestion = noteContent;   response_question = "I don't have any pain in my right arm";
      document.getElementById("mp4_src").src = "videos/rightarm.mp4"; allifsaction();}//tell me a bit more
    
    else if (noteContent.includes("arm")) {
      //readOutLoud("The pain in my left arm just came on with the chest pain, and it was the same sort of pain as the pain in my chest.");
      previousquestion = noteContent;   response_question = "The pain in my left arm came on with the chest pain and is the same kind of pain";
      document.getElementById("mp4_src").src = "videos/leftarm.mp4"; allifsaction();}//tell me a bit more








    else if (noteContent.includes("neck")) {
      //readOutLoud("The pain in my neck was not as bad as the pain in my chest and my left arm, but I did notice it but it wasn't very severe.");
      previousquestion = noteContent;   response_question = "The pain in my neck isn't as bad as my chest and left arm";
      document.getElementById("mp4_src").src = "videos/neck.mp4"; allifsaction();}//tell me a bit more

    else if (noteContent.includes("shoulder")&&noteContent.includes("pain")) {
      //readOutLoud("I have noticed pain in my left shoulder as well, and that's started around the same time as the chest pain and it feels like it's the same kind of pain");
      previousquestion = noteContent;   response_question = "I have pain in my left shoulder which started around the same time as the chest pain";
      document.getElementById("mp4_src").src = "videos/shoulder.mp4"; allifsaction();}//shoulder pain








    else if ((onsetrepeat === false&&(noteContent.includes("bit more")||noteContent.includes("tell me more")||noteContent.includes("tell me about"))&&(noteContent.includes("pain")||noteContent.includes("it")))) {
      //readOutLoud("The pain just came on so randomly and it was quite intense, an to be honest I was quite scared about it.");
      previousquestion = noteContent;   response_question = "The pain came on randomly and was intense, and I was quite scared about it";
      onsetx = true;
      onsetrepeat === true;
    document.getElementById("mp4_src").src = "videos/bitmore.mp4"; allifsaction();}//tell me a bit more

    else if (noteContent.includes("how")&&(noteContent.includes("pain")||noteContent.includes("it"))&&(noteContent.includes("develop")||noteContent.includes("start")||noteContent.includes("begin")||noteContent.includes("come")||noteContent.includes("brought"))
    ||noteContent.includes("what happen")) {
      //readOutLoud("To be honest the pain came quite quickly and randomly, I wasn't doing anything in particular I think, I was just walking to the shops");
      previousquestion = noteContent;   response_question = "The pain came on quickly and randomly when I was walking to the shops";
      document.getElementById("mp4_src").src = "videos/howhappen.mp4"; allifsaction();}//how did you get the pain/how did it start
    
    //pain
    
    else if (noteContent.includes("where")&&(noteContent.includes("pain")||noteContent.includes("discomfort")||noteContent.includes("hurt"))&&!noteContent.includes("else")&&!noteContent.includes("somewhere")
    ) {
      //readOutLoud("The pain is in the middle of my chest"); - DON'T REMOVE THE SPACE BEFORE 'WHERE' AS CAN BE 'ANYWHERE (ELSE)'FOR RADIATION OF PAIN
      previousquestion = noteContent;   response_question = "The pain's in the middle of my chest";
      painlocationx = true;

      document.getElementById("mp4_src").src = "videos/wherepain.mp4"; allifsaction();}//where is the pain
    





        
    else if (noteContent.includes("burn")) {
      //readOutLoud("No not really, it doesn't feel like a burning pain but rather it feels like someone's punched me in the chest instead");
      previousquestion = noteContent;   response_question = "The pain feels like someone punched me in the chest rather than a burning pain";
      characterx = true;
      document.getElementById("mp4_src").src = "videos/notaburningpain.mp4"; allifsaction();}//is it burning pain

    else if (noteContent.includes("sharp")) {
      //readOutLoud("No I wouldn't really say so, i feel that instead of a sharp pain that it is more that my chest feels really heavy and that someone's punched me in the chest");
      previousquestion = noteContent;   response_question = "No, it's more of a heavy sort of feeling as if someone's punched me";
      characterx = true;
      document.getElementById("mp4_src").src = "videos/isnotasharppain.mp4"; allifsaction();}//is it a sharp pain
    
    else if (noteContent.includes("describe")||noteContent.includes("it feel like")
        ||noteContent.includes("pain feel like")) {
      //readOutLoud("It feels like a horse kicked me in my chest");
      previousquestion = noteContent;   response_question = "It feels like a horse kicked me in my chest";
      characterx = true;
    document.getElementById("mp4_src").src = "videos/feelslikehorsekickedme.mp4"; allifsaction();}//describe the pain
    
  
    


    
    


    else if (noteContent.includes("radiate")||noteContent.includes("other pain")
    ||(noteContent.includes("anywhere")||noteContent.includes("other"))&&(noteContent.includes("move")||noteContent.includes("go"))) {
      //readOutLoud("now you mention it, I have also noticed that my left arm is also quite painful, and also my neck");
      previousquestion = noteContent;   response_question = "I have pain in my left arm and my neck as well";
      radiatex = true;

      document.getElementById("mp4_src").src = "videos/mainlyinchestbutalsoinneckandchestandarm.mp4"; allifsaction();}//does the pain radiate/move anywhere/does the pain move to other parts of the body
    
    else if (noteContent.includes("rate")&&(noteContent.includes("pain")||noteContent.includes("it")||noteContent.includes("sever"))
    ||noteContent.includes("severe")&&(noteContent.includes("pain")||noteContent.includes("it"))
    ||noteContent.includes("1-10")||noteContent.includes("1 to 10")||noteContent.includes("one to ten")||noteContent.includes("-10")
        ||noteContent.includes("out of 10")||noteContent.includes("out of ten")) {
      //readOutLoud("Honesty I would say the pain is probably around 9/10, and I normally have quite a high pain threshold");
      previousquestion = noteContent;   response_question = "The pain is 9/10 in severity";
      ratepainx = true;
      document.getElementById("mp4_src").src = "videos/painis9outof10.mp4"; allifsaction();}//rate the pain
    
    else if (noteContent.includes("make it better")||noteContent.includes("make the pain better")
        ||noteContent.includes("makes it better")||noteContent.includes("makes the pain better")
        ||noteContent.includes("relieve")||noteContent.includes("ease")) {
      //readOutLoud("Honestly, nothing makes it better, not even paracetamol does anything");
      previousquestion = noteContent;   response_question = "Nothing makes the pain better, including paracetamol";
      makeitbetterx = true;
      document.getElementById("mp4_src").src = "videos/nothingmakesitbetter.mp4"; allifsaction();}//anything make it better/anything ease the pain
    
    else if (noteContent.includes("make it worse")||noteContent.includes("exacerbate")
        ||noteContent.includes("make the pain worse")||noteContent.includes("makes the pain worse")
        ||noteContent.includes("makes it worse")) {
      //readOutLoud("I would say that any sort of movement makes the pain even worse than it already is, so because of that I try not to move to make the pain a bit more bearable");
      previousquestion = noteContent;   response_question = "Any sort of movement makes the pain worse, and so I try not to move to make the pain bearable";
      makeitworsex = true;
    
      document.getElementById("mp4_src").src = "videos/anymovementmakesitworse.mp4"; allifsaction();}//anything make it worse
    
    else if (noteContent.includes("worse when")) {
      //readOutLoud("I don't think so");
      previousquestion = noteContent;   response_question = "I don't think so";
      makeitworsex = true;
      document.getElementById("mp4_src").src = "videos/idontthinkso.mp4"; allifsaction();}//Is it worse when walking/going up the stairs etc/do you find it gets better when
    
    else if (noteContent.includes("better when")) {
      //readOutLoud("Not really");
      previousquestion = noteContent;   response_question = "Not really";
      makeitbetterx = true;
      document.getElementById("mp4_src").src = "videos/idontthinkso.mp4"; allifsaction();}//Is it worse when walking/going up the stairs etc/do you find it gets better when
    
    else if ((noteContent.includes("how long")||noteContent.includes("start"))&&!noteContent.includes("smok")&&!noteContent.includes("alcohol")&&!noteContent.includes("drink")) {
      //readOutLoud("This pain only started this morning, I would say it was around 8AM");
      previousquestion = noteContent;   response_question = "The pain only started this morning around 8AM";
      document.getElementById("mp4_src").src = "videos/startedthismorning.mp4"; allifsaction();}//How long have you had the pain for/when did the pain start
    
    else if (noteContent.includes("got worse")||noteContent.includes("gotten worse")
        ||noteContent.includes("gotten better")||noteContent.includes("got better")||noteContent.includes("sudden")) {
      //readOutLoud("The pain has definitely gotten worse as the day has gone on");
      previousquestion = noteContent;   response_question = "The pain's definitely gotten worse as the day has gone on";
      document.getElementById("mp4_src").src = "videos/painisgottenworseovertheday.mp4"; allifsaction();}//Has the pain gradually gotten worse/better
    
    else if (noteContent.includes("tender")||noteContent.includes("painful to touch")||noteContent.includes("painful when touch")) {
      //readOutLoud("Yes it does, especially when you touch the middle of my chest");
      previousquestion = noteContent;   response_question = "Yes it does, especially when you touch the middle of my chest";
      document.getElementById("mp4_src").src = "videos/yesitdoesespeciallywhenyoutouchmiddlechest.mp4"; allifsaction();}//tenderness
    
    else if (noteContent.includes("heart attack")&& noteContent.includes("past")) {
      //readOutLoud("No I haven't had a heart attack in the past");
      previousquestion = noteContent;   response_question = "No I haven't had a heart attack in the past";
      heartattacksx = true;
      document.getElementById("mp4_src").src = "videos/noheartattacksinthepast.mp4"; allifsaction();}

    else if(noteContent.includes("heart attack")&& noteContent.includes("first")){
      //readOutLoud("Yes this is my first heart attack");
      previousquestion = noteContent;   response_question = "Yes this is my 1st heart attack";
      heartattacksx = true;
      document.getElementById("mp4_src").src = "videos/firstheartattack.mp4"; allifsaction();}

    else if((noteContent.includes("happen")||noteContent.includes("felt"))&& noteContent.includes("before")){
      //readOutLoud("No, this has never happened before");
      previousquestion = noteContent;   response_question = "No this has never happened before";
      heartattacksx = true;
      happenbeforex = true;
      document.getElementById("mp4_src").src = "videos/nothatsneverhappenedbefore.mp4"; allifsaction();}







    //rule out pain anywhere else
    else if ((noteContent.includes("have")||noteContent.includes("notice")||noteContent.includes("any"))&&(noteContent.includes("pain in")||noteContent.includes("pains in"))) {
      //readOutLoud("I've mainly got pain in the middle of my chest, ");
      //readOutLoud("but I have also noticed pain in my left shoulder and in my neck but I don't think I've noticed any other pains anywhere else");
      previousquestion = noteContent;   response_question = "I've mainly got pain in my chest but also noticed in my left houlder and my neck";
      radiatex = true;
    document.getElementById("mp4_src").src = "videos/mainlyinchestbutalsoinneckandchestandarm.mp4"; allifsaction();}//any pain in X (eg in the shoulders, in the side etc)
    
    //other symptoms    
    else if (noteContent.includes("symptoms")||noteContent.includes("come along with")
        ||noteContent.includes("experience anything else")||noteContent.includes("come with")) {
      //readOutLoud("I've also noticed that I've gotten quite short of breath as well, ");
      //readOutLoud("but I think that's just because of the pain");
      previousquestion = noteContent;   response_question = "I've also noticed that I get short of breath but I think it's because of the pain";
      associatedsymptomsx = true;
      document.getElementById("mp4_src").src = "videos/sobbutcozofthepain.mp4"; allifsaction();}//any other Sx/does anything else come along with the pain
    
    else if (noteContent.includes("fever")||noteContent.includes("felt off")||noteContent.includes("felt yourself")
        ||noteContent.includes("feel")&&noteContent.includes("off")||noteContent.includes("a cold")||noteContent.includes("under the weather")
        ||noteContent.includes("temperature")&&noteContent.includes("high")) {
      //readOutLoud("No");
      previousquestion = noteContent;   response_question = "No";
      associatedsymptomsx = true;
      feverx = true;
      document.getElementById("mp4_src").src = "videos/no.mp4"; allifsaction();}//fever
    
    else if ((noteContent.includes("tired")&&!noteContent.includes("of"))
    ||noteContent.includes("sore throat")||noteContent.includes("soar throat")||noteContent.includes("chills")) {
  //readOutLoud("No");
  previousquestion = noteContent;   response_question = "No";
  associatedsymptomsx = true;
  document.getElementById("mp4_src").src = "videos/no.mp4"; allifsaction();}//do you feel tired all the time/any chills (it eliminates if you say 'do you feel tired of X')

    else if (noteContent.includes("naus")||noteContent.includes("vomit")) {
      //readOutLoud("No");
      previousquestion = noteContent;   response_question = "No";
      associatedsymptomsx = true;
      document.getElementById("mp4_src").src = "videos/no.mp4"; allifsaction();}//any vomiting/nausea/nauseous
    
    else if (noteContent.includes("dizz")||noteContent.includes("faint")||(noteContent.includes("light")&&noteContent.includes("head"))) {
      //readOutLoud("No");
      previousquestion = noteContent;   response_question = "No";
      associatedsymptomsx = true;
      dizzinessx = true;
      document.getElementById("mp4_src").src = "videos/no.mp4"; allifsaction();}//any dizziness/fainting/lightheadedness

    else if (noteContent.includes("palpitation")||(noteContent.includes("beat")||noteContent.includes("pound")||noteContent.includes("rac"))&&(noteContent.includes("chest")||noteContent.includes("heart"))) {
      //readOutLoud("Ye, sometimes I do feel like my chest is racing");
      previousquestion = noteContent;   response_question = "Yeah, sometimes I do feel like my chest is racing";
      associatedsymptomsx = true;
      palpitationsx = true;
      document.getElementById("mp4_src").src = "videos/palpitations.mp4"; allifsaction();}//palpitations/heart beating/racing/pounding

    else if (noteContent.includes("clam")||noteContent.includes("sweat")) {
      //readOutLoud("No");
      previousquestion = noteContent;   response_question = "No";
      associatedsymptomsx = true;
      document.getElementById("mp4_src").src = "videos/no.mp4"; allifsaction();}//any sweating/clammy

    else if (noteContent.includes("cough")&&!noteContent.includes("colour")&&!noteContent.includes("texture")&&!noteContent.includes("consistency")) {
      //readOutLoud("No");
      previousquestion = noteContent;   response_question = "No";
      associatedsymptomsx = true;
      coughx = true;
      document.getElementById("mp4_src").src = "videos/no.mp4"; allifsaction();}//cough
    
    else if (noteContent.includes("bring up any")||noteContent.includes("sputum")||noteContent.includes("phlegm")
    ||noteContent.includes("cough")&&(noteContent.includes("bring up")||noteContent.includes("come"))) {
      //readOutLoud("No");
      previousquestion = noteContent;   response_question = "No";
      associatedsymptomsx = true;
      coughx = true;
      document.getElementById("mp4_src").src = "videos/no.mp4"; allifsaction();}//do you bring up anything when you cough/vomit/ anything come out?
    
    else if (noteContent.includes("colour")||noteContent.includes("texture")||noteContent.includes("consistency")) {
      //readOutLoud("I don't know");
      previousquestion = noteContent;   response_question = "I don't know";
      document.getElementById("mp4_src").src = "videos/no.mp4"; allifsaction();}//colour of cough/vomit
    
    else if ((noteContent.includes("how much")||noteContent.includes("volume")||noteContent.includes("quanitity"))&&(noteContent.includes("bring up")||noteContent.includes("vomit")||noteContent.includes("phlegm")||noteContent.includes("sputum")||noteContent.includes("cough up"))) {
      //readOutLoud("I dno't know");
      previousquestion = noteContent;   response_question = "I don't know";
      document.getElementById("mp4_src").src = "videos/idontknow.mp4"; allifsaction();}//how much phlegm do you bring up
    
    //SOB   
    else if (noteContent.includes("short")||noteContent.includes("breathless")||noteContent.includes("breath")||noteContent.includes("dysp")) {
      //readOutLoud("I have felt short of breath since this morning too, but I think it's because of the pain");
      previousquestion = noteContent;   response_question = "I've felt short of breath since this morning, but I think it's because of the pain";
      dyspnoeax = true;
      document.getElementById("mp4_src").src = "videos/ihavefeltsob.mp4"; allifsaction();}//SOB/dyspnoea
    



    else if (noteContent.includes("whilst walk")||noteContent.includes("when you walk")
        ||noteContent.includes("whilst you walk")||noteContent.includes("when walk")||noteContent.includes("during walk")
        ||noteContent.includes("walk")&&(noteContent.includes("far")||noteContent.includes("how much")||noteContent.includes("stop")||noteContent.includes("until"))) {
      //readOutLoud("I can walk about 50 metres, but then I can't anymore because of the shortness of breath");
      previousquestion = noteContent;   response_question = "I can walk about 50 metres";
      walkdistancex = true;
      document.getElementById("mp4_src").src = "videos/icanwalk.mp4"; allifsaction();}//how far can you walk/when do you feel short of breath/ dyu get SOB whilst walking/when walking
    
    else if ((noteContent.includes("when sleep")||noteContent.includes("during sleep"))&&(noteContent.includes("short")||noteContent.includes("breath"))||noteContent.includes("pillow")||noteContent.includes("upright")
    ||noteContent.includes("sit")&&(noteContent.includes("up")||noteContent.includes("on"))
    ||(noteContent.includes("laid")||noteContent.includes("laying"))&&(noteContent.includes("down")||noteContent.includes("flat"))) {
      //readOutLoud("I normally sleep with 3-4 pillows at night acctually, and that's because I feel short of breath");
      previousquestion = noteContent;   response_question = "I normally sleep with 3-4 pillows at night, and that's because I feel short of breath";
      orthopnoeax = true;
    document.getElementById("mp4_src").src = "videos/3or4pillows.mp4"; allifsaction();}//SOB when sleeping/orthopnoea SOB/breathless when laying down/laying flat/////////////////////////is still shoulder!!!!
    
    else if (noteContent.includes("wak")&&noteContent.includes("up")) {
      //readOutLoud("I do wake up short of breath at times");
      previousquestion = noteContent;   response_question = "I do wake up short of breath at times";
      pndx = true;
    document.getElementById("mp4_src").src = "videos/wakeupsob.mp4"; allifsaction();}//SOB Paroxysmal Nocturnal dyspnoea (PND) waking up, wake up, wake you up etc
    
    else if (noteContent.includes("how")&&noteContent.includes("wak")) {
      //readOutLoud("I wake up probably around 5-6 times a night");
      previousquestion = noteContent;   response_question = "I wake up 5-6 times a night";
      pndx = true;
    document.getElementById("mp4_src").src = "videos/wakeup5to6times.mp4"; allifsaction();}//how often do you wake up SOB

    //Gastro
    else if (noteContent.includes("bloat")) {
      //readOutLoud("I haven't noticed any bloating");
      previousquestion = noteContent;   response_question = "I haven't noticed any bloating";
      associatedsymptomsx = true;
      document.getElementById("mp4_src").src = "videos/bloating.mp4"; allifsaction();}//bloating
    
    else if (noteContent.includes("yellow")) {
      //readOutLoud("I've not noticed any yellowing of the skin or of my eyes");
      previousquestion = noteContent;   response_question = "I've not noticed any yellowing of the skin or of my eyes'";
      associatedsymptomsx = true;
      document.getElementById("mp4_src").src = "videos/yellowingofskin.mp4"; allifsaction();}//jaundice

    else if (noteContent.includes("swell")&&(noteContent.includes("ankle")||noteContent.includes("leg"))
    ||noteContent.includes("oedema")||noteContent.includes("edema")) {
      //readOutLoud("I've not noticed any");
      previousquestion = noteContent;   response_question = "I've not noticed any";
      oedemax = true;
      document.getElementById("mp4_src").src = "videos/ivenotnoticedany.mp4"; allifsaction();}//peripheral oedema

    else if (noteContent.includes("lump")||noteContent.includes("lymph")||noteContent.includes("swelling")) {
      //readOutLoud("I've not noticed any");
      previousquestion = noteContent;   response_question = "I've not noticed any";
      document.getElementById("mp4_src").src = "videos/ivenotnoticedany.mp4"; allifsaction();}//lymph nodes - query "swelling" coz could be of the knee for example
    
    else if (noteContent.includes("confus")) {
      //readOutLoud("I've not felt confused recently");
      previousquestion = noteContent;   response_question = "I've not felt confused recently";
      associatedsymptomsx = true;
      document.getElementById("mp4_src").src = "videos/confused.mp4"; allifsaction();}//confused/confusion
    
    else if (noteContent.includes("cholesterol")) {
      //readOutLoud("I have high cholesterol levels");
      previousquestion = noteContent;   response_question = "I have high cholesterol";
      document.getElementById("mp4_src").src = "videos/cholesterol.mp4"; allifsaction();}//cholesterol

    //rheumatology
    else if ((noteContent.includes("muscle")||noteContent.includes("joint"))&&(noteContent.includes("ach")||noteContent.includes("problem")||noteContent.includes("wrong"))) {
      //readOutLoud("No, I don't think so");
      previousquestion = noteContent;   response_question = "No, I don't think so";
      document.getElementById("mp4_src").src = "videos/noidontthinkso.mp4"; allifsaction();}//muscle aches/aching joints etc, anything wrong with your muscles/joints

    else if ((noteContent.includes("muscle")||noteContent.includes("joint"))&&(noteContent.includes("how"))) {
      //readOutLoud("They're fine");
      previousquestion = noteContent;   response_question = "They're fine";
      document.getElementById("mp4_src").src = "videos/notheyrefine.mp4"; allifsaction();}//How are your muscles/joints

    //ENT
    else if (noteContent.includes("headache")) {
      //readOutLoud("I've not been having any headaches");
      previousquestion = noteContent;   response_question = "I've not noticed any headaches";
      associatedsymptomsx = true;
      document.getElementById("mp4_src").src = "videos/headaches.mp4"; allifsaction();}//headache
    
    //opthalmology    
    else if (noteContent.includes("vision")||noteContent.includes("eye sight")||noteContent.includes("eye-sight")||noteContent.includes("changes in your eyes")) {
      //readOutLoud("I've not noticed any changes in my vision");
      previousquestion = noteContent;   response_question = "I've not noticed any changes in my vision";
      associatedsymptomsx = true;
      document.getElementById("mp4_src").src = "videos/changesinvision.mp4"; allifsaction();}//vision
    
    //derm
    else if (noteContent.includes("skin")) {
      //readOutLoud("I've not noticed any changes in my skin");
      previousquestion = noteContent;   response_question = "I've not noticed any changes in my skin";
      associatedsymptomsx = true;
      document.getElementById("mp4_src").src = "videos/changesinskin.mp4"; allifsaction();}//skin changes
    
    //bowels+urine    
    else if (noteContent.includes("bowels")||noteContent.includes("poo")
        ||noteContent.includes("stool")||noteContent.includes("back side")
        ||noteContent.includes("constipation")||noteContent.includes("diarrhoea")||noteContent.includes("runny")) {
      //readOutLoud("I've not noticed any changes");
      previousquestion = noteContent;   response_question = "I've not noticed any changes";
      document.getElementById("mp4_src").src = "videos/changesinstools.mp4"; allifsaction();}//bowels
    
    else if (noteContent.includes("urin")||noteContent.includes("pee")
        ||noteContent.includes("piss")||noteContent.includes("toilet")
        ||noteContent.includes("bladder")||noteContent.includes("void")) {
      //readOutLoud("I've not noticed any changes in my urine");
      previousquestion = noteContent;   response_question = "I've not noticed any changes in my urine";
      document.getElementById("mp4_src").src = "videos/changesinurine.mp4"; allifsaction();}//urine/voiding

    //red flags   
    else if (noteContent.includes("weight")) {
      //readOutLoud("I've not noticed any weight loss to be honest");
      previousquestion = noteContent;   response_question = "I've not noticed any weight loss";
      weightx = true;
      document.getElementById("mp4_src").src = "videos/wtlossgain.mp4"; allifsaction();}//weight loss
    
    else if (noteContent.includes("blood")) {
      //readOutLoud("I've not noticed any blood loss from anywhere");
      previousquestion = noteContent;   response_question = "I've not noticed any blood loss from anywhere";
      document.getElementById("mp4_src").src = "videos/bloodloss.mp4"; allifsaction();}//blood loss

    else if (noteContent.includes("appetite")) {
      //readOutLoud("I've not noticed any changes in my appetite");
      previousquestion = noteContent;   response_question = "I've not noticed any changes in my appetite";
      document.getElementById("mp4_src").src = "videos/changesinappetite.mp4"; allifsaction();}//changes in appetite
    
    //ICE
    else if (noteContent.includes("idea")||noteContent.includes("do you think")||noteContent.includes("do you think")&&((noteContent.includes("going on")
        ||noteContent.includes("reckon")||noteContent.includes("happening")))) {
      //readOutLoud("I think I might be having a heart attack, but I'm not too sure");
      previousquestion = noteContent;   response_question = "I think I might be having a heart attack, but I'm not too sure";
      ideasx = true;
      document.getElementById("mp4_src").src = "videos/ideas.mp4"; allifsaction();}//Ideas/what's your ideas of what's happening/what dyu think's happening/do you think it's cancer
    
    else if (noteContent.includes("concern")||noteContent.includes("worr")||noteContent.includes("worry")||noteContent.includes("scar")) {
      //readOutLoud("I'm really worried that it is acctually a heart attack, and I know that you can die from a heart attack");
      previousquestion = noteContent;   response_question = "I'm worried it's a heart attack as I know you can die from that";
      concernsx = true;
      document.getElementById("mp4_src").src = "videos/concerns.mp4"; allifsaction();}//Concerns/anything scaring you
    
    else if (noteContent.includes("expect")||noteContent.includes("get out of")||noteContent.includes("like from us")||noteContent.includes("hop")
    ||noteContent.includes("can we help")||noteContent.includes("what can we do for you")||noteContent.includes("what can i do for you")) {
      //readOutLoud("I would like to figure out what is going on with me if that's possible, and maybe run a few tests?");
      previousquestion = noteContent;   response_question = "I want to figure out what's going on with me, and maybe run a few tests?";
      expectationsx = true;
      document.getElementById("mp4_src").src = "videos/expectations.mp4"; allifsaction();}//Expectations/what would you like from us
    
    
    

    //PMHx+FHx+allergies+meds   
    else if (noteContent.includes("family")&&(noteContent.includes("heart")||noteContent.includes("cardi"))) {
      //readOutLoud("My auntie died of a heart attack when she was 67 and my father had a mini stroke when he was 72, but he's recovered now though");
      previousquestion = noteContent;   response_question = "My auntie died of a heart attack when she was 67 and my father had a mini stroke when he was 72, but he's recovered now though";
      familyhistoryx = true;
      FHheartconditionsx = true;
      document.getElementById("mp4_src").src = "videos/cardiacfamilyhistory.mp4"; allifsaction();}//heart problems in the family

    else if (noteContent.includes("family")&&(noteContent.includes("diabete"))) {
      //readOutLoud("I know my dad has type 2 diabetes, but I don't think any one else has it.");
      previousquestion = noteContent;   response_question = "My dad had type 2 diabetes, but no one else has it";
      familyhistoryx = true;
      document.getElementById("mp4_src").src = "videos/diabetesfamilyhistory.mp4"; allifsaction();}//diabetes problems in the family
    
    else if ((noteContent.includes("family")||noteContent.includes("run in the"))
    &&!noteContent.includes("cardi")&&!noteContent.includes("gastr")&&!noteContent.includes("neur")&&!noteContent.includes("resp")
    &&!noteContent.includes("heart")&&!noteContent.includes("chest")) {
      //readOutLoud("My grandma had a problem with her thyroid when she was younger, and I think my dad used to have prostate cancer");
      previousquestion = noteContent;   response_question = "My grandma had a thyroid problem when she was younger, and my dad used to have prostate cancer";
      familyhistoryx = true;
      document.getElementById("mp4_src").src = "videos/familyhistory.mp4"; allifsaction();}//FHx

    

    
    



    else if (!noteContent.includes("famil")&&!noteContent.includes("ask")&&(noteContent.includes("anything else")||noteContent.includes("other problem")||noteContent.includes("other condition"))
    ||(noteContent.includes("medical")&&(noteContent.includes("problem")||noteContent.includes("condition")||noteContent.includes("issue")))) {
      //readOutLoud("I have high blood pressure and I had a stroke a few years ago that I successfuly recovered from a couple years ago.");
      previousquestion = noteContent;   response_question = "I have high blood pressure and a stroke a few years ago that I successfully recovered from a few years ago";
      pmhx = true;
      document.getElementById("mp4_src").src = "videos/pmhx.mp4"; allifsaction();}//PMHx / suffere from anything else (you also want to rule out is there anything else you want to ask me)

        else if (noteContent.includes("stroke")&&noteContent.includes("past")) {
          //readOutLoud("I had a stroke a few years ago that I successfuly recovered from a couple years ago.");
          previousquestion = noteContent;   response_question = "I had a stroke a few years ago that I recovered from";
          pmhx = true;
          document.getElementById("mp4_src").src = "videos/ihadastrokeafewyearsago.mp4"; allifsaction();}//PMHx

    else if (noteContent.includes("diabet")&&!noteContent.includes("family")) {
      //readOutLoud("I've recently been diagnosed with type 2 diabetes acctually, but I've been compliant with my medications and have regularly gone to the Doctors for my diabetes check ups.");
      previousquestion = noteContent;   response_question = "I've recently gotdiagnosed with type 2 diabetes and been taking all my medications for it";
      diabetesx = true;
      document.getElementById("mp4_src").src = "videos/recentlydxoftype2diabetes.mp4"; allifsaction();}//PMHx diabetes. not family



        
    else if (noteContent.includes("blood pressure")&&!noteContent.includes("family")) {
      //readOutLoud("I think my blood pressure was slightly high when I came in last time to the GP around a month ago, but they didn't give me anything for it.");
      previousquestion = noteContent;   response_question = "My blood pressure was high last time I went to GP a month ago but I didn't give me anything for it";
      hypertensionx = true;
      document.getElementById("mp4_src").src = "videos/bloodpressurequitehighbutnomeds.mp4"; allifsaction();}//PMHx hypertension. not family

    else if (noteContent.includes("artery disease")||(noteContent.includes("leg")||noteContent.includes("foot")||noteContent.includes("feet"))&&(noteContent.includes("pain")||noteContent.includes("problem"))) {
      //readOutLoud("I have peripheral artery disease, so I get do get pains in my legs when I walk, but that's because I have peripheral artery disease");
      previousquestion = noteContent;   response_question = "I get pain in my legs because I have peripheral artery disease";
      padx = true;
      document.getElementById("mp4_src").src = "videos/peripheralarterydisease.mp4"; allifsaction();}//peripheral artery disease
    
    else if (noteContent.includes("sleep apnoea")||noteContent.includes("snor")||(noteContent.includes("problem")||noteContent.includes("breath")||noteContent.includes("loud"))&&(noteContent.includes("sleep")||noteContent.includes("night")||noteContent.includes("heav"))) {
      //readOutLoud("I have sleep apnoea, so I snore quite loudly at night");
      previousquestion = noteContent;   response_question = "I havesleep apnoea so I snore loudly";
      sleepapnoeax = true;
      document.getElementById("mp4_src").src = "videos/sleepapnoea.mp4"; allifsaction();}//sleep apnoea/snoring/breath heavily/heavy


    else if (noteContent.includes("surger")||noteContent.includes("operat")) {
      //readOutLoud("I've not had any surgeries");
      previousquestion = noteContent;   response_question = "I've not had any surgeries";
      surgeriesx = true;
      document.getElementById("mp4_src").src = "videos/surgeries.mp4"; allifsaction();}//Any surgeries
    
    else if (noteContent.includes("allerg")) {
      //readOutLoud("no");
      previousquestion = noteContent;   response_question = "no";
      allergiesx = true;
      document.getElementById("mp4_src").src = "videos/no.mp4"; allifsaction();}//FHx
    
    else if (noteContent.includes("do you take anything for")||noteContent.includes("paracetamol")||noteContent.includes("pain relief")||noteContent.includes("relie")&&noteContent.includes("pain")) {
      //readOutLoud("I take paracetamol, but it doesn't work");
      previousquestion = noteContent;   response_question = "I take paracetomol but it doesn't work";
      medstestx = true;
      document.getElementById("mp4_src").src = "videos/itakeparacetamolbutdoesntwork.mp4"; allifsaction();}//Do you take anything for the pain? + does it work
    
    else if (noteContent.includes("meds")||noteContent.includes("medication")||noteContent.includes("drugs")&&!noteContent.includes("illicit")&&!noteContent.includes("illegal")) {
      //readOutLoud("I take aspirin 300mg, I'm also on a Beta blocker called bisoprolol and I'm on a statin too.");
      previousquestion = noteContent;   response_question = "I take aspirin, bisoprolol and a statin";
      medstestx = true;
      document.getElementById("mp4_src").src = "videos/medicationsaspirin.mp4"; allifsaction();}//meds
    
    
    //social Hx
    
    else if (noteContent.includes("how long")&&noteContent.includes("smoke")) {
      //readOutLoud("I started smoking when I was 15");
      previousquestion = noteContent;   response_question = "i started smoking when 15";
      smokingx = true;
      document.getElementById("mp4_src").src = "videos/startedsmoking.mp4"; allifsaction();}//smoking
    
    else if (noteContent.includes("start")&&noteContent.includes("smoke")) {
      //readOutLoud("I started smoking when I was 15");
      previousquestion = noteContent;   response_question = "i started smoking when 15";
      smokingx = true;
      document.getElementById("mp4_src").src = "videos/startedsmoking.mp4"; allifsaction();}//smoking

    else if (noteContent.includes("smok")||noteContent.includes("how much do you smoke")) {
      //readOutLoud("I smoke 30 cigarettes every day");
      previousquestion = noteContent;   response_question = "i smoke 30 cigarettes a day";
      smokingx = true;
      document.getElementById("mp4_src").src = "videos/ismoke30aday.mp4"; allifsaction();}//smoking

    else if (noteContent.includes("used to smoke")||noteContent.includes("did you smoke")) {
      //readOutLoud("I used to smoke 10 cigarettes a day when I was a teenager, and I started when I was 15");
      previousquestion = noteContent;   response_question = "I used to smoke 10 a day as a teen";
      smokingx = true;
      document.getElementById("mp4_src").src = "videos/iusedtosmoke.mp4"; allifsaction();}//past smoking
    
    else if (noteContent.includes("how long")&&noteContent.includes("drink")) {
      //readOutLoud("I started drinking when I was 13");
      previousquestion = noteContent;   response_question = "i started drinking when 13";
      smokingx = true;
      document.getElementById("mp4_src").src = "videos/starteddrinkingwheniwas13.mp4"; allifsaction();}//smoking
    
    else if (noteContent.includes("start")&&noteContent.includes("drink")) {
      //readOutLoud("I started drinking when I was 13");
      previousquestion = noteContent;   response_question = "i started drinking when 13";
      smokingx = true;
      document.getElementById("mp4_src").src = "videos/starteddrinkingwheniwas13.mp4"; allifsaction();}//smoking


    else if(noteContent.includes("drink")||noteContent.includes("alcohol")||noteContent.includes("how much do you drink")){
      //readOutLoud("I drink about half a bottles of wine every day");
      previousquestion = noteContent;   response_question = "i drink about half a bottle of wine per day";
      alcoholx = true;
      document.getElementById("mp4_src").src = "videos/drinkabouthalfabottleaday.mp4"; allifsaction();}//alcohol
    
    else if (noteContent.includes("used to drink")||noteContent.includes("did you drink")) {
      //readOutLoud("I used to binge drink as a teenager, but have decreased since then");
      previousquestion = noteContent;   response_question = "i used to binge drink as a teen, but have decreased since";
      alcoholx = true;
      document.getElementById("mp4_src").src = "videos/usedtobingedrinkwhenyounger.mp4"; allifsaction();}//past alcohol
    
    else if(noteContent.includes("illicit")||noteContent.includes("illegal drug")){
      //readOutLoud("No I don't");
      previousquestion = noteContent;   response_question = "no i don't";
      document.getElementById("mp4_src").src = "videos/noidont.mp4"; allifsaction();}//illicit drugs
    
    else if(noteContent.includes("over the counter")||noteContent.includes("not prescribed")||noteContent.includes("not given")){
      //readOutLoud("No");
      previousquestion = noteContent;   response_question = "no";
      document.getElementById("mp4_src").src = "videos/no.mp4"; allifsaction();}//OTC drugs/have you been taking any drugs not given by the Dr
    
    else if(noteContent.includes("exercise")||noteContent.includes("go on walk")||noteContent.includes("active")
    ||noteContent.includes("sport")||noteContent.includes("physical")){
      //readOutLoud("I don't really, especially because I get short of breath, so I avoid it. But I do sometimes walk to the shops though when I can");
      previousquestion = noteContent;   response_question = "i don't exercise because I get short of breath so i avoid it. but i do wak to shops when i can";
      physicalactivityx = true;
      document.getElementById("mp4_src").src = "videos/idontreallyespeciallycozigetsobsoavoidwalking.mp4"; allifsaction();}//exercise/do you keep active
    





    else if(noteContent.includes("diet")||noteContent.includes("do you eat")||noteContent.includes("what you eat")){
      //readOutLoud("I've been told I eat too much, but I would say I eat alright, I only eat fast food 2 or 3 times a week, but I try to get my 5 a day");
      previousquestion = noteContent;   response_question = "i eat too much. I eat fast food 3 times/week, i try to eat my 5 a day";
      document.getElementById("mp4_src").src = "videos/ieattoomuch.mp4"; allifsaction();}//how's your diet/what sorts of things do you eat/describe what you eat
    


    
    //home situation    
    else if(noteContent.includes("at home")||noteContent.includes("live with")){
      //readOutLoud("I live with my wife at home");
      previousquestion = noteContent;   response_question = "i live with wife at home";
      homesituationx = true;
      document.getElementById("mp4_src").src = "videos/ilivewithmywife.mp4"; allifsaction();}//who's at home/who lives at home/who dyu live with
    
    else if(noteContent.includes("bungalo")||noteContent.includes("house")||noteContent.includes("appartment")
        ||noteContent.includes("live in")||noteContent.includes("you live")||noteContent.includes("living situation")||noteContent.includes("housing situation")){
      //readOutLoud("I live in a little flat in the city");
      previousquestion = noteContent;   response_question = "i live in little flat in the city";
      homesituationx = true;
      document.getElementById("mp4_src").src = "videos/iliveinaflatinthecity.mp4"; allifsaction();}//where dyu live/dyu live in a flat etc
    
    else if(noteContent.includes("how")&&noteContent.includes("wife")){
      //readOutLoud("She is fine thank you");
      previousquestion = noteContent;   response_question = "she's fine";
      homesituationx = true;
      document.getElementById("mp4_src").src = "videos/shesfinethankyou.mp4"; allifsaction();}//how's your wife

    else if((noteContent.includes("wife")||noteContent.includes("husband")||noteContent.includes("girlfriend")||noteContent.includes("boyfriend"))&&(noteContent.includes("have")||noteContent.includes("any"))||noteContent.includes("single")&&noteContent.includes("you")){
      //readOutLoud("I have a wife");
      previousquestion = noteContent;   response_question = "i have a wife";
      homesituationx = true;
      document.getElementById("mp4_src").src = "videos/ihaveawife.mp4"; allifsaction();}//children?
    
    else if((noteContent.includes("children")||noteContent.includes("kids"))&&(noteContent.includes("have")||noteContent.includes("any"))){
      //readOutLoud("I don't have any children");
      previousquestion = noteContent;   response_question = "i don't have children";
      homesituationx = true;
      document.getElementById("mp4_src").src = "videos/idonthaveanychildren.mp4"; allifsaction();}//children?

    else if((noteContent.includes("hello")||noteContent.toLowerCase() === "hi."||noteContent.toLowerCase() === "hi"||noteContent.toLowerCase() === "hey"
    ||noteContent.toLowerCase() === "hey."||noteContent.includes("greeting")
    ||noteContent.includes("hey there")||noteContent.includes("hi there")||noteContent.includes("hiya"))&&!noteContent.includes("children")){
      //readOutLoud("Hiya there");
      previousquestion = noteContent;   response_question = "hiya there";
      document.getElementById("mp4_src").src = "videos/hiyathere.mp4"; allifsaction();}
    

    else if(noteContent.includes("is that correct")||noteContent.includes("is that right")||noteContent.includes("am i right")){
      //readOutLoud("yes that's correct");
      previousquestion = noteContent;   response_question = "yes that's correct";
      document.getElementById("mp4_src").src = "videos/thatscorrect.mp4"; allifsaction();}
    
    else if(noteContent.includes("miss")){
      //readOutLoud("You haven't missed anything");
      previousquestion = noteContent;   response_question = "you haven't missed anything";
      document.getElementById("mp4_src").src = "videos/youhaventmissedanything.mp4"; allifsaction();}//have I missed/missing anything out in the summary or in the consultation?

    else if(noteContent.includes("can")&&(noteContent.includes("repeat")||noteContent.includes("what did you say"))){
      //readOutLoud("Hmmmmmmm, I forgot the question you asked actually, can you ask it again please");
      previousquestion = noteContent;   response_question = "i forgot the question you asked, can you ask it again please";
      document.getElementById("mp4_src").src = "videos/hmmiforgotthequestionyouaskedcanyourepeat.mp4"; allifsaction();}//can you repeat what you said

    else if (noteContent.includes("sorry")) {
      //readOutLoud("thank you for understanding");
      previousquestion = noteContent;   response_question = "thank you for understanding";
      document.getElementById("mp4_src").src = "videos/thankyouforunderstanding.mp4"; allifsaction();}//Sorry to here about that

/*
        else if ((noteContent.includes("good")||noteContent.includes("ok")||noteContent.includes("alright"))&&(noteContent.includes("i'm")||noteContent.includes("i am"))) {
          //readOutLoud("good");
          previousquestion = noteContent;   response_question = "good";
          document.getElementById("mp4_src").src = "videos/good.mp4"; document.getElementById("myVideo").load(); document.getElementById('myVideo').onended = function(e) {
            recognition.start();  document.getElementById('listeninggif').style.display = 'unset';    document.getElementById('stop-consultation-btn').style.display = 'unset';
            }}//I'm good thank you (in response to how are you)
*/

    else if (noteContent.includes("hard for you")) {
      //readOutLoud("Yes it was quite hard for me, thank you for asking");
      previousquestion = noteContent;   response_question = "yes it was quite hard for me, thank you";
      document.getElementById("mp4_src").src = "videos/yesitwasquitehardforme.mp4"; allifsaction();}//Sorry to here about that

else if (noteContent === ""){
  emptyif.style.display = 'unset';
}

    else {
      


    //const prompt = "You are Jill, a 50 year old female with pain. The pain started yesterday at 3pm and is located on the upper right side of your tummy region. It is worse when bending down. You smoke 20 cigarettes per day, have 2 children, and do not take drugs. You are currently taking paracetamol for the pain. Imagine you are in a consultation room and the doctor is asking you questions, and you are Jill for all of the next questions that we ask in this thread. Do not give any more information than what the doctor asked for. Make it seem like Jill is not very smart and occasionally asks questions to the doctor. Question: What is your name?, Answer: My name is Jill";
    //const prompt = "you are jill, a 50 year old female. with pain. started yesterday at 3pm. located on the upper right side of your tummy region. that is worse when bending down. You smoke 20 cigarettes per day. you have 2 children. and don't take drugs. You take paracetamol for the pain. Imagine you are in a consultation room and the doctor is asking you questions and you are jill for all of the next questions Do not give any more information than what the doctor asked for. Input:"
    const prompt = "you're Marc, a 31 year old male. with constant severe heavy chest pain since this morning. You're in a consultation room & the Dr is asking you questions. Answer as Marc"

    //require('dotenv').config();

    const generateResponse = async (input) => {
      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', { //babbage davinci-3
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': `Bearer ${process.env['API_KEY']}`
          'Authorization': `Bearer `
        },
        body: JSON.stringify({
          prompt: prompt + '\n' + 'Previous question: ' + previousquestion + '\n' + 'Response to previous question:' + response_question + '\n' + 'question: ' + input + '\n' + 'answer: ', //'\n' + 'output: '
          temperature: 0.1,
          max_tokens: 25,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0
        })
      });
    
      const { choices } = await response.json();
      //return choices[0].text.trim();
    //};

//you can delete from this point till the 'return generatedText' and instead uncomment the 2 comments above 


    let generatedText = choices[0].text.trim();

  // Check if generatedText ends with sentence-ending punctuation
  while (!(generatedText.endsWith('.') || generatedText.endsWith('!') || generatedText.endsWith('?'))) {
    // Generate additional tokens to complete the sentence
    const additionalResponse = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_API_KEY_HERE`
      },
      body: JSON.stringify({
        prompt: prompt + '\n' + 'Previous question: ' + previousquestion + '\n' + 'Response to previous question:' + response_question + '\n' + 'question: ' + input + '\n' + 'answer: ' + generatedText,
        temperature: 0.1,
        max_tokens: 1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
    });

    const { choices: additionalChoices } = await additionalResponse.json();
    const additionalToken = additionalChoices[0].text.trim();
    generatedText += ' ' + additionalToken;
  }

  return generatedText;
};
    

/*
const handleUserInput = async (noteContent) => {
          const response = await generateResponse(noteContent);
          readOutLoud(response);


          document.getElementById("mp4_src").src = "WIN_20230328_13_59_49_Pro.mp4"; document.getElementById("myVideo").load(); document.getElementById('myVideo').onended = function(e) {
            recognition.start();  document.getElementById('listeninggif').style.display = 'unset';    document.getElementById('stop-consultation-btn').style.display = 'unset';
          }      
    }
*/

/*
const handleUserInput = async (noteContent) => {
  const responsePromise = generateResponse(noteContent);
  const videoPromise = new Promise((resolve) => {
    gptvideo.onloadedmetadata = () => {
      gptvideo.muted = true;

      gptvideo.play();
      resolve();
    };
    document.getElementById("mp4_src").src = "vid-whatsbroughtyouin.mp4";
    gptvideo.load();
  });
  await Promise.all([responsePromise, videoPromise]);
  const response = await responsePromise;
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(response);

  utterance.onend = () => {
    const gptvideo = document.getElementById('myVideo');
    gptvideo.pause();
    setTimeout(() => {
      gptvideo.muted = false; // Unmute the video after 2 seconds
    }, 2000);

    recognition.start();
    document.getElementById('listeninggif').style.display = 'unset';
    document.getElementById('stop-consultation-btn').style.display = 'unset';
  };
  synth.speak(utterance);
};
*/

document.getElementById('myVideo').style.display = 'none';
document.getElementById('mutedVideo').style.display = 'unset';



const gptvideo = document.getElementById('mutedVideo');


const handleUserInput = async (noteContent) => {
  const responsePromise = generateResponse(noteContent);
  const videoPromise = new Promise((resolve) => {
    gptvideo.onloadedmetadata = () => {
      gptvideo.muted = true;

      gptvideo.play();
      resolve();

    };
    //gptvideo.src = 'vid-whatsbroughtyouin.mp4';
    document.getElementById("mutedmp4_src").src = "videos/inlondon.mp4";
    gptvideo.load();

    gptvideo.onended =  function(e) {
      recognition.start();  document.getElementById('listeninggif').style.display = 'unset';    document.getElementById('stop-consultation-btn').style.display = 'unset';   document.getElementById('replayButton').style.display = 'unset';   document.getElementById('home').style.display = 'unset'; document.getElementById('executeButton').style.display = 'unset'; actionTriggered = false;
      
      document.getElementById('myVideo').style.display = 'unset';
      document.getElementById('mutedVideo').style.display = 'none';
    };
  

  });
  await Promise.all([responsePromise, videoPromise]);
  const response = await responsePromise;
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(response);


  utterance.onend = () => {

    const gptvideo = document.getElementById('mutedVideo');
    gptvideo.pause(); // Pause the video after the speech synthesis finishes
    //gptvideo.volume = 1;
    recognition.start();  document.getElementById('listeninggif').style.display = 'unset'; document.getElementById('stop-consultation-btn').style.display = 'unset'; document.getElementById('executeButton').style.display = 'unset';
    document.getElementById('myVideo').style.display = 'unset';
    document.getElementById('mutedVideo').style.display = 'none';
    
    //not too sure about this below - (added this in BEFORE testing it with chat gpt)
    actionTriggered = false;

  };
  synth.speak(utterance);




  previousquestion = noteContent; response_question = response;//is to put what the previous question was into chatgpt
};









const userInput = noteContent;
handleUserInput(userInput);
};//end of the else statement

function allifsaction(){
  document.getElementById("myVideo").load(); document.getElementById('myVideo').onended = function(e) {
    recognition.start();  document.getElementById('listeninggif').style.display = 'unset';    
    document.getElementById('stop-consultation-btn').style.display = 'unset';   
    document.getElementById('replayButton').style.display = 'unset';   document.getElementById('home').style.display = 'unset'; 
    document.getElementById('executeButton').style.display = 'unset';   
    actionTriggered = false;
  }
}


   /*-----------------------------------------------------
    trial = false;
    var test = $('#test');
     if (noteContent.includes("job")){
       //test.text('all of this works');
       trial = true;
     }
     
     if (trial === true){
       test.text('YES he asked about job');
     }
----------------------------------------------------/*----

/*----
const save_note_btn = document.getElementById('save-note-btn');
   if (noteContent=== '') {
     save_note_btn.disabled = true;
   } else {
     save_note_btn.disabled = false;
   }

/*----


/*-----------------------------------------------
Things we forgot to ask about in the consultation for EBI
--------------------------------------------------*/

/*var jobtest = $('#jobtest'); var jobtest1 = $('#jobtest1');
     if (jobx === true){
      jobtest.text('') 
      jobtest1.text("● The patient's job")
      generalhistorycounter++
      
     }*/


let generalhistorycounter = 0;




var painlocationreal1 = $('#painlocationreal1'); var painlocationreal2 = $('#painlocationreal2');
if (painlocationx === true){
redstyles(painlocationreal1); greenstyles(painlocationreal2);
}

var onsetreal1 = $('#onsetreal1'); var onsetreal2 = $('#onsetreal2');
if (onsetx === true){
redstyles(onsetreal1); greenstyles(onsetreal2);
}









function redstyles(element){
  element.css({'visibility': 'hidden'});}

function greenstyles(element){
  element.css({'visibility': 'visible','border-bottom':'1px solid rgb(190, 188, 188)','border-top':'1px solid rgb(190, 188, 188)'});}

//var painlocationreal1 = document.querySelectorAll('#customers #painlocationreal td:nth-child(2)');
//var painlocationreal2 = document.querySelectorAll('#customers #painlocationreal td:nth-child(3)');
//painlocationreal1.css('display: none');


       



     /*
var painlocationtest = $('#painlocationtest'); var painlocationtest1 = $('#painlocationtest1');
        if (painlocationx === true){
        painlocationtest.css('color', 'rgb(209, 228, 236)');
        painlocationtest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        //document.getElementById('painlocationtest-comment').style.display = 'none';
        //document.getElementById('painlocationtest-comment2').style.display = 'none';
        $('#painlocationtest-comment').css('color', 'rgb(209, 228, 236)');
        $('#painlocationtest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxpainlocation = $('#colorbox-painlocation');  colorboxpainlocation.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-painlocation-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxpainlocation = $('#correct-colorbox-painlocation');  correctcolorboxpainlocation.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-painlocation-before').css('background-color', 'rgb(197, 244, 197)');
      }
*/
      var onsettest = $('#onsettest'); var onsettest1 = $('#onsettest1');
        if (onsetx === true){
        onsettest.css('color', 'rgb(209, 228, 236)');
        onsettest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        //document.getElementById('onsettest-comment').style.display = 'none';
        //document.getElementById('onsettest-comment2').style.display = 'none';
        $('#onsettest-comment').css('color', 'rgb(209, 228, 236)');
        $('#onsettest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxonset = $('#colorbox-onset');  colorboxonset.css('background-color', 'rgb(209, 228, 236)');
                    $('#colorbox-onset-before').css('background-color', 'rgb(209, 228, 236)');
                      var correctcolorboxonset = $('#correct-colorbox-onset');  correctcolorboxonset.css('background-color', 'rgb(197, 244, 197)');
                    $('#correct-colorbox-onset-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var charactertest = $('#charactertest'); var charactertest1 = $('#charactertest1');
        if (characterx === true){
        charactertest.css('color', 'rgb(209, 228, 236)');
        charactertest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        //document.getElementById('charactertest-comment').style.display = 'none';
        //document.getElementById('charactertest-comment2').style.display = 'none';
        $('#charactertest-comment').css('color', 'rgb(209, 228, 236)');
        $('#charactertest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxcharacter = $('#colorbox-character');  colorboxcharacter.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-character-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxcharacter = $('#correct-colorbox-character');  correctcolorboxcharacter.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-character-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var timecoursetest = $('#timecoursetest'); var timecoursetest1 = $('#timecoursetest1');
        if (timecoursex === true){
        timecoursetest.css('color', 'rgb(209, 228, 236)');
        timecoursetest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        //document.getElementById('timecoursetest-comment').style.display = 'none';
        //document.getElementById('timecoursetest-comment2').style.display = 'none';
        $('#timecoursetest-comment').css('color', 'rgb(209, 228, 236)');
        $('#timecoursetest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxtimecourse = $('#colorbox-timecourse');  colorboxtimecourse.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-timecourse-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxtimecourse = $('#correct-colorbox-timecourse');  correctcolorboxtimecourse.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-timecourse-before').css('background-color', 'rgb(197, 244, 197)');
      }
     
      var radiatetest = $('#radiatetest'); var radiatetest1 = $('#radiatetest1');
      if (radiatex === true){
        radiatetest.css('color', 'rgb(209, 228, 236)');
        radiatetest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        //document.getElementById('radiatetest-comment').style.display = 'none';
        //document.getElementById('radiatetest-comment2').style.display = 'none';
        $('#radiatetest-comment').css('color', 'rgb(209, 228, 236)');
        $('#radiatetest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxradiate = $('#colorbox-radiate');  colorboxradiate.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-radiate-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxradiate = $('#correct-colorbox-radiate');  correctcolorboxradiate.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-radiate-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var associatedsymptomstest = $('#associatedsymptomstest'); var associatedsymptomstest1 = $('#associatedsymptomstest1');
      if (associatedsymptomsx === true){
        associatedsymptomstest.css('color', 'rgb(209, 228, 236)');
        associatedsymptomstest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        //document.getElementById('associatedsymptomstest-comment').style.display = 'none';
        //document.getElementById('associatedsymptomstest-comment2').style.display = 'none';
        $('#associatedsymptomstest-comment').css('color', 'rgb(209, 228, 236)');
        $('#associatedsymptomstest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxassociatedsymptoms = $('#colorbox-associatedsymptoms');  colorboxassociatedsymptoms.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-associatedsymptoms-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxassociatedsymptoms = $('#correct-colorbox-associatedsymptoms');  correctcolorboxassociatedsymptoms.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-associatedsymptoms-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var makeitworsetest = $('#makeitworsetest'); var makeitworsetest1 = $('#makeitworsetest1');
      if (makeitworsex === true){
        makeitworsetest.css('color', 'rgb(209, 228, 236)');
        makeitworsetest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        //document.getElementById('makeitworsetest-comment').style.display = 'none';
        //document.getElementById('makeitworsetest-comment2').style.display = 'none';
        $('#makeitworsetest-comment').css('color', 'rgb(209, 228, 236)');
        $('#makeitworsetest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxmakeitworse = $('#colorbox-makeitworse');  colorboxmakeitworse.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-makeitworse-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxmakeitworse = $('#correct-colorbox-makeitworse');  correctcolorboxmakeitworse.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-makeitworse-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var makeitbettertest = $('#makeitbettertest'); var makeitbettertest1 = $('#makeitbettertest1');
      if (makeitbetterx === true){
        makeitbettertest.css('color', 'rgb(209, 228, 236)');
        makeitbettertest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        //document.getElementById('makeitbettertest-comment').style.display = 'none';
        //document.getElementById('makeitbettertest-comment2').style.display = 'none';
        $('#makeitbettertest-comment').css('color', 'rgb(209, 228, 236)');
        $('#makeitbettertest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxmakeitbetter = $('#colorbox-makeitbetter');  colorboxmakeitbetter.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-makeitbetter-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxmakeitbetter = $('#correct-colorbox-makeitbetter');  correctcolorboxmakeitbetter.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-makeitbetter-before').css('background-color', 'rgb(197, 244, 197)');
      }
      
      var ratepaintest = $('#ratepaintest'); var ratepaintest1 = $('#ratepaintest1');
      if (ratepainx === true){
        ratepaintest.css('color', 'rgb(209, 228, 236)');
        ratepaintest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        //document.getElementById('ratepaintest-comment').style.display = 'none';
        //document.getElementById('ratepaintest-comment2').style.display = 'none';
        $('#ratepaintest-comment').css('color', 'rgb(209, 228, 236)');
        $('#ratepaintest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxratepain = $('#colorbox-ratepain');  colorboxratepain.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-ratepain-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxratepain = $('#correct-colorbox-ratepain');  correctcolorboxratepain.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-ratepain-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var happenbeforetest = $('#happenbeforetest'); var happenbeforetest1 = $('#happenbeforetest1');
      if (happenbeforex === true){
        happenbeforetest.css('color', 'rgb(209, 228, 236)');
        happenbeforetest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        //document.getElementById('happenbeforetest-comment').style.display = 'none';
        //document.getElementById('happenbeforetest-comment2').style.display = 'none';
        $('#happenbeforetest-comment').css('color', 'rgb(209, 228, 236)');
        $('#happenbeforetest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxhappenbefore = $('#colorbox-happenbefore');  colorboxhappenbefore.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-happenbefore-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxhappenbefore = $('#correct-colorbox-happenbefore');  correctcolorboxhappenbefore.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-happenbefore-before').css('background-color', 'rgb(197, 244, 197)');
      }







/**/
     
     
      var ideastest = $('#ideastest');  var ideastest1 = $('#ideastest1');
      if (ideasx === true){
        ideastest.css('color', 'rgb(209, 228, 236)');
        ideastest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        //document.getElementById('ideastest-comment').style.display = 'none';
        //document.getElementById('ideastest-comment2').style.display = 'none';
        $('#ideastest-comment').css('color', 'rgb(209, 228, 236)');
        $('#ideastest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxideas = $('#colorbox-ideas');  colorboxideas.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-ideas-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxideas = $('#correct-colorbox-ideas');  correctcolorboxideas.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-ideas-before').css('background-color', 'rgb(197, 244, 197)');
                  }

 
      var concernstest = $('#concernstest'); var concernstest1 = $('#concernstest1');
      if (concernsx === true){
        concernstest.css('color', 'rgb(209, 228, 236)');
        concernstest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
                    var colorboxconcerns = $('#colorbox-concerns');  colorboxconcerns.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-concerns-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxconcerns = $('#correct-colorbox-concerns');  correctcolorboxconcerns.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-concerns-before').css('background-color', 'rgb(197, 244, 197)');
                  }


      var expectationstest = $('#expectationstest'); var expectationstest1 = $('#expectationstest1');
      if (expectationsx === true){
        expectationstest.css('color', 'rgb(209, 228, 236)');
        expectationstest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        //document.getElementById('expectationstest-comment').style.display = 'none';
        //document.getElementById('expectationstest-comment2').style.display = 'none';
        $('#expectationstest-comment').css('color', 'rgb(209, 228, 236)');
        $('#expectationstest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxexpectations = $('#colorbox-expectations');  colorboxexpectations.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-expectations-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxexpectations = $('#correct-colorbox-expectations');  correctcolorboxexpectations.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-expectations-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var familyhistorytest = $('#familyhistorytest'); var familyhistorytest1 = $('#familyhistorytest1');
      if (familyhistoryx === true){
        familyhistorytest.css('color', 'rgb(209, 228, 236)');
        familyhistorytest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
                    var colorboxfamilyhistory = $('#colorbox-familyhistory');  colorboxfamilyhistory.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-familyhistory-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxfamilyhistory = $('#correct-colorbox-familyhistory');  correctcolorboxfamilyhistory.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-familyhistory-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var pmhtest = $('#pmhtest'); var pmhtest1 = $('#pmhtest1');
      if (pmhx === true){
        pmhtest.css('color', 'rgb(209, 228, 236)');
        pmhtest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
                    var colorboxpmh = $('#colorbox-pmh');  colorboxpmh.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-pmh-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxpmh = $('#correct-colorbox-pmh');  correctcolorboxpmh.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-pmh-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var surgicaltest = $('#surgicaltest'); var surgicaltest1 = $('#surgicaltest1');
      if (surgicalx === true){
        surgicaltest.css('color', 'rgb(209, 228, 236)');
        surgicaltest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
                    var colorboxsurgical = $('#colorbox-surgical');  colorboxsurgical.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-surgical-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxsurgical = $('#correct-colorbox-surgical');  correctcolorboxsurgical.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-surgical-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var medstest = $('#medstest'); var medstest1 = $('#medstest1');
      if (medsx === true){
        medstest.css('color', 'rgb(209, 228, 236)');
        medstest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
                    var colorboxmeds = $('#colorbox-meds');  colorboxmeds.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-meds-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxmeds = $('#correct-colorbox-meds');  correctcolorboxmeds.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-meds-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var allergiestest = $('#allergiestest'); var allergiestest1 = $('#allergiestest1');
      if (allergiesx === true){
        allergiestest.css('color', 'rgb(209, 228, 236)');
        allergiestest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
                    var colorboxallergies = $('#colorbox-allergies');  colorboxallergies.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-allergies-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxallergies = $('#correct-colorbox-allergies');  correctcolorboxallergies.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-allergies-before').css('background-color', 'rgb(197, 244, 197)');
      }

/**/

      var jobtest = $('#jobtest'); var jobtest1 = $('#jobtest1');
      if (jobx === true){
        jobtest.css('color', 'rgb(209, 228, 236)');
        jobtest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
                      var colorboxjob = $('#colorbox-job');  colorboxjob.css('background-color', 'rgb(209, 228, 236)');
                    $('#colorbox-job-before').css('background-color', 'rgb(209, 228, 236)');
                      var correctcolorboxjob = $('#correct-colorbox-job');  correctcolorboxjob.css('background-color', 'rgb(197, 244, 197)');
                    $('#correct-colorbox-job-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var walkdistancetest = $('#walkdistancetest'); var walkdistancetest1 = $('#walkdistancetest1');
      if (walkdistancex === true){
        walkdistancetest.css('color', 'rgb(209, 228, 236)');
        walkdistancetest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
                    var colorboxwalkdistance = $('#colorbox-walkdistance');  colorboxwalkdistance.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-walkdistance-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxwalkdistance = $('#correct-colorbox-walkdistance');  correctcolorboxwalkdistance.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-walkdistance-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var homesituationtest = $('#homesituationtest'); var homesituationtest1 = $('#homesituationtest1');
      if (homesituationx === true){
        homesituationtest.css('color', 'rgb(209, 228, 236)');
        homesituationtest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        //document.getElementById('homesituationtest-comment').style.display = 'none';
        //document.getElementById('homesituationtest-comment2').style.display = 'none';
        $('#homesituationtest-comment').css('color', 'rgb(209, 228, 236)');
        $('#homesituationtest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxhomesituation = $('#colorbox-homesituation');  colorboxhomesituation.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-homesituation-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxhomesituation = $('#correct-colorbox-homesituation');  correctcolorboxhomesituation.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-homesituation-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var smokingtest = $('#smokingtest'); var smokingtest1 = $('#smokingtest1');
      if (smokingx === true){
        smokingtest.css('color', 'rgb(209, 228, 236)');
        smokingtest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
                    var colorboxsmoking = $('#colorbox-smoking');  colorboxsmoking.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-smoking-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxsmoking = $('#correct-colorbox-smoking');  correctcolorboxsmoking.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-smoking-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var alcoholtest = $('#alcoholtest'); var alcoholtest1 = $('#alcoholtest1');
      if (alcoholx === true){
        alcoholtest.css('color', 'rgb(209, 228, 236)');
        alcoholtest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
                    var colorboxalcohol = $('#colorbox-alcohol');  colorboxalcohol.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-alcohol-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxalcohol = $('#correct-colorbox-alcohol');  correctcolorboxalcohol.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-alcohol-before').css('background-color', 'rgb(197, 244, 197)');
      }



/*important not to miss*/


      var dyspnoeatest = $('#dyspnoeatest'); var dyspnoeatest1 = $('#dyspnoeatest1');
      if (dyspnoeax === true){
        dyspnoeatest.css('color', 'rgb(209, 228, 236)');
        dyspnoeatest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#dyspnoeatest-comment').css('color', 'rgb(209, 228, 236)');
        $('#dyspnoeatest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxdyspnoea = $('#colorbox-dyspnoea');  colorboxdyspnoea.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-dyspnoea-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxdyspnoea = $('#correct-colorbox-dyspnoea');  correctcolorboxdyspnoea.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-dyspnoea-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var orthopnoeatest = $('#orthopnoeatest'); var orthopnoeatest1 = $('#orthopnoeatest1');
      if (orthopnoeax === true){
        orthopnoeatest.css('color', 'rgb(209, 228, 236)');
        orthopnoeatest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#orthopnoeatest-comment').css('color', 'rgb(209, 228, 236)');
        $('#orthopnoeatest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxorthopnoea = $('#colorbox-orthopnoea');  colorboxorthopnoea.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-orthopnoea-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxorthopnoea = $('#correct-colorbox-orthopnoea');  correctcolorboxorthopnoea.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-orthopnoea-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var pndtest = $('#pndtest'); var pndtest1 = $('#pndtest1');
      if (pndx === true){
        pndtest.css('color', 'rgb(209, 228, 236)');
        pndtest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#pndtest-comment').css('color', 'rgb(209, 228, 236)');
        $('#pndtest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxpnd = $('#colorbox-pnd');  colorboxpnd.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-pnd-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxpnd = $('#correct-colorbox-pnd');  correctcolorboxpnd.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-pnd-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var coughtest = $('#coughtest'); var coughtest1 = $('#coughtest1');
      if (coughx === true){
        coughtest.css('color', 'rgb(209, 228, 236)');
        coughtest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#coughtest-comment').css('color', 'rgb(209, 228, 236)');
        $('#coughtest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxcough = $('#colorbox-cough');  colorboxcough.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-cough-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxcough = $('#correct-colorbox-cough');  correctcolorboxcough.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-cough-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var FHheartconditionstest = $('#FHheartconditionstest'); var FHheartconditionstest1 = $('#FHheartconditionstest1');
      if (FHheartconditionsx === true){
        FHheartconditionstest.css('color', 'rgb(209, 228, 236)');
        FHheartconditionstest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#FHheartconditionstest-comment').css('color', 'rgb(209, 228, 236)');
        $('#FHheartconditionstest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxFHheartconditions = $('#colorbox-FHheartconditions');  colorboxFHheartconditions.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-FHheartconditions-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxFHheartconditions = $('#correct-colorbox-FHheartconditions');  correctcolorboxFHheartconditions.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-FHheartconditions-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var diabetestest = $('#diabetestest'); var diabetestest1 = $('#diabetestest1');
      if (diabetesx === true){
        diabetestest.css('color', 'rgb(209, 228, 236)');
        diabetestest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#diabetestest-comment').css('color', 'rgb(209, 228, 236)');
        $('#diabetestest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxdiabetes = $('#colorbox-diabetes');  colorboxdiabetes.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-diabetes-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxdiabetes = $('#correct-colorbox-diabetes');  correctcolorboxdiabetes.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-diabetes-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var hypertensiontest = $('#hypertensiontest'); var hypertensiontest1 = $('#hypertensiontest1');
      if (hypertensionx === true){
        hypertensiontest.css('color', 'rgb(209, 228, 236)');
        hypertensiontest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#hypertensiontest-comment').css('color', 'rgb(209, 228, 236)');
        $('#hypertensiontest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxhypertension = $('#colorbox-hypertension');  colorboxhypertension.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-hypertension-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxhypertension = $('#correct-colorbox-hypertension');  correctcolorboxhypertension.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-hypertension-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var heartattackstest = $('#heartattackstest'); var heartattackstest1 = $('#heartattackstest1');
      if (heartattacksx === true){
        heartattackstest.css('color', 'rgb(209, 228, 236)');
        heartattackstest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#heartattackstest-comment').css('color', 'rgb(209, 228, 236)');
        $('#heartattackstest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxheartattacks = $('#colorbox-heartattacks');  colorboxheartattacks.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-heartattacks-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxheartattacks = $('#correct-colorbox-heartattacks');  correctcolorboxheartattacks.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-heartattacks-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var dizzinesstest = $('#dizzinesstest'); var dizzinesstest1 = $('#dizzinesstest1');
      if (dizzinessx === true){
        dizzinesstest.css('color', 'rgb(209, 228, 236)');
        dizzinesstest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#dizzinesstest-comment').css('color', 'rgb(209, 228, 236)');
        $('#dizzinesstest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxdizziness = $('#colorbox-dizziness');  colorboxdizziness.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-dizziness-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxdizziness = $('#correct-colorbox-dizziness');  correctcolorboxdizziness.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-dizziness-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var physicalactivitytest = $('#physicalactivitytest'); var physicalactivitytest1 = $('#physicalactivitytest1');
      if (physicalactivityx === true){
        physicalactivitytest.css('color', 'rgb(209, 228, 236)');
        physicalactivitytest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#physicalactivitytest-comment').css('color', 'rgb(209, 228, 236)');
        $('#physicalactivitytest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxphysicalactivity = $('#colorbox-physicalactivity');  colorboxphysicalactivity.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-physicalactivity-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxphysicalactivity = $('#correct-colorbox-physicalactivity');  correctcolorboxphysicalactivity.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-physicalactivity-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var palpitationstest = $('#padtest'); var palpitationstest1 = $('#palpitationstest1');
      if (palpitationsx === true){
        palpitationstest.css('color', 'rgb(209, 228, 236)');
        palpitationstest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#palpitationstest-comment').css('color', 'rgb(209, 228, 236)');
        $('#palpitationstest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxpalpitations = $('#colorbox-palpitations');  colorboxpalpitations.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-palpitations-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxpalpitations = $('#correct-colorbox-palpitations');  correctcolorboxpalpitations.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-palpitations-before').css('background-color', 'rgb(197, 244, 197)');
      }

/*Stand out*/

      var sleepapnoeatest = $('#sleepapnoeatest'); var sleepapnoeatest1 = $('#sleepapnoeatest1');
      if (sleepapnoeax === true){
        sleepapnoeatest.css('color', 'rgb(209, 228, 236)');
        sleepapnoeatest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#sleepapnoeatest-comment').css('color', 'rgb(209, 228, 236)');
        $('#sleepapnoeatest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxsleepapnoea = $('#colorbox-sleepapnoea');  colorboxsleepapnoea.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-sleepapnoea-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxsleepapnoea = $('#correct-colorbox-sleepapnoea');  correctcolorboxsleepapnoea.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-sleepapnoea-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var padtest = $('#padtest'); var padtest1 = $('#padtest1');
      if (padx === true){
        padtest.css('color', 'rgb(209, 228, 236)');
        padtest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#padtest-comment').css('color', 'rgb(209, 228, 236)');
        $('#padtest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxpad = $('#colorbox-pad');  colorboxpad.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-pad-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxpad = $('#correct-colorbox-pad');  correctcolorboxpad.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-pad-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var fevertest = $('#fevertest'); var fevertest1 = $('#fevertest1');
      if (feverx === true){
        fevertest.css('color', 'rgb(209, 228, 236)');
        fevertest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#fevertest-comment').css('color', 'rgb(209, 228, 236)');
        $('#fevertest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxfever = $('#colorbox-fever');  colorboxfever.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-fever-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxfever = $('#correct-colorbox-fever');  correctcolorboxfever.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-fever-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var weighttest = $('#weighttest'); var weighttest1 = $('#weighttest1');
      if (weightx === true){
        weighttest.css('color', 'rgb(209, 228, 236)');
        weighttest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#weighttest-comment').css('color', 'rgb(209, 228, 236)');
        $('#weighttest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxweight = $('#colorbox-weight');  colorboxweight.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-weight-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxweight = $('#correct-colorbox-weight');  correctcolorboxweight.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-weight-before').css('background-color', 'rgb(197, 244, 197)');
      }

      var oedematest = $('#oedematest'); var oedematest1 = $('#oedematest1');
      if (oedemax === true){
        oedematest.css('color', 'rgb(209, 228, 236)');
        oedematest1.css('color', 'rgb(0, 0, 0)');
        generalhistorycounter++
        $('#oedematest-comment').css('color', 'rgb(209, 228, 236)');
        $('#oedematest-comment2').css('color', 'rgb(0, 0, 0)');
                    var colorboxoedema = $('#colorbox-oedema');  colorboxoedema.css('background-color', 'rgb(209, 228, 236)');
                  $('#colorbox-oedema-before').css('background-color', 'rgb(209, 228, 236)');
                    var correctcolorboxoedema = $('#correct-colorbox-oedema');  correctcolorboxoedema.css('background-color', 'rgb(197, 244, 197)');
                  $('#correct-colorbox-oedema-before').css('background-color', 'rgb(197, 244, 197)');
      }














//out of 23

     var generalhistorygrade = $('#generalhistorygrade');
     
     if (generalhistorycounter ===23){
     generalhistorygrade.text('Grade = A** Perfect!')}

    else if (generalhistorycounter ===22||generalhistorycounter ===21||generalhistorycounter ===20||generalhistorycounter ===19){
        generalhistorygrade.text('Grade = A*, Excellent work!')}

    else if (generalhistorycounter ===18||generalhistorycounter ===17||generalhistorycounter ===16||generalhistorycounter ===15){
       generalhistorygrade.text('Grade = A, Well done!')}

    
       else if (generalhistorycounter ===14||generalhistorycounter ===13||generalhistorycounter ===12||generalhistorycounter ===11){
        generalhistorygrade.text('Grade = B, Keep at it!')}

        else if (generalhistorycounter ===10||generalhistorycounter ===9||generalhistorycounter ===8||generalhistorycounter ===7){
          generalhistorygrade.text('Grade = C')}

          else if (generalhistorycounter ===6||generalhistorycounter ===5||generalhistorycounter ===4||generalhistorycounter ===3
            ||generalhistorycounter ===2||generalhistorycounter ===1||generalhistorycounter ===0){
            generalhistorygrade.text('Grade = D')}





    // Reset variables and update UI.
    noteContent = '';
    renderNotes(getAllNotes());
    noteTextarea.val('');
    //instructions.text('Press the Start Recognition button to ask another question. Then press Submit question.');
 









  
            }
 





/*--------------------Is for bringing up the 'listening icon/microphone icon once the user accepts the use of the mic-------------- */

  let micisworking = document.getElementById('micisworking');

  
recognition.onstart = function() {
  micisworking.style.backgroundColor = 'yellow';
  micisworking.style.display = 'unset';
  messagebeforeacceptingmic.style.display = 'none';



          
          if (counterforpresssubmitprompt==0){
            initialpromptforpresssubmit.style.display = 'unset';
            counterforpresssubmitprompt++;
          }
}

recognition.onend= function() {
  micisworking.style.display = 'none';
  //micisworking.style.backgroundColor = 'red';

        if (actionTriggered == false){
        pauseBtn.click(); 
        document.getElementById('silencemessage').style.display = 'unset';
        pauseBtn.style.display = "none"; 
      }



}; 








 


 



 


 


/*-----------------------------
      FOR THE PRESSING OF ENTER KEY!!!!!!
------------------------------*/
/*----
addEventListener("keypress", function(event) {
  if (event.key === "z") {
    event.preventDefault();
    document.getElementById("start-record-btn").click();
  }
});
--*/


//var input = document.getElementById("start-record-btn");
//input.
addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn").click();
  }
});

var input = document.getElementById("note-textarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn").click();
  }
});


/*-----------------------------
      App buttons and input
------------------------------*/










$('#start-record-btn').on('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();
});
 
 
//$('#pause-record-btn').on('click', function(e) {
  //recognition.stop();
  //instructions.text('Voice recognition paused.');
//});
 
// Sync the text inside the text area with the noteContent variable.
noteTextarea.on('input', function() {
  noteContent = $(this).val();
})
 







//async function stopRecording() {
$('#save-note-btn').on('click', function(e) {
}
  //this is where you put the "IF statements for the noteContent in"
)
  //}//end of while loop called counter
  

  
  


   









notesList.on('click', function(e) {
  e.preventDefault();
  var target = $(e.target);
 
  // Listen to the selected note.
  if(target.hasClass('listen-note')) {
    var content = target.closest('.note').find('.content').text();



    if(content.includes("name") && content.includes("age")) {
      readOutLoud("My name is Marc Jevner and I am 31")
      
    }



  
  
 











  }
  // Delete note.
  if(target.hasClass('delete-note')) {
    var dateTime = target.siblings('.date').text();  
    deleteNote(dateTime);
    target.closest('.note').remove();
  }

});
 
 
 
/*-----------------------------
      Speech Synthesis
------------------------------*/
 
function readOutLoud(message) {
var speech = new SpeechSynthesisUtterance();
 
  // Set the text and voice attributes.
speech.text = message;
speech.volume = 1;
speech.rate = 1;
speech.pitch = 0.8;
  
window.speechSynthesis.onvoiceschanged = function() {
  var voices = window.speechSynthesis.getVoices();
  speech.voice = voices.find(voice => voice.name === 'Microsoft David Desktop');//these don't work

  window.speechSynthesis.speak(speech);//don't delete this!!!!
};
}
 
 
 
/*-----------------------------
      Helper Functions
------------------------------*/
 
function renderNotes(notes) {
  var html = '';
  
  if(notes.length) {
    notes.forEach(function(note) {
      html+= `<li class="note">
                
                
                
        <p class="header"> </p>
        <p class="content">${note.content + "?"}
        <br>
        <span class="date"><font size="-2">${note.date}</font></span> 
        <a href="#" class="listen-note" title="Listen to Note">Listen to the patient's response...</a>
        <a href="#" class="delete-note" title="Delete">Delete Question</a>
            <hr>
          </p>
          
        </li>`;   
   
    });
  }
  else {
    html = '<li><p class="content">You don\'t have any notes yet.</p></li>';
  }
  notesList.html(html);
}
 
 
function saveNote(dateTime, content) {
  localStorage.setItem('note-' + dateTime, content);
}
 
 
function getAllNotes() {
  var notes = [];
  var key;
  for (var i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    console.log(i)
    console.log(key)
 
    if(key.substring(0,5) == 'note-') {
      notes.push({
        date: key.replace('note-',''),
        content: localStorage.getItem(localStorage.key(i))
      });
    }
  }
  console.log(notes)
  return notes;
}
 
 
function deleteNote(dateTime) {
  localStorage.removeItem('note-' + dateTime);
}










/*-----------------------------
        Examinations
 ------------------------------*/


 try {
  var SpeechRecognition_examinations = window.SpeechRecognition_examinations || window.webkitSpeechRecognition;
  var recognition_examinations = new SpeechRecognition_examinations();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 

var noteexaminations = '';
var examinationsContent = '';
var examinationstextarea = $('#examinations-textarea');

 
recognition_examinations.continuous = true;
var silenceTimer_examinations = null;
recognition_examinations.onresult = function(event) {
  if (silenceTimer_examinations) {
    clearTimeout(silenceTimer_examinations);
    silenceTimer_examinations = null;
  }

  var current_examinations = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript_examinations = event.results[current_examinations][0].transcript;
 
  var mobileRepeatBug_examinations = (current_examinations == 1 && transcript_examinations == event.results[0][0].transcript_examinations);
 
  if(!mobileRepeatBug_examinations) {
    noteexaminations += transcript_examinations;
    examinationstextarea.val(noteexaminations);
  }
  silenceTimer_examinations = setTimeout(function() {



  }, 1000);

};


$('#start-record-btn-for-examinations').on('click', function(e) {
  if (examinationsContent.length) {
    examinationsContent += ' ';
  }
  recognition_examinations.start();
  });

  examinationstextarea.on('input', function() {
  noteexaminations = $(this).val();
  })



$('#save-note-btn-for-examinations,#move-onto-questions-btn_examinations').on('click', function(e) {
recognition_examinations.stop();
document.getElementById('listeninggif').style.display = 'none';


  setTimeout(function() {

    var recordinginstructionsforexaminations = $('#recording-instructions-for-examinations');
    recognition_examinations.onspeechend = function() {
    recordinginstructionsforexaminations.text(noteexaminations);//IMPORTANT DO NOT DELETE!!!!
  }

  saveNote(new Date().toLocaleString(), noteexaminations);  

  var examinationsfinal = $('#examinationsfinal');
  examinationsfinal.text(noteexaminations);

}, 2000);


document.getElementById('examinations').style.display = 'none';
  document.getElementById('summary').style.display = 'unset';

  recognition_examinations.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "videos/summary.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition1.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-summary').style.display = 'unset';
  }

}
)









/*------enterkey*/

var input = document.getElementById("start-record-btn-for-examinations");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-examinations").click();
}
});

var input = document.getElementById("examinations-textarea");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-examinations").click();
}
});

//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
$('#examinations-textarea').focus();

$(document).on('keydown', function() {
  $('#examinations-textarea').focus();
});
});



/*-----------------------------
        Summary
 ------------------------------*/


 try {
  var SpeechRecognition1 = window.SpeechRecognition1 || window.webkitSpeechRecognition;
  var recognition1 = new SpeechRecognition1();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 
var noteSummary = '';
var summaryContent = '';
var summarytextarea = $('#summary-textarea');

  
recognition1.continuous = true;
var silenceTimer1 = null;
recognition1.onresult = function(event) {
  if (silenceTimer1) {
    clearTimeout(silenceTimer1);
    silenceTimer1 = null;
  }
 
  var current1 = event.resultIndex;
 
// Get a transcript of what was said.
var transcript1 = event.results[current1][0].transcript;
 
var mobileRepeatBug1 = (current1 == 1 && transcript1 == event.results[0][0].transcript1);

if(!mobileRepeatBug1) {
  noteSummary += transcript1;
  summarytextarea.val(noteSummary);
}
silenceTimer1 = setTimeout(function() {



  }, 1000);
};
 

$('#start-record-btn-for-summary').on('click', function(e) {
  if (summaryContent.length) {
    summaryContent += ' ';
  }
  recognition1.start();
  
  });

  summarytextarea.on('input', function() {
    noteSummary = $(this).val();
    })

$('#save-note-btn-for-summary,#move-onto-questions-btn_summary').on('click', function(e) {
  recognition1.stop();
  document.getElementById('listeninggif').style.display = 'none';
  

  setTimeout(function() {

    var recordinginstructionsforsummary = $('#recording-instructions-for-summary');
    recognition1.onspeechend = function() {
    recordinginstructionsforsummary.text(noteSummary);//IMPORTANT DO NOT DELETE!!!!
  }

  saveNote(new Date().toLocaleString(), noteSummary);
  

  var summaryfinal = $('#summaryfinal');
  summaryfinal.text(noteSummary.toLowerCase());
  summaryreview = noteSummary.toLowerCase();

  






  var summaryage =  $('#summaryage'); var summaryage1 = $('#summaryage1');
  if (summaryreview.includes("3")||summaryreview.includes("thirty")){
    summaryage.css('background-color', 'rgb(249, 221, 221)').css('color', 'rgb(249, 221, 221)'); 
    summaryage1.css('color', 'rgb(0, 0, 0)'); 
  }  


  var summarygender =  $('#summarygender'); var summarygender1 = $('#summarygender1');
  if (summaryreview.includes("male")||summaryreview.includes("man")||summaryreview.includes("bloke")){
    summarygender.text(""); summarygender1.text("● Gender");
    //summarygender.css('background-color', 'rgb(249, 221, 221)').css('color', 'rgb(249, 221, 221)'); 
    summarygender1.css('color', 'rgb(0, 0, 0)');
  }

  
}, 2000);


document.getElementById('summary').style.display = 'none';
  document.getElementById('differentials').style.display = 'unset';

  recognition1.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "videos/differential.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_differentials.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-differentials').style.display = 'unset';
  }


}
)






/*------enterkey*/

var input = document.getElementById("start-record-btn-for-summary");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-summary").click();
}
});

var input = document.getElementById("summary-textarea");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-summary").click();
}
});

//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
$('#summary-textarea').focus();

$(document).on('keydown', function() {
  $('#summary-textarea').focus();
});
});














/*-----------------------------
        Differentials
 ------------------------------*/


 try {
  var SpeechRecognition_differentials = window.SpeechRecognition_differentials || window.webkitSpeechRecognition;
  var recognition_differentials = new SpeechRecognition_differentials();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 

var noteDifferentials = '';
var differentialsContent = '';
var differentialstextarea = $('#differentials-textarea');

 
recognition_differentials.continuous = true;
var silenceTimer_differentials = null;
recognition_differentials.onresult = function(event) {
  if (silenceTimer_differentials) {
    clearTimeout(silenceTimer_differentials);
    silenceTimer_differentials = null;
  }

  var current_differentials = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript_differentials = event.results[current_differentials][0].transcript;
 
  var mobileRepeatBug_differentials = (current_differentials == 1 && transcript_differentials == event.results[0][0].transcript_differentials);
 
  if(!mobileRepeatBug_differentials) {
    noteDifferentials += transcript_differentials;
    differentialstextarea.val(noteDifferentials);
  }
  silenceTimer_differentials = setTimeout(function() {



  }, 1000);

};


$('#start-record-btn-for-differentials').on('click', function(e) {
  if (differentialsContent.length) {
    differentialsContent += ' ';
  }
  recognition_differentials.start();
  });

  differentialstextarea.on('input', function() {
  noteDifferentials = $(this).val();
  })



$('#save-note-btn-for-differentials,#move-onto-questions-btn_differentials').on('click', function(e) {
recognition_differentials.stop();
document.getElementById('listeninggif').style.display = 'none';


  setTimeout(function() {

    var recordinginstructionsfordifferentials = $('#recording-instructions-for-differentials');
    recognition_differentials.onspeechend = function() {
    recordinginstructionsfordifferentials.text(noteDifferentials);//IMPORTANT DO NOT DELETE!!!!
  }

  saveNote(new Date().toLocaleString(), noteDifferentials);
  

  var differentialsfinal = $('#differentialsfinal');
  differentialsfinal.text(noteDifferentials);

}, 2000);


 document.getElementById('differentials').style.display = 'none';
  document.getElementById('investigations').style.display = 'unset';

  recognition_differentials.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "videos/investigations.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_investigations.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-investigations').style.display = 'unset';
  }

}
)









/*------enterkey*/

var input = document.getElementById("start-record-btn-for-differentials");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-differentials").click();
}
});

var input = document.getElementById("differentials-textarea");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-differentials").click();
}
});

//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
$('#differentials-textarea').focus();

$(document).on('keydown', function() {
  $('#differentials-textarea').focus();
});
});









/*-----------------------------
        Investigations
 ------------------------------*/


 try {
  var SpeechRecognition_investigations = window.SpeechRecognition_investigations || window.webkitSpeechRecognition;
  var recognition_investigations = new SpeechRecognition_investigations();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 

var noteinvestigations = '';
var investigationsContent = '';
var investigationstextarea = $('#investigations-textarea');

 
recognition_investigations.continuous = true;
var silenceTimer_investigations = null;
recognition_investigations.onresult = function(event) {
  if (silenceTimer_investigations) {
    clearTimeout(silenceTimer_investigations);
    silenceTimer_investigations = null;
  }

  var current_investigations = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript_investigations = event.results[current_investigations][0].transcript;
 
  var mobileRepeatBug_investigations = (current_investigations == 1 && transcript_investigations == event.results[0][0].transcript_investigations);
 
  if(!mobileRepeatBug_investigations) {
    noteinvestigations += transcript_investigations;
    investigationstextarea.val(noteinvestigations);
  }
  silenceTimer_investigations = setTimeout(function() {



  }, 1000);

};


$('#start-record-btn-for-investigation').on('click', function(e) {
  if (investigationsContent.length) {
    investigationsContent += ' ';
  }
  recognition_investigations.start();
  });

  investigationstextarea.on('input', function() {
  noteinvestigations = $(this).val();
  })



$('#save-note-btn-for-investigations,#move-onto-questions-btn_investigations').on('click', function(e) {
recognition_investigations.stop();
document.getElementById('listeninggif').style.display = 'none';


  setTimeout(function() {

    var recordinginstructionsforinvestigations = $('#recording-instructions-for-investigations');
    recognition_investigations.onspeechend = function() {
    recordinginstructionsforinvestigations.text(noteinvestigations);//IMPORTANT DO NOT DELETE!!!!
  }
  saveNote(new Date().toLocaleString(), noteinvestigations);
  
  var investigationsfinal = $('#investigationsfinal');
  investigationsfinal.text(noteinvestigations);

}, 2000);


 document.getElementById('investigations').style.display = 'none';
  document.getElementById('riskfactors').style.display = 'unset';

  recognition_investigations.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "videos/riskfactors.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_riskfactors.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-riskfactors').style.display = 'unset';
  }

}
)









/*------enterkey*/

var input = document.getElementById("start-record-btn-for-investigations");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-investigations").click();
}
});

var input = document.getElementById("investigations-textarea");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-investigations").click();
}
});

//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
$('#investigations-textarea').focus();

$(document).on('keydown', function() {
  $('#investigations-textarea').focus();
});
});









/*-----------------------------
        Riskfactors
 ------------------------------*/


 try {
  var SpeechRecognition_riskfactors = window.SpeechRecognition_riskfactors || window.webkitSpeechRecognition;
  var recognition_riskfactors = new SpeechRecognition_riskfactors();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 

var noteriskfactors = '';
var riskfactorsContent = '';
var riskfactorstextarea = $('#riskfactors-textarea');

 
recognition_riskfactors.continuous = true;
var silenceTimer_riskfactors = null;
recognition_riskfactors.onresult = function(event) {
  if (silenceTimer_riskfactors) {
    clearTimeout(silenceTimer_riskfactors);
    silenceTimer_riskfactors = null;
  }

  var current_riskfactors = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript_riskfactors = event.results[current_riskfactors][0].transcript;
 
  var mobileRepeatBug_riskfactors = (current_riskfactors == 1 && transcript_riskfactors == event.results[0][0].transcript_riskfactors);
 
  if(!mobileRepeatBug_riskfactors) {
    noteriskfactors += transcript_riskfactors;
    riskfactorstextarea.val(noteriskfactors);
  }
  silenceTimer_riskfactors = setTimeout(function() {



  }, 1000);

};


$('#start-record-btn-for-riskfactors').on('click', function(e) {
  if (riskfactorsContent.length) {
    riskfactorsContent += ' ';
  }
  recognition_riskfactors.start();
  });

  riskfactorstextarea.on('input', function() {
  noteriskfactors = $(this).val();
  })

  
$('#save-note-btn-for-riskfactors,#move-onto-questions-btn_riskfactors').on('click', function(e) {
recognition_riskfactors.stop();
document.getElementById('listeninggif').style.display = 'none';


  setTimeout(function() {

    var recordinginstructionsforriskfactors = $('#recording-instructions-for-riskfactors');
    recognition_riskfactors.onspeechend = function() {
    recordinginstructionsforriskfactors.text(noteriskfactors);//IMPORTANT DO NOT DELETE!!!!
  }

  saveNote(new Date().toLocaleString(), noteriskfactors);
  

  var riskfactorsfinal = $('#riskfactorsfinal');
  riskfactorsfinal.text(noteriskfactors);

}, 2000);


 document.getElementById('riskfactors').style.display = 'none';
  document.getElementById('treatments').style.display = 'unset';

  recognition_riskfactors.stop(); document.getElementById('listeninggif').style.display = 'none';   document.getElementById('stop-consultation-btn').style.display = 'none';
  document.getElementById("mp4_src").src = "videos/management.mp4"; document.getElementById("myVideo").load();
  document.getElementById('myVideo').onended = function(e) {
  recognition_treatments.start();  document.getElementById('listeninggif').style.display = 'unset';   // document.getElementById('stop-consultation-btn').style.display = 'unset';
  document.getElementById('save-note-btn-for-treatments').style.display = 'unset';
  }

}
)













/*------enterkey*/

var input = document.getElementById("start-record-btn-for-riskfactors");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-riskfactors").click();
}
});

var input = document.getElementById("riskfactors-textarea");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-riskfactors").click();
}
});

//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
$('#riskfactors-textarea').focus();

$(document).on('keydown', function() {
  $('#riskfactors-textarea').focus();
});
});



 






/*-----------------------------
        Treatments
 ------------------------------*/


 try {
  var SpeechRecognition_treatments = window.SpeechRecognition_treatments || window.webkitSpeechRecognition;
  var recognition_treatments = new SpeechRecognition_treatments();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 

var notetreatments = '';
var treatmentsContent = '';
var treatmentstextarea = $('#treatments-textarea');

 
recognition_treatments.continuous = true;
var silenceTimer_treatments = null;
recognition_treatments.onresult = function(event) {
  if (silenceTimer_treatments) {
    clearTimeout(silenceTimer_treatments);
    silenceTimer_treatments = null;
  }

  var current_treatments = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript_treatments = event.results[current_treatments][0].transcript;
 
  var mobileRepeatBug_treatments = (current_treatments == 1 && transcript_treatments == event.results[0][0].transcript_treatments);
 
  if(!mobileRepeatBug_treatments) {
    notetreatments += transcript_treatments;
    treatmentstextarea.val(notetreatments);
  }
  silenceTimer_treatments = setTimeout(function() {



  }, 1000);

};


$('#start-record-btn-for-treatments').on('click', function(e) {
  if (treatmentsContent.length) {
    treatmentsContent += ' ';
  }
  recognition_treatments.start();
  });

  treatmentstextarea.on('input', function() {
  notetreatments = $(this).val();
  })



$('#save-note-btn-for-treatments').on('click', function(e) {
recognition_treatments.stop();
document.getElementById('listeninggif').style.display = 'none';

  setTimeout(function() {

    var recordinginstructionsfortreatments = $('#recording-instructions-for-treatments');
    recognition_treatments.onspeechend = function() {
    recordinginstructionsfortreatments.text(notetreatments);//IMPORTANT DO NOT DELETE!!!!
  }
  saveNote(new Date().toLocaleString(), notetreatments);  

  var treatmentsfinal = $('#treatmentsfinal');
  treatmentsfinal.text(notetreatments);

}, 2000);


document.getElementById('review-section').style.display = 'unset';
  document.getElementById('taking-history-section').style.display = 'none';
  document.getElementById('taking-history-section-part2').style.display = 'none';
  document.getElementById('move-onto-questions-btn').style.display = 'none';
  
  document.getElementById('examinations').style.display = 'none';
  document.getElementById('summary').style.display = 'none';
  document.getElementById('differentials').style.display = 'none';
  document.getElementById('investigations').style.display = 'none';
  document.getElementById('riskfactors').style.display = 'none';
  document.getElementById('treatments').style.display = 'none';


  document.getElementById('fullscreenvideobackground').style.display = 'unset';
  document.body.style.backgroundColor = 'rgb(209, 228, 236)';
  document.getElementById('logoduringconsultation').style.display = 'none';
  document.getElementById('myVideo').style.display = 'none';

}
)




/*------enterkey*/

var input = document.getElementById("start-record-btn-for-treatments");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-treatments").click();
}
});

var input = document.getElementById("treatments-textarea");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("save-note-btn-for-treatments").click();
}
});

//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
$('#treatments-textarea').focus();

$(document).on('keydown', function() {
  $('#treatments-textarea').focus();
});
});



















/*-----------------------------
        Fake Examinations

const txt1 = document.getElementById('examinations-textarea');
const btn1 = document.getElementById('save-examinations');
const out1 = document.getElementById('output1');

 function fun1() {
  if (txt1.value.includes('cardi')||txt1.value.includes('heart')){
    out1.innerHTML = txt1.value + ' is CORRECT';

  }
  else{
    out1.innerHTML = txt1.value + ' may be correct, however it is not in our model answers, however it does not necessarily mean your answer is incorrect as long as you are able to justify your reasoning. You may try again if you would like';

    var examinationsfinal = $('#examinationsfinal');
    examinationsfinal.text(txt1.value);
    
  }

 }//end of function called fun1

 btn1.addEventListener('click', fun1);

 //Enter key
 var input = document.getElementById("examinations-textarea");
 input.addEventListener("keypress", function(event) {
   if (event.key === "Enter") {
     event.preventDefault();
     document.getElementById("save-examinations").click();
   }
 });

 ------------------------------*/

/*-----------------------------
        Examination findings (as in what the patient has on examination)
 

 

 const examfindingsbtn = document.getElementById('examfindings-btn');
 const messageofexaminationfindings = document.getElementById('messageofexaminationfindings');

function examinationfindings(){
  messageofexaminationfindings.innerHTML = "let go";
}
examfindingsbtn.addEventListener('click', examinationfindings);


------------------------------*/






 
/*-----------------------------
        differentials
 


//DIFFERENTIAL 1

 const txt1s = document.getElementById('differential1-textarea');
 const btn1s = document.getElementById('save-d1');
 const out1s = document.getElementById('output10');
 
  function fun1s() {
   if (txt1s.value.includes('MI')||txt1s.value.includes('heart attack')){
     out1s.innerHTML = txt1s.value + ' is CORRECT';
 
   }
   else{
     out1s.innerHTML = txt1s.value + ' may be correct, however it is not in our model answers, however it does not necessarily mean your answer is incorrect as long as you are able to justify your reasoning. You may try again if you would like';
 
   }
 
  }//end of function called fun1s
 
  btn1s.addEventListener('click', fun1s);

------------------------------*/

/*----enterkey

var input = document.getElementById("differential1-textarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-d1").click();
  }
});




//DIFFERENTIAL 2
const txt2s = document.getElementById('differential2-textarea');
const btn2s = document.getElementById('save-d2');
const out2s = document.getElementById('output2');

 function fun2s() {
  if (txt2s.value.includes('MI')||txt2s.value.includes('heart attack')){
    out2s.innerHTML = txt2s.value + ' is CORRECT';

  }
  else{
    out2s.innerHTML = txt2s.value + ' may be correct, however it is not in our model answers, however it does not necessarily mean your answer is incorrect as long as you are able to justify your reasoning. You may try again if you would like';

  }

 }//end of function called fun1s

 btn2s.addEventListener('click', fun2s);
*/
/*----enterkey*

var input = document.getElementById("differential2-textarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-d2").click();
  }
});







 //DIFFERENTIAL 3
const txt3s = document.getElementById('differential3-textarea');
const btn3s = document.getElementById('save-d3');
const out3s = document.getElementById('output3');

 function fun3s() {
  if (txt3s.value.includes('MI')||txt3s.value.includes('heart attack')){
    out3s.innerHTML = txt3s.value + ' is CORRECT';

  }
  else{
    out3s.innerHTML = txt3s.value + ' may be correct, however it is not in our model answers, however it does not necessarily mean your answer is incorrect as long as you are able to justify your reasoning. You may try again if you would like';

  }
  var differentialsfinal = $('#differentialsfinal');
  differentialsfinal.text(txt1s.value + ', ' + txt2s.value + ', ' + txt3s.value);


 }//end of function called fun1s

 btn3s.addEventListener('click', fun3s);
/
/*----enterkey

var input = document.getElementById("differential3-textarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-d3").click();
  }
});

*/



/*-----------------------------
        Blood tests to do
 ------------------------------


 try {
  var SpeechRecognition2 = window.SpeechRecognition2 || window.webkitSpeechRecognition;
  var recognition2 = new SpeechRecognition2();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 


var noteSummary2 = '';
var summaryContent2 = '';
var summarytextarea2 = $('#summary-textareatwo');

 
 
recognition2.continuous = true;
 
recognition2.onresult = function(event) {
 
  var current2 = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript2 = event.results[current2][0].transcript;
 
  var mobileRepeatBug2 = (current2 == 1 && transcript2 == event.results[0][0].transcript2);
 
  if(!mobileRepeatBug2) {
    noteSummary2 += transcript2;
    summarytextarea2.val(noteSummary2);
  }
};
 

var recordinginstructionsforsummary2 = $('#recording-instructions-for-blood');

recognition2.onstart = function() {
  recordinginstructionsforsummary2.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');
}
 
recognition2.onspeechend = function() {
  recordinginstructionsforsummary2.text('DOUBLE CLICK THE SUBMIT BUTTON. (Once you get the response, press the Microphone button to ask another question)');
}
 
recognition2.onerror = function(event) {
  if(event.error == 'no-speech') {
    recordinginstructionsforsummary2.text('No speech was detected. Try again.');  
  };
}





$('#start-record-btn-for-blood').on('click', function(e) {
if (summaryContent2.length) {
  summaryContent2 += ' ';
}
recognition2.start();
});


summarytextarea2.on('input', function() {
noteSummary2 = $(this).val();
})


$('#save-note-btn-for-blood').on('click', function(e) {
recognition2.stop();
document.getElementById('listeninggif').style.display = 'none';

if(!noteSummary2.length) {
  recordinginstructionsforsummary2.text('Could not save empty note. Please add a message to your note.');
}
else {
  // Save note to localStorage.
  // The key is the dateTime with seconds, the value is the content of the note.
  
  saveNote(new Date().toLocaleString(), noteSummary2);
  recordinginstructionsforsummary2.text('You said: '+ noteSummary2);


  var bloodtestsfinal = $('#bloodtestsfinal');
  bloodtestsfinal.text(noteSummary2);

  //noteSummary = '';
  //renderNotes(getAllNotes());
  summarytextarea2.val('');
}
})
*/

/*------enterkey

var input = document.getElementById("start-record-btn-for-blood");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn-for-blood").click();
  }
});

var input = document.getElementById("summary-textareatwo");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn-for-blood").click();
  }
});


//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
  $('#summary-textareatwo').focus();

  $(document).on('keydown', function() {
    $('#summary-textareatwo').focus();
  });
});

*/




/*-----------------------------
        riskfactors
 ------------------------------*/


 try {
  var SpeechRecognition4 = window.SpeechRecognition4 || window.webkitSpeechRecognition;
  var recognition4 = new SpeechRecognition4();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 


var noteSummary4 = '';
var summaryContent4 = '';
var summarytextarea4 = $('#riskfactors-textarea');

 
 
recognition4.continuous = true;
 
recognition4.onresult = function(event) {
 
  var current4 = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript4 = event.results[current4][0].transcript;
 
  var mobileRepeatBug4 = (current4 == 1 && transcript4 == event.results[0][0].transcript4);
 
  if(!mobileRepeatBug4) {
    noteSummary4 += transcript4;
    summarytextarea4.val(noteSummary4);
  }
};
 

var recordinginstructionsforsummary4 = $('#recording-instructions-for-riskfactors');

recognition4.onstart = function() {
  recordinginstructionsforsummary4.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');
}
 
recognition4.onspeechend = function() {
  recordinginstructionsforsummary4.text('DOUBLE CLICK THE SUBMIT BUTTON. (Once you get the response, press the Microphone button to ask another question)');
}
 
recognition4.onerror = function(event) {
  if(event.error == 'no-speech') {
    recordinginstructionsforsummary4.text('No speech was detected. Try again.');  
  };
}





$('#start-record-btn-for-riskfactors').on('click', function(e) {
if (summaryContent4.length) {
  summaryContent4 += ' ';
}
recognition4.start();
});


summarytextarea4.on('input', function() {
noteSummary4 = $(this).val();
})


$('#save-note-btn-for-riskfactors').on('click', function(e) {
recognition4.stop();

if(!noteSummary4.length) {
  recordinginstructionsforsummary4.text('Could not save empty note. Please add a message to your note.');
}
else {
  // Save note to localStorage.
  // The key is the dateTime with seconds, the value is the content of the note.
  
  saveNote(new Date().toLocaleString(), noteSummary4);
  recordinginstructionsforsummary4.text('You said: '+ noteSummary4);


  var riskfactorsfinal = $('#riskfactorsfinal');
  riskfactorsfinal.text(noteSummary4);

  //noteSummary = '';
  //renderNotes(getAllNotes());
  summarytextarea4.val('');
}
})

/*------enterkey*/

var input = document.getElementById("start-record-btn-for-riskfactors");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn-for-riskfactors").click();
  }
});

var input = document.getElementById("riskfactors-textarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn-for-riskfactors").click();
  }
});


//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
  $('#riskfactors-textarea').focus();

  $(document).on('keydown', function() {
    $('#riskfactors-textarea').focus();
  });
});



/*-----------------------------
      Saving the riskfactors answers
------------------------------*/

/*

const txt4_blood = document.getElementById('riskfactors-textarea');
const btn4_blood = document.getElementById('save-note-btn-for-riskfactors');
const out4_blood = document.getElementById('recording-instructions-for-riskfactors');

function riskfactorss() {
if (txt4_blood.value.includes('cardi')||txt4_blood.value.includes('heart')){
  out4_blood.innerHTML = txt4_blood.value + ' is CORRECT';

}
else{
  out4_blood.innerHTML = txt4_blood.value + ' may be correct, however it is not in our model answers, however it does not necessarily mean your answer is incorrect as long as you are able to justify your reasoning. You may try again if you would like';

}

}//end of function called fun1

btn4_blood.addEventListener('click', riskfactorss); 

*/










/*-----------------------------
        treatments
 ------------------------------*/


 try {
  var SpeechRecognition5 = window.SpeechRecognition5 || window.webkitSpeechRecognition;
  var recognition5 = new SpeechRecognition5();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 


var noteSummary5 = '';
var summaryContent5 = '';
var summarytextarea5 = $('#treatments-textarea');

 
 
recognition5.continuous = true;
 
recognition5.onresult = function(event) {
 
  var current5 = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcript5 = event.results[current5][0].transcript;
 
  var mobileRepeatBug5 = (current5 == 1 && transcript5 == event.results[0][0].transcript5);
 
  if(!mobileRepeatBug5) {
    noteSummary5 += transcript5;
    summarytextarea5.val(noteSummary5);
  }
};
 

var recordinginstructionsforsummary5 = $('#recording-instructions-for-treatments');

recognition5.onstart = function() {
  recordinginstructionsforsummary5.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');
}
 
recognition5.onspeechend = function() {
  recordinginstructionsforsummary5.text('DOUBLE CLICK THE SUBMIT BUTTON. (Once you get the response, press the Microphone button to ask another question)');
}
 
recognition5.onerror = function(event) {
  if(event.error == 'no-speech') {
    recordinginstructionsforsummary5.text('No speech was detected. Try again.');  
  };
}





$('#start-record-btn-for-treatments').on('click', function(e) {
if (summaryContent5.length) {
  summaryContent5 += ' ';
}
recognition5.start();
});


summarytextarea5.on('input', function() {
noteSummary5 = $(this).val();
})


$('#save-note-btn-for-treatments').on('click', function(e) {
recognition5.stop();

if(!noteSummary5.length) {
  recordinginstructionsforsummary5.text('Could not save empty note. Please add a message to your note.');
}
else {
  // Save note to localStorage.
  // The key is the dateTime with seconds, the value is the content of the note.
  
  saveNote(new Date().toLocaleString(), noteSummary5);
  recordinginstructionsforsummary5.text('You said: '+ noteSummary5);


  var treatmentsfinal = $('#treatmentsfinal');
  treatmentsfinal.text(noteSummary5);

  //noteSummary = '';
  //renderNotes(getAllNotes());
  summarytextarea5.val('');
}
})

/*------enterkey*/

var input = document.getElementById("start-record-btn-for-treatments");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn-for-treatments").click();
  }
});

var input = document.getElementById("treatments-textarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("save-note-btn-for-treatments").click();
  }
});


//this following part makes you write down straight onto the textbox rather than having to click on the textbox.
$(function() {
  $('#treatments-textarea').focus();

  $(document).on('keydown', function() {
    $('#treatments-textarea').focus();
  });
});




/*-----------------------------
      Saving the treatments answers
------------------------------*/

/*

const txt5_blood = document.getElementById('treatments-textarea');
const btn5_blood = document.getElementById('save-note-btn-for-treatments');
const out5_blood = document.getElementById('recording-instructions-for-treatments');

function treatmentss() {
if (txt5_blood.value.includes('cardi')||txt5_blood.value.includes('heart')){
  out5_blood.innerHTML = txt5_blood.value + ' is CORRECT';

}
else{
  out5_blood.innerHTML = txt5_blood.value + ' may be correct, however it is not in our model answers, however it does not necessarily mean your answer is incorrect as long as you are able to justify your reasoning. You may try again if you would like';

}

}//end of function called fun1

btn5_blood.addEventListener('click', treatmentss); 

*/








/*-----------------------------
      FinalReview
------------------------------*/


/*const finalreviewbtn = document.getElementById('finalreview-btn');

function finalreviewss() {


var summaryfinal = $('#summaryfinal');
summaryfinal.text(noteSummary);


var differentialsfinal = $('#differentialsfinal');
differentialsfinal.text(txt1s.value + ', ' + txt2s.value + ', ' + txt3s.value);



var examinationsfinal = $('#examinationsfinal');
examinationsfinal.text(txt1.value);


var bloodtestsfinal = $('#bloodtestsfinal');
bloodtestsfinal.text(noteSummary2);


var otherinvestigationsfinal = $('#otherinvestigationsfinal');
otherinvestigationsfinal.text(noteSummary3);


var riskfactorsfinal = $('#riskfactorsfinal');
riskfactorsfinal.text(noteSummary4);


var treatmentsfinal = $('#treatmentsfinal');
treatmentsfinal.text(noteSummary5);
*/







var summarymodel = $('#summarymodel');
summarymodel.text('model');

var differentialsmodel = $('#differentialsmodel'); differentialsmodel.text('● Acute Coronary Syndrome (I.e. Myocardial infarction/heart attack)');
var differentialsmodel2 = $('#differentialsmodel2'); differentialsmodel2.text('● Costochondritis');
var differentialsmodel3 = $('#differentialsmodel3'); differentialsmodel3.text('● Unstable angina');
var differentialsmodel4 = $('#differentialsmodel4'); differentialsmodel4.text('● Anxiety attack/panic disorder');


var examinationsmodel = $('#examinationsmodel'); examinationsmodel.text('● Cardiac exam');
var examinationsmodel2 = $('#examinationsmodel2'); examinationsmodel2.text('● If the patient comes in acutely, you should do an ABCDE assessment');
var examinationsmodel3 = $('#examinationsmodel3'); examinationsmodel3.text('● If the patient is unconscious and not breathing, you should start CPR and chest compressions');
var examinationsmodel4 = $('#examinationsmodel4'); examinationsmodel4.text('● You could also perform a respiratory exam to rule out pneumonia andother potential causes of chest pain');



var bloodtestsmodel = $('#bloodtestsmodel'); bloodtestsmodel.text('● Full Blood Count');
var bloodtestsmodel2 = $('#bloodtestsmodel2'); bloodtestsmodel2.text('● Urea and Electrolytes');
var bloodtestsmodel3 = $('#bloodtestsmodel3'); bloodtestsmodel3.text('● Troponin');
var bloodtestsmodel4 = $('#bloodtestsmodel4'); bloodtestsmodel4.text('● Pro-BNP');
var bloodtestsmodel5 = $('#bloodtestsmodel5'); bloodtestsmodel5.text('● Thyroid Function Tests');




var otherinvestigationsmodel = $('#otherinvestigationsmodel'); otherinvestigationsmodel.text('● ECG');
var otherinvestigationsmodel2 = $('#otherinvestigationsmodel2'); otherinvestigationsmodel2.text('● Chest X-ray');
var otherinvestigationsmodel3 = $('#otherinvestigationsmodel3'); otherinvestigationsmodel3.text('● Check blood pressure, in both arms too (to rule out aortic disseaction)');
var otherinvestigationsmodel4 = $('#otherinvestigationsmodel4'); otherinvestigationsmodel4.text('● ECHO - To look for any complications of a heart attack such as heart failure');
var otherinvestigationsmodel5 = $('#otherinvestigationsmodel5'); otherinvestigationsmodel5.text('● Check the temperature - To rule out pneumonia and other infective causes');

var riskfactorsmodel = $('#riskfactorsmodel');
riskfactorsmodel.text('model');

var treatmentsmodel = $('#treatmentsmodel');
treatmentsmodel.text('model');



//}



//finalreviewbtn.addEventListener('click', finalreviewss);




/*-----------------------------------------------------
    trial = false;
    var test = $('#test');
     if (noteContent.includes("job")){
       //test.text('all of this works');
       trial = true;
     }
     
     if (trial === true){
       test.text('YES he asked about job');
     }
-------------------------------------------------------*/




/*-----------------------------
        Quiz
 ------------------------------*/


window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'If a patient with ST elevation MI was one and a half hours away from the nearest PCI center, what would you do?' : ['- Cardiovert them', '- Send them to PCI', '- Wait till the on call cardiologist comes along', 1],
        
        'What dose of aspirin should a patient be started on after having had an MI?' : ['- 200mg', '- 500mg' , '- 800mg', 2],
        
        'What is the first line investigation of angina? ' : ['- It is a clinical diagnosis', '- Chest X ray', '- ECG', 0],


      };
      
  function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable
  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;    
  }
  
  function loadAnswers(curr) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the current-variable
  // Every answer is added with an 'onclick'-function
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      
      answerArea.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);             
      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'Review:' + '<br />' + '<br />' +'Q1:'+ '<br />' +'If the patient is less than 1.5hrs away from PCI, then take them to PCI' + '<br />' + '<br />' + 
        'Q2:' + '<br />' + '800mg is the dose of aspirin you give after an MI' + '<br />' + '<br />' +
        'Q3:'+ '<br />' + 'The first line investigation for angina is a clinical diagnosis';
        answerArea.innerHTML = '';
      }
                              
    };
  }
  
  function addChecker(bool) {
  // This function adds a div element to the page
  // Used to see if it was correct or false
  
    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }
  
  
  // Start the quiz right away
  loadQuestion(current);
  loadAnswers(current);
  
};














const WWWEBItitles = document.querySelector('WWWEBItitles');
const evenbetterifgeneral = document.querySelector('evenbetterifgeneral');

WWWEBItitles.style.height = getComputedStyle(evenbetterifgeneral).height;









/*





//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Mark', //name of the chatbot
  talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused"; //the default message

  if (lastUserMessage === 'hi' || lastUserMessage =='hello') {
    const hi = ['hi','howdy','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }

  if (lastUserMessage === 'name') {
    botMessage = 'My name is ' + botName;
  }
}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}




/*-----------------------------
        treatments
 ------------------------------*/
/*

 try {
  var SpeechRecognitionz = window.SpeechRecognitionz || window.webkitSpeechRecognition;
  var recognitionz = new SpeechRecognitionz();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
 


var noteSummaryz = '';
var summaryContentz = '';
var summarytextareaz = $('#chatbox');

 
 
recognitionz.continuous = true;
 
recognitionz.onresult = function(event) {
 
  var currentz = event.resultIndex;
 
  // Get a transcript of what was said.
  var transcriptz = event.results[currentz][0].transcript;
 
  var mobileRepeatBugz = (currentz == 1 && transcriptz == event.results[0][0].transcriptz);
 
  if(!mobileRepeatBugz) {
    noteSummaryz += transcriptz;
    summarytextareaz.val(noteSummaryz);
  }
};
 

var recordinginstructionsforsummaryz = $('#recording-instructionsz');

recognitionz.onstart = function() {
  recordinginstructionsforsummaryz.text('Microphone is activated. Try speaking into the microphone. Then double click the Submit Question button.');
}
 
recognitionz.onspeechend = function() {
  recordinginstructionsforsummaryz.text('DOUBLE CLICK THE SUBMIT BUTTON. (Once you get the response, press the Microphone button to ask another question)');
}
 
recognitionz.onerror = function(event) {
  if(event.error == 'no-speech') {
    recordinginstructionsforsummaryz.text('No speech was detected. Try again.');  
  };
}





$('#start-record-btnz').on('click', function(e) {
if (summaryContentz.length) {
  summaryContentz += ' ';
}
recognitionz.start();
});


summarytextareaz.on('input', function() {
noteSummaryz = $(this).val();
})


$('#save-note-btnz').on('click', function(e) {
recognitionz.stop();

if(!noteSummaryz.length) {
  recordinginstructionsforsummaryz.text('Could not save empty note. Please add a message to your note.');
}
else {
  // Save note to localStorage.
  // The key is the dateTime with seconds, the value is the content of the note.
  
  saveNote(new Date().toLocaleString(), noteSummaryz);
  recordinginstructionsforsummaryz.text('You said: '+ noteSummaryz);

  //noteSummary = '';
  //renderNotes(getAllNotes());
  summarytextareaz.val('');
}
})


noteSummaryz = '';
renderNotes(getAllNotes());
noteSummaryz.val('');

*/
