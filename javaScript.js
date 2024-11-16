
var count = 0;


function playBtn() 
{
    var audio = document.getElementById('bgAudio');
    audio.pause();
    var audio2 = new Audio('img/start.wav');  
    audio2.play();

    window.open('gamePage1.html');
    document.getElementById('name').innerHTML = document.getElementById('firstName').value;

}
   
function check(result,correct,id1)
{
    if(result == correct){
            document.getElementById(id1).style.backgroundColor ='#48ff00' ;
            count +=2;
            var audio = new Audio('img/correct-answer.wav'); 
            audio.play();
        }
        else{
            document.getElementById(id1).style.backgroundColor ='red';
            var audio = new Audio('img/wrong-answer.wav'); 
            audio.play();
        }
}

function nextBtn(){
    
    if(count < 5){

        var audio = new Audio('img/lose.wav');
        audio.play();
        window.confirm("Your Correct Answer Points is : "+ count);

    }else if(count >= 5 || count < 7){
        window.confirm("Congrats \n Your Correct Answer Points is : "+ count);
        var audio3 = new Audio('img/audience-clapping.wav');
        audio3.play();

        window.open('intermediate.html');


    }else
    {
        window.confirm("Congrats \n Your Correct Answer Points is : "+ count);
        var audio3 = new Audio('img/audience-clapping.wav');
        audio3.play();
        window.open('hard.html');
        close();

    }

}
function nextBtninter(){
    
    if(count < 10){

        var audio = new Audio('img/lose.wav');
        audio.play();
        window.confirm("Your Correct Answer Point is : "+ count);

    }else
    {
        window.confirm("Congrats \n Your Correct Answer Point is : "+ count);
        var audio4 = new Audio('img/audience-clapping.wav');
        audio4.play();
        var audio5 = document.getElementById('bgAudioInter');
        audio5.pause();
        window.open('hard.html');
        close();
    }

}
function nextBtnhard(){
    if(count < 20){

        var audio7= new Audio('img/lose.wav');
        audio7.play();
        window.confirm("Your Correct Answer Points is : "+ count);
        var audio = document.getElementById('bgAudioHard');
        audio.pause();

        if(window.confirm("Game Over\n you want to try again ?"))
            window.open('gamePage1.html');
            
    }else
    {
        window.confirm("Congrats \n Your Correct Answer Points is : "+ count);
        var audio4 = new Audio('img/audience-clapping.wav');
        audio4.play();
       
        window.open('index.html');
}       close();
}