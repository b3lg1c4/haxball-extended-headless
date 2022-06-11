
# HaxBall Extended Headless

This is an extended version of the already developed [HaxBall Headless Host](https://github.com/haxball/haxball-issues/wiki/Headless-Host) which includes new methods and features to make our proyects easy to write and understand.



## Important

To see the already implemented features, please see [HaxBall Headless Host](https://github.com/haxball/haxball-issues/wiki/Headless-Host). This is just an extension of it, so that means that this proyect works on the top of the original HaxBall Headless Host.



## Get Started

To initialize our room, we will generate a new instance of `HaxBallExtendedHeadless` and provide its constructor the traditional `HBInit(ourConfig)` function:

```javascript
const room = new HaxBallExtendedHeadless(HBInit({
	roomName: "My room",
	maxPlayers: 16,
	noPlayer: true // Remove host player (recommended!)
}));
```
Now we can start using it. It works exactly the same as the simple HaxBall Headless Host, but with new methods described below. 



# API
## RoomObject

<h3 style="font-size: 1.25em"><code style="font-size:inherit">getSpectTeam</code></h3>
<p>
<code style="margin:0">getSpectTeam() : PlayerObject[]</code>
</p>

Returns the current list of the players in Spect Team.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">getRedTeam</code></h3>
<p>
<code style="margin:0">getRedTeam() : PlayerObject[]</code>
</p>

Returns the current list of the players in Red Team.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">getBlueTeam</code></h3>
<p>
<code style="margin:0">getBlueTeam() : PlayerObject[]</code>
</p>

Returns the current list of the players in Blue Team.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveNextSpectToTeam</code></h3>
<p>
<code style="margin:0">moveNextSpectToTeam(team : int) : void</code>
</p>

Moves the first player from the current Spect Team list.  If there is no spect to move, the method will do nothing.

`team` possible values are `1` for Red Team , `2` for Blue Team and obviously you can use `0` for Spect Team but it does not make sense since the player is already on it.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveNextNSpectsToTeam</code></h3>
<p>
<code style="margin:0">moveNextNSpectsToTeam(team : int, N : int) : void</code>
</p>

Moves the next `N` players from the current Spect Team list. If there is no spect to move, the method will do nothing.

`team` possible values are `1` for Red Team , `2` for Blue Team and obviously you can use `0` for Spect Team but it does not make sense since the player is already on it.

```javascript
//Doing this
room.moveNextSpectToTeam(team);
//is the same as
room.moveNextNSpectsToTeam(team,1);
```


<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveAllSpectsToTeam</code></h3>
<p>
<code style="margin:0">moveAllSpectsToTeam(team : int) : void</code>
</p>

Moves all the players from the current Spect Team list. If there is no spect to move, the method will do nothing.

`team` possible values are `1` for Red Team , `2` for Blue Team and obviously you can use `0` for Spect Team but it does not make sense since the player is already on it.

```javascript
//Doing this
room.moveNextNSpectsToTeam(team , room.getSpectTeam().length);
//is the same as
room.moveAllSpectsToTeam(team);
```


<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveAllRedTeamToSpects</code></h3>
<p>
<code style="margin:0">moveAllRedTeamToSpects() : void</code>
</p>

Moves all the Red Team to Spect Team. If there is no red player to move, the method will do nothing.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveAllBlueTeamToSpects</code></h3>
<p>
<code style="margin:0">moveAllBlueTeamToSpects() : void</code>
</p>

Moves all the Blue Team to Spect Team. If there is no blue player to move, the method will do nothing.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveAllRedTeamToBlueTeam</code></h3>
<p>
<code style="margin:0">moveAllRedTeamToBlueTeam() : void</code>
</p>

Moves all the Red Team to Blue Team. If there is no red player to move, the method will do nothing.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveAllBlueTeamToRedTeam</code></h3>
<p>
<code style="margin:0">moveAllBlueTeamToRedTeam() : void</code>
</p>

Moves all the Blue Team to Red Team. If there is no blue player to move, the method will do nothing.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveNRedTeamPlayersToSpects</code></h3>
<p>
<code style="margin:0">moveNRedTeamPlayersToSpects(N : int) : void</code>
</p>

Moves the next `N` players from the current Red Team list to Spect Team. If there is no red player to move, the method will do nothing.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveNBlueTeamPlayersToSpects</code></h3>
<p>
<code style="margin:0">moveNBlueTeamPlayersToSpects(N : int) : void</code>
</p>

Moves the next `N` players from the current Blue Team list to Spect Team. If there is no blue player to move, the method will do nothing.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">getPlayersNumber</code></h3>
<p>
<code style="margin:0">getPlayersNumber() : int</code>
</p>

Returns the current number of players in the room.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">hasAdmin</code></h3>
<p>
<code style="margin:0">hasAdmin() : bool</code>
</p>

Returns whether the room has at least one player with admin permission.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">hasNotAdmin</code></h3>
<p>
<code style="margin:0">hasNotAdmin() : bool</code>
</p>

Returns whether the room has **not** at least one player with admin permission.

```javascript
//Doing this
if(room.hasNotAdmin()) ...
//is the same as
if(!room.hasAdmin()) ...
```


<h3 style="font-size: 1.25em"><code style="font-size:inherit">chooseRandomAdmin</code></h3>
<p>
<code style="margin:0">chooseRandomAdmin() : void</code>
</p>

Gives admin permission to a random player in the room.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">removeAllAdmins</code></h3>
<p>
<code style="margin:0">removeAllAdmins() : void</code>
</p>

Removes admin permission from all the players in the room.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">getScoreTime</code></h3>
<p>
<code style="margin:0">getScoreTime(unit : string) : int</code>
</p>

Returns an integer representing the time during a match. If there is no current match being played, it will be returned `null`.

`unit` must be one of the followings values: `["milliseconds","seconds","minutes"]`.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">reset</code></h3>
<p>
<code style="margin:0">reset() : void</code>
</p>

Resets a match instantly.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">resetWithStadiumChange</code></h3>
<p>
<code style="margin:0">resetWithStadiumChange(stadiumFileContents : string) : void</code>
</p>

Resets a match instantly changing the stadium in the middle.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">resetWithLimitsChange</code></h3>
<p>
<code style="margin:0">resetWithLimitsChange(scoreLimit : int, timeLimit : int) : void</code>
</p>

Resets a match instantly changing the score and time limits in the middle.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">resetWithLimitsAndStadiumChange</code></h3>
<p>
<code style="margin:0">resetWithLimitsAndStadiumChange(scoreLimit : int, timeLimit : int, stadiumFileContents : string) : void</code>
</p>

Resets a match instantly changing the score, time limits and the stadium in the middle.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">isStopped</code></h3>
<p>
<code style="margin:0">isStopped() : bool</code>
</p>

Returns whether the room is Stopped;


<h3 style="font-size: 1.25em"><code style="font-size:inherit">isNotStopped</code></h3>
<p>
<code style="margin:0">isNotStopped() : bool</code>
</p>

Returns whether the room is **not** Stopped;

```javascript
//Doing this
if(room.isNotStopped()) ...
//is the same as
if(!room.isStopped()) ...
```


<h3 style="font-size: 1.25em"><code style="font-size:inherit">isPaused</code></h3>
<p>
<code style="margin:0">isPaused() : bool</code>
</p>

Returns whether the room is Paused;


<h3 style="font-size: 1.25em"><code style="font-size:inherit">isNotPaused</code></h3>
<p>
<code style="margin:0">isNotPaused() : bool</code>
</p>

Returns whether the room is **not** Paused;

```javascript
//Doing this
if(room.isNotPaused()) ...
//is the same as
if(!room.isPaused()) ...
```


<h3 style="font-size: 1.25em"><code style="font-size:inherit">isPlaying</code></h3>
<p>
<code style="margin:0">isPlaying() : bool</code>
</p>

Returns whether there is a current match being played;


<h3 style="font-size: 1.25em"><code style="font-size:inherit">isNotPlaying</code></h3>
<p>
<code style="margin:0">isNotPlaying() : bool</code>
</p>

Returns whether there is **not** a current match being played;

```javascript
//Doing this
if(room.isNotPlaying()) ...
//is the same as
if(!room.isPlaying()) ...
```


<h3 style="font-size: 1.25em"><code style="font-size:inherit">getState</code></h3>
<p>
<code style="margin:0">getState() : string</code>
</p>

Returns the state of the room. The possible values are `["stopped","playing","paused"]` and we can use it as an alternative to `is...()` boolean methods.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">setAntiDU</code></h3>
<p>
<code style="margin:0">setAntiDU(state : bool, kickBecauseDU : string, ignoredAuthsDU : string[]) : void</code>
</p>

Prevents the same user from the same device access to the room more than once at the time. This is achieved kicking him.

`state` will be taken to determine whether enable or not the AntiDU.
`kickBecauseDU` is the text the user will see when he is kicked because DU.
`ignoredAuthsDU` is a list of auths the AntiDU will take to skip the verification. If we put our auth on it, the AntiDU no matter whether is enabled, will allow us to be in the room with the same device more than once at the time. This can be used, for example, for testing purposes.

Usage example:

```javascript
const ignoredAuths = ["ju312ui3byubuybuy312bv2"]; //this auth will be ignored by AntiDU.
room.setAntiDU(true,"kicked by DU",ignoredAuths);
```


<h3 style="font-size: 1.25em"><code style="font-size:inherit">getConnectedPlayers</code></h3>
<p>
<code style="margin:0">getConnectedPlayers() : PlayerObject[]</code>
</p>

Returns a more detailed list about all the players in the room.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">messageIsACommand</code></h3>
<p>
<code style="margin:0">messageIsACommand(message : string) : bool</code>
</p>

Returns whether the entered message is a valid command. In the context, a message is considered a command when starts with the `CommandSymbol`. The default `CommandSymbol` is `!` character. We can change this symbol using `setCommandSymbol` method.


<h3 style="font-size: 1.25em"><code style="font-size:inherit">setCommandSymbol</code></h3>
<p>
<code style="margin:0">setCommandSymbol(char : string) : void</code>
</p>

Sets the `CommandSymbol` which a message is identified as a command.

`char` only accepts a string of length `1`(a simple character).


<h3 style="font-size: 1.25em"><code style="font-size:inherit">getCommandInformation</code></h3>
<p>
<code style="margin:0">getCommandInformation(command : string) : void</code>
</p>

Returns the `name` and the `params` of the entered command. Is not neccesary to use `messageIsACommand` to validate it, because that will be made within the method.

Usage Example: 

```javascript
const command = "!move red spect"
const commandInformation = room.getCommandInformation(command);

//commandInformation will be {name: "move",params: ["red","spect"]}
```
