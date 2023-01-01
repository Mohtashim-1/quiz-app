function check(){
    var score = 0;
    var right_answer_1 =  document.getElementById("q1_a1");
    var q1_a2 =  document.getElementById("q1_a2");
    var q1_a3 =  document.getElementById("q1_a3");
    var q1_a4 =  document.getElementById("q1_a4");
    if (right_answer_1.checked == true){
        alert("q1 answer right");
    }
    else{
        alert("q1 answer wrong");
    }
}