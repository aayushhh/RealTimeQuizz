
var sQuestionArray;
var counter = -1;

var socket = io();
socket.on('msg', function (data) {
    sQuestionArray = data;
    counter++;
    displayQuestion(counter);
});


function nextPage() {
    if (counter < 0 || counter >= sQuestionArray.length) {
        return;
    }
    
    counter++;
    displayQuestion(counter);
}

function displayQuestion(counter) {
    var jQuestion = sQuestionArray[counter].question;
    var jOption1 = sQuestionArray[counter].option1;
    var jOption2 = sQuestionArray[counter].option2;
    var jOption3 = sQuestionArray[counter].option3;

    const eQuestion = document.createElement('div');
    eQuestion.innerText = jQuestion;
    if (counter == 0) {
        document.getElementById("question").appendChild(eQuestion);

    }
    else {
        var item = document.getElementById("question").childNodes[0];
        item.replaceChild(eQuestion, item.childNodes[0]);
    }

    const eOption1 = document.createElement('div');
    eOption1.innerText = jOption1;
    if (counter == 0) {
        document.getElementById("option1").appendChild(eOption1);

    }
    else {
        var item = document.getElementById("option1").childNodes[0];
        item.replaceChild(eOption1, item.childNodes[0]);
    }



    const eOption2 = document.createElement('div');
    eOption2.innerText = jOption2;
    if (counter == 0) {
        document.getElementById("option2").appendChild(eOption2);

    }
    else {
        var item = document.getElementById("option2").childNodes[0];
        item.replaceChild(eOption2, item.childNodes[0]);
    }



    const eOption3 = document.createElement('div');
    eOption3.innerText = jOption3;

    if (counter == 0) {
        document.getElementById("option3").appendChild(eOption3);

    }
    else {
        var item = document.getElementById("option3").childNodes[0];
        item.replaceChild(eOption3, item.childNodes[0]);
    }
    // docOption3.appendChild(eOption3);



}
