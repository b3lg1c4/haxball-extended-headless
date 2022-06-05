const room = new HaxBallExtendedHeadless(
    HBInit({
        roomName: "My room",
        maxPlayers: 16,
        noPlayer: true, // Remove host player (recommended!)
        token: "thr1.AAAAAGKc7wKyOjyDfyJTtQ.Qdqvngu9pas",
        public:false,
    })
);

room.onPlayerJoin = (p) => {
    
}

room.onPlayerChat = (p,m) => {console.log("se ejecutó")};





