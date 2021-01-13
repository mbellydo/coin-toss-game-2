$(function(){
    let userScore = 0;
    let pcScore = 0;

    let playerSelect = $('#player-selection')
    let computerSelect = $('#computer-selection')

    let playerScore = $('#player-score')
    let computerScore = $('#computer-score')

    let coin = $('#image')
    let winner = $('#winner')
    winner.css("color","blue")
    winner.css("font-weight","bold")

    $(".button").click(function(e){
        let userSelection = e.target.id

        playerSelect.html(userSelection)
        
        //llamar func getHeadOrTails y actualizar texto computer
        let computerSelection = getHeadOrTails()
        
        computerSelect.html(computerSelection)
        
        //llamar func getHeadOrTails para saber tirada
        let coinResult = getHeadOrTails()
        
        //actualizar imagen moneda en funcion de resultado
        /*let coinImage = "./"+coinResult+".png"
        if($("#coinImg").length){
            $("#coinImg").remove()
        }else{
            coin.append('<img src="'+coinImage+'" alt="heads" id="coinImg">')
        }*/
        
        //Flip coin
        var flipResult = coinResult
        $('#image').removeClass();
        setTimeout(function(){
            if(flipResult === "heads"){
                $('#image').addClass('heads');
            }else {
                $('#image').addClass('tails');
            }
        }, 100);
        
        //mirar si jugador ha acertado y actualizar puntuacion
        if (userSelection === coinResult) {
            playerSelect.css("color","green")
            userScore++
            playerScore.html(userScore)
        }else{
            playerSelect.css("color","red")
            userScore--
            playerScore.html(userScore)
        }
        
        //mirar si pc ha acertado y actualizar puntuacion
        if (computerSelection === coinResult) {
            computerSelect.css("color","green")
            pcScore++
            computerScore.html(pcScore)
        }else{
            computerSelect.css("color","red")
            pcScore--
            computerScore.html(pcScore)
        }
        
        //al llegar a 5 mostrar ganador
        if (userScore === 5) {
            winner.html("Player Wins!")
            $(".button").attr("disabled", true);
        } else if (pcScore === 5) {
            winner.html("Computer Wins!")
            $(".button").attr("disabled", true);
        }
    });

    function getHeadOrTails() {
        //calcular num aleatorio 0-1
        const result = Math.floor(Math.random() * 2)
        
        //si 0 = tails y si es 1 = heads (str)
        if(result === 0){
            return "tails"
        }else if (result === 1){
            return "heads"
        }
    }

    //----------------------------------------------------------

    /*$('#image').on('click', function(){
        
    });*/
});