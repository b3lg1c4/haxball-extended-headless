
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


## API

**`getSpecTeam`**
