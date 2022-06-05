class HaxBallExtendedHeadless {

    #room = null;

    #connected_players = [];

    #allowDU = true;

    constructor(room) {

        this.#room = room;

        /*ROOM PROPERTIES*/
        this.CollisionFlags = this.#room.CollisionFlags;

        /*TRADITIONAL EVENTS HANDLER*/
        this.#room.onPlayerJoin = (player) => {

            if (!this.#allowDU && this.#isDU(player)) {
                room.kickPlayer(player.id, "DU", false)
            } else {
                this.#connected_players.push(player);
            };


            this.onPlayerJoin && this.onPlayerJoin(player)
        };

        this.#room.onPlayerLeave = (playerLeft) => {

            this.#connected_players = [...this.#connected_players].filter(player => player.id !== playerLeft.id)
            this.onPlayerLeave && this.onPlayerLeave(player)
        };
        this.#room.onTeamVictory = (scores) => this.onTeamVictory && this.onTeamVictory(scores);
        this.#room.onPlayerChat = (player, message) => this.onPlayerChat && this.onPlayerChat(player, message);
        this.#room.onPlayerBallKick = (player) => this.onPlayerBallKick && this.onPlayerBallKick(player);
        this.#room.onTeamGoal = (team) => this.onTeamGoal && this.onTeamGoal(team);
        this.#room.onGameStart = (byPlayer) => this.onGameStart && this.onGameStart(byPlayer);
        this.#room.onGameStop = (byPlayer) => this.onGameStop && this.onGameStop(byPlayer);
        this.#room.onPlayerAdminChange = (changedPlayer, byPlayer) => this.onPlayerAdminChange && this.onPlayerAdminChange(changedPlayer, byPlayer)
        this.#room.onPlayerTeamChange = (changedPlayer, byPlayer) => this.onPlayerTeamChange && this.onPlayerTeamChange(changedPlayer, byPlayer);
        this.#room.onPlayerKicked = (kickedPlayer, reason, ban, byPlayer) => this.onPlayerKicked && this.onPlayerKicked(kickedPlayer, reason, ban, byPlayer);
        this.#room.onGameTick = () => this.onGameTick && this.onGameTick();
        this.#room.onGamePause = (byPlayer) => this.onGamePause && this.onGamePause(byPlayer);
        this.#room.onGameUnpause = (byPlayer) => this.onGameUnpause && this.onGameUnpause(byPlayer);
        this.#room.onPositionsReset = () => this.onPositionsReset && this.onPositionsReset();
        this.#room.onPlayerActivity = (player) => this.onPlayerActivity && this.onPlayerActivity(player);
        this.#room.onStadiumChange = (newStadiumName, byPlayer) => this.onStadiumChange && this.onStadiumChange(newStadiumName, byPlayer);
        this.#room.onRoomLink = (url) => this.onRoomLink && onRoomLink(url);
        this.#room.onKickRateLimitSet = (min, rate, burst, byPlayer) => this.onKickRateLimitSet && this.onKickRateLimitSet(min, rate, burst, byPlayer);
    }

    /*TRADITIONAL ROOM METHODS*/
    sendChat = (message, targetId) => this.#room.sendChat(message, targetId);
    setPlayerAdmin = (playerID, admin) => this.#room.setPlayerAdmin(playerID, admin);
    setPlayerTeam = (playerID, team) => this.#room.setPlayerTeam(playerID, team);
    kickPlayer = (playerID, reason, ban) => this.#room.kickPlayer(playerID, reason, ban);
    clearBan = (playerId) => this.#room.clearBan(playerId);
    clearBans = () => this.#room.clearBans();
    setScoreLimit = (limit) => this.#room.setScoreLimit(limit);
    setTimeLimit = (limitInMinutes) => this.#room.setTimeLimit(limitInMinutes);
    setCustomStadium = (stadiumFileContents) => this.#room.setCustomStadium(stadiumFileContents);
    setDefaultStadium = (stadiumName) => this.#room.setDefaultStadium(stadiumName);
    setTeamsLock = (locked) => this.#room.setTeamsLock(locked);
    setTeamColors = (team, angle, textColor, colors) => this.#room.setTeamColors(team, angle, textColor, colors);
    startGame = () => this.#room.startGame();
    stopGame = () => this.#room.stopGame();
    pauseGame = (pauseState) => this.#room.pauseGame(pauseState);
    getPlayer = (playerId) => this.#room.getPlayer(playerId);
    getPlayerList = () => this.#room.getPlayerList();
    getScores = () => this.#room.getScores();
    getBallPosition = () => this.#room.getBallPosition();
    startRecording = () => this.#room.startRecording();
    stopRecording = () => this.#room.stopRecording();
    setPassword = (pass) => this.#room.setPassword(pass);
    setRequireRecaptcha = (required) => this.#room.setRequireRecaptcha(required);
    reorderPlayers = (playerIdList, moveToTop) => this.#room.reorderPlayers(playerIdList, moveToTop);
    sendAnnouncement = (msg, targetId, color, style, sound) => this.#room.sendAnnouncement(msg, targetId, color, style, sound)
    setKickRateLimit = (min, rate, burst) => this.#room.setKickRateLimit(min, rate, burst);
    setPlayerAvatar = (playerId, avatar) => this.#room.setPlayerAvatar(playerId, avatar);
    setDiscProperties = (discIndex, properties) => this.#room.setDiscProperties(discIndex, properties);
    getDiscProperties = (discIndex) => this.#room.getDiscProperties(discIndex);
    setPlayerDiscProperties = (playerId, properties) => this.#room.setPlayerDiscProperties(playerId, properties);
    getPlayerDiscProperties = (playerId) => this.#room.getPlayerDiscProperties(playerId);
    getDiscCount = () => this.#room.getDiscCount();


    /*------------------------------------EXTENDED HEADLESS PRIVATE METHODS----------------------------------------------*/

    #isValidTeam = (team) => [0, 1, 2].includes(team);

    #getTeam = (team) => {
        if (!this.#isValidTeam(team)) throw new Error("team must be 0, 1 or 2");
        const playerList = this.#room.getPlayerList();
        return playerList.filter(player => player.team === team);
    };

    #isDU = (player) => {
        return this.#connected_players.some(cP => cP.name === player.name || cP.auth === player.auth || cP.conn === player.conn);
    };

    /*----------------------------------------EXTENDED HEADLESS PUBLIC METHODS---------------------------------------------*/

    getSpecTeam = () => this.#getTeam(0);



    getRedTeam = () => this.#getTeam(1);



    getBlueTeam = () => this.#getTeam(2);



    moveNextSpecToTeam = (team) => {
        if (!this.#isValidTeam(team)) throw new Error("team must be 0, 1 or 2");

        const nextSpec = this.getSpecTeam()[0];

        if (nextSpec) this.#room.setPlayerTeam(nextSpec.id, team);

    };



    moveNextNSpecsToTeam = (team, N) => {
        if (!this.#isValidTeam(team)) throw new Error("team must be 0, 1 or 2");

        const nextNSpecs = this.getSpecTeam().slice(0, N);

        nextNSpecs.forEach(spec => this.#room.setPlayerTeam(spec.id, team));

    };



    moveAllSpecsToTeam = (team) => {

        if (!this.#isValidTeam(team)) throw new Error("team must be 0, 1 or 2");

        this.getSpecTeam().forEach(spec => this.#room.setPlayerTeam(spec.id, team));
    };



    moveAllRedTeamToSpecs = () => this.getRedTeam().forEach(redPlayer => this.#room.setPlayerTeam(redPlayer.id, 0));



    moveAllBlueTeamToSpecs = () => this.getBlueTeam().forEach(bluePlayer => this.#room.setPlayerTeam(bluePlayer.id, 0));



    moveAllRedTeamToBlueTeam = () => this.getRedTeam().forEach(redPlayer => this.#room.setPlayerTeam(redPlayer.id, 2));



    moveAllBlueTeamToRedTeam = () => this.getBlueTeam().forEach(bluePlayer => this.#room.setPlayerTeam(bluePlayer.id, 1));



    moveNRedTeamPlayersToSpecs = (N) => {

        const slicedRedTeam = this.getRedTeam().slice(0, N);

        slicedRedTeam.forEach(redPlayer => this.#room.setPlayerTeam(redPlayer.id, 0));
    };



    moveNBlueTeamPlayersToSpecs = (N) => {

        const slicedBlueTeam = this.getBlueTeam().slice(0, N);

        slicedBlueTeam.forEach(bluePlayer => this.#room.setPlayerTeam(bluePlayer.id, 0));
    };



    getPlayersNumber = () => this.#room.getPlayerList().length;



    hasAdmin = () => this.#room.getPlayerList.some(player => player.admin === true);



    hasNotAdmin = () => !this.hasAdmin();



    chooseRandomAdmin = () => {

        const players = this.#room.getPlayerList();
        const randomInteger = Math.floor(Math.random() * players.length);

        this.#room.setPlayerAdmin(players[randomInteger].id, true);
    };



    removeAllAdmins = () => {

        this.#room.getPlayerList().forEach(player => {
            if (player.admin) this.#room.setPlayerAdmin(player.id, false);
        });
    };



    setAntiDU = (state) => this.#allowDU = Boolean(!state);



    getScoreTime = (unit = "seconds") => {

        const ALLOWED_UNITS = ["milliseconds,seconds,minutes"];

        if (ALLOWED_UNITS.includes(unit)) throw new Error(`only allowed units ${ALLOWED_UNITS}`);

        const dividedBy = {
            "milliseconds": 1 / 1000,
            "seconds": 1,
            "minutes": 60,
        };

        const currentTime = this.#room.getScores().time;

        if (!currentTime) return -1;

        return Math.floor(currentTime / dividedBy[unit]);
    };



    reset = () => {
        this.#room.stopGame();
        this.#room.startGame();
    };



    resetWithStadiumChange = (stadiumFileContents) => {
        this.#room.stopGame();
        this.#room.setCustomStadium(stadiumFileContents);
        this.#room.startGame();
    };

    

    resetWithLimitsChange = (scoreLimit, timeLimit) => {
        this.#room.stopGame();
        this.#room.setScoreLimit(scoreLimit);
        this.#room.setTimeLimit(timeLimit);
        this.#room.startGame();
    };

};


