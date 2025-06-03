const input=document.querySelector('#input');

const result=document.querySelector('.result');

const startGame=document.querySelector('#start-game');

const submitbtn=document.querySelector('#submit');

const yourGuesses=document.querySelector('#your-guesses');

const AllyourGuesses=[];

let randomNuber= Math.round(Math.random() *100);

const form=document.querySelector('form');

// function newDoc() {
//     window.location.assign("http://127.0.0.1:5500/bird2_files/js/project1/guessTheNumber/index.html")
    
//   }
function a(){
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const inputValue= parseInt(input.value);
        
        if(inputValue < randomNuber){
            result.innerText='too low';
        }
        else if(inputValue > randomNuber){
            result.innerText='too high';
        }
        else{
            result.innerText='You got it contrate!';
            startGame.disabled=false;
            submitbtn.disabled=true;
          
    
        }
         //console.log('submited')
         
        form.reset()
        AllyourGuesses.push(inputValue);
        yourGuesses.innerText='Your Guesses:'+AllyourGuesses.join(',');

    })
    
    startGame.addEventListener('click',()=>{

        result.innerText='';
        yourGuesses.innerText=''
        AllyourGuesses.innerText='';
        startGame.disabled=true;
        submitbtn.disabled=false;

 randomNuber= Math.round(Math.random() *100);
    
    
    })
    
}
a()
