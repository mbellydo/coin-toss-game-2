$(function(){
    /*let heads = 1;
    let tails = 0;

    let headsBtn = $('#heads').val(1)
    let tailsBtn = $('#tails').val(0)*/

    let userScore = 0;
    let pcScore = 0;

    let playerSelect = $('#player-selection')
    let computerSelect = $('#computer-selection')

    let playerScore = $('#player-score')
    let computerScore = $('#computer-score')

    let coin = $('#image')

    $(".button").click(function(e){
        let userSelection = e.target.id

        playerSelect.html(userSelection)
        
        //llamar func getHeadOrTails y actualizar texto computer
        let computerSelection = getHeadOrTails()
        
        computerSelect.html(computerSelection)
        
        //llamar func getHeadOrTails para saber tirada
        let coinResult = getHeadOrTails()
        
        //actualizar imagen moneda en funcion de resultado
        let coinImage = "./"+coinResult+".png"
        if($("#coinImg").length){
            $("#coinImg").remove()
        }else{
            coin.append('<img src="'+coinImage+'" alt="heads" id="coinImg">')
        }
        
        //mirar si jugador ha acertado y actualizar puntuacion
        if (userSelection === coinResult) {
            playerSelect.css("color","green")
            userScore+1
            playerScore.text(userScore)
        }else{
            playerSelect.css("color","red")
            userScore-1
            playerScore.text(userScore)
        }
        
        //mirar si pc ha acertado y actualizar puntuacion
        if (computerSelection === coinResult) {
            computerSelect.css("color","green")
            pcScore+1
            computerScore.text(pcScore)
        }else{
            computerSelect.css("color","red")
            pcScore-1
            computerScore.text(pcScore)
        }
        
        //al llegar a 5 mostrar ganador
        if (userScore === 5) {
            $('#winner').html("Player Wins!")
        } else if (pcScore === 5) {
            $('#winner').html("Computer Wins!")
        }
    });

    function getHeadOrTails() {
        //calcular num aleatorio 0-1
        const result = Math.floor(Math.random() * 2)
        //console.log(result)
        //si 0 = tails y si es 1 = heads (str)
        if(result === 0){
            return "tails"
        }else if (result === 1){
            return "heads"
        }
    }
});