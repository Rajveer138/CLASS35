class Player {
    constructor(){

    }
    getCount() {
        var playerCountref = dataBase.ref("playerCount");
        playerCountref.on("value",function(data) {
            playerCount = data.val();
        })
    }
    updateCount(count){
       dataBase.ref("/").update({
           playerCount:count})
    }
    update(name) {
        var playerIndex="player"+playeCount;
        database.ref(playerIndex).set({name:name});
    }
}