class Form{
    constructor(){
        this.input = createInput("Digite o nome")
        this.button = createButton("Começar")
        this.message = createElement("h2")
    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.message.hide()
    }

    display(){
        var title = createElement("h2")
        title.html("Corrida")
        title.position(130,0)
        this.input.position(130,160)
        this.button.position(250,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount += 1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.message.html("Bem Vindo " + player.name)
            this.message.position(130,160)
        })
    }



}