//0 < x <= 1/3  rock
      //1/3 < x <= 2/3  paper
      //2/3 < x <= 1 scissors

      let computerMove = '';
      let result ='';
      let choice ='';
      let randomNR = 0;

      let score=JSON.parse(localStorage.getItem('score')) || {
        wins : 0,
        losses : 0,
        ties : 0
      };

      function showScore(){
        const messageResults =document.querySelector('.js-results');

        messageResults.innerText =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }
      
      showScore();


      function pickComputerMove(){
        let compMove = '';
        const randomNR = Math.random();
        if (0 < randomNR && randomNR<=1/3){
          compMove = 'ROCK';
        }else if(1/3 < randomNR && randomNR<=2/3){
          compMove = 'PAPER';
        }else{
          compMove = 'SCISSORS';
        }
        return compMove;
      }

      

      function gameInfos(choice, computerMove, result){
        const messageWhoWon =document.querySelector('.js-who-won');
        const messageWhatChosen =document.querySelector('.js-what-chosen');
        
        
        if(result==='TIE'){
          messageWhoWon.innerText = `${result}.`;
        }else{
          messageWhoWon.innerText = `You ${result}.`;
        }

        messageWhatChosen.innerHTML =`You
         <img src="images/${choice}-emoji.png" class="emoji-display">
        <img src="images/${computerMove}-emoji.png" class="emoji-display"> 
        computer`;

        showScore();

      }

      function playGame(choice,computerMove = pickComputerMove()){
        if (computerMove === choice){
          result = 'TIE';
        }else if(computerMove === 'PAPER' && choice === "ROCK" || computerMove === 'SCISSORS' && choice === "PAPER" ||computerMove === 'ROCK' && choice === "SCISSORS"){
          result = 'LOSE';
        }else{
          result = 'WIN';
        }
        
        if (result==='WIN'){
          score.wins+=1;
        }else if(result==='LOSE'){
          score.losses+=1;
        }else if(result==='TIE'){
          score.ties+=1;
        }
        localStorage.setItem('score', JSON.stringify(score));
        

        gameInfos(choice, computerMove, result);
      }


      function reset(){
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        showScore();
      }

      