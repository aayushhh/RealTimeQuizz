var questionArray = [];

// function for adding questions into an array
function addQuestion() {
    addQuestiontoArray();
    console.log(questionArray);
    $('#form').trigger("reset");
}
function displaydata() {
    addQuestiontoArray();
    $('#form').hide();
    document.body.innerHTML = questionArray;
    sendQuestionToServer();
}
// function to convert the array question set into a json file
function addQuestiontoArray() {
    var questionObject = {};
    var $inputs = $('#form :input');
    $inputs.each(function () {

        if (this.name != "") {
            questionObject[this.name] = $(this).val();
        }
    });
    questionArray.push(questionObject)
}
function sendQuestionToServer() {
    // define socket.io nd recieve anbd send the messages
    let socket = io();

    console.log()
    socket.emit('Faculty_Ques', questionArray)
    socket.on('msg', questionArray => {
        console.log(questionArray);
    });
}





    