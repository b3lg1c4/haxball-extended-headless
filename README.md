
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
<br>

<h3 style="font-size: 1.25em"><code style="font-size:inherit">getRedTeam</code></h3>
<p>
<code style="margin:0">getRedTeam() : PlayerObject[]</code>
</p>
Returns the current list of the players in Red Team.
<br>

<h3 style="font-size: 1.25em"><code style="font-size:inherit">getBlueTeam</code></h3>
<p>
<code style="margin:0">getBlueTeam() : PlayerObject[]</code>
</p>
Returns the current list of the players in Blue Team.
<br>

<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveNextSpectToTeam</code></h3>
<p>
<code style="margin:0">moveNextSpectToTeam(team : int) : void</code>
</p>
Moves the first player from the current Spect Team list.  If there is no spect to move, the method will do nothing.

`team` possible values are `1` for Red Team , `2` for Blue Team and obviously you can use `0` for Spect Team but it does not make sense since the player is already on it.
<br>

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
<br>

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
<br>

<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveAllRedTeamToSpects</code></h3>
<p>
<code style="margin:0">moveAllRedTeamToSpects() : void</code>
</p>
Moves all the Red Team to Spect Team. If there is no red player to move, the method will do nothing.
<br>

<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveAllBlueTeamToSpects</code></h3>
<p>
<code style="margin:0">moveAllBlueTeamToSpects() : void</code>
</p>
Moves all the Blue Team to Spect Team. If there is no blue player to move, the method will do nothing.
<br>

<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveAllRedTeamToBlueTeam</code></h3>
<p>
<code style="margin:0">moveAllRedTeamToBlueTeam() : void</code>
</p>
Moves all the Red Team to Blue Team. If there is no red player to move, the method will do nothing.
<br>

<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveAllBlueTeamToRedTeam</code></h3>
<p>
<code style="margin:0">moveAllBlueTeamToRedTeam() : void</code>
</p>
Moves all the Blue Team to Red Team. If there is no blue player to move, the method will do nothing.
<br>

<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveNRedTeamPlayersToSpects</code></h3>
<p>
<code style="margin:0">moveNRedTeamPlayersToSpects(N : int) : void</code>
</p>
Moves the next `N` players from the current Red Team list to Spect Team. If there is no red player to move, the method will do nothing.
<br>

<h3 style="font-size: 1.25em"><code style="font-size:inherit">moveNBlueTeamPlayersToSpects</code></h3>
<p>
<code style="margin:0">moveNBlueTeamPlayersToSpects(N : int) : void</code>
</p>
Moves the next `N` players from the current Blue Team list to Spect Team. If there is no blue player to move, the method will do nothing.
<br>

<h3 style="font-size: 1.25em"><code style="font-size:inherit">getPlayersNumber</code></h3>
<p>
<code style="margin:0">getPlayersNumber() : int</code>
</p>
Returns the current amount of players in the host.
<br>

<h3 style="font-size: 1.25em"><code style="font-size:inherit">hasAdmin</code></h3>
<p>
<code style="margin:0">hasAdmin() : bool</code>
</p>
Returns whether the host has at least one player with admin permission.
<br>

<h3 style="font-size: 1.25em"><code style="font-size:inherit">hasNotAdmin</code></h3>
<p>
<code style="margin:0">hasNotAdmin() : bool</code>
</p>
Returns whether has **not** at least one player with admin permission.
<br>

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
Grabs a random player and gives him admin permission.
<br>

<h3 style="font-size: 1.25em"><code style="font-size:inherit">removeAllAdmins</code></h3>
<p>
<code style="margin:0">removeAllAdmins() : void</code>
</p>
Removes admin permission from all the players in the host.
<br>

