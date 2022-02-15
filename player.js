class Player{
    constructor(){
        this.name = null
        this.distance = 0
        this.index = null
    }
    getCount(){
        var ref = database.ref("payerCount")
        ref.on("value", function(data){
            playerCount = data.val()

        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }
    update(){
        var refPlayer = "Players/player" + this.index
        database.ref(refPlayer).set({Name: this.name, distance: this.distance})
    }

    static getPlayerInfo(){
        var playerInfo = database.ref("Players")
        playerInfo.on("value", function(data){
            allPlayers = data.val()
        })

    }

}