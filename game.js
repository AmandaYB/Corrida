class Game{
    constructor(){}
    getState(){
        var ref = database.ref("gameState")
        ref.on("value", function(data){
            gameState = data.val()
        })
    }

    update(state){
        datebase.ref("/").update({
            gameState:state
        })
    }
     start(){
         if (gameState == 0){
             player = new Player()
             player.getCount()
             form = new Form()
             form.display()
         }
     }
     play(){
         form.hide()
         textSize(22)
         text("Começo do Jogo", 200, 100)
         Player.getPlayerInfo()
         if (allPlayers !== undefined){
             var position = 150
             for(var P in allPlayers){
                 if (P == "player" + player.index){
                     fill("red")
                 }
                 else{
                     fill("black")
                 }
                 position += 20
                 textSize(15)
                 text(allPlayers[P].name + ": " + allPlayers[P].distance, 120, position)
             }
         }

         if (keyDown("UP_ARROW") && player.index !== null){
             player.distance += 4
             player.update() 
         }
     }
}