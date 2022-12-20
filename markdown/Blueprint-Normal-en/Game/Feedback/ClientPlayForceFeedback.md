# ClientPlayForceFeedback

Play a force feedback pattern on the player's controller

Target is Player Controller

## 图示

![]($-20221218-19054040.png)

## Inputs

In: Exec.

Target: Player Controller Object Reference.

Force Feedback Effect: Force Feedback Effect Object Reference. The force feedback pattern to play.

Tag: Name. A tag that allows stopping of an effect. If another effect with this Tag is playing, it will be stopped and replaced.

Looping: Boolean. Whether the pattern should be played repeatedly or be a single one shot.

Ignore Time Dilation: Boolean. Whether the pattern should ignore time dilation.

Play While Paused: Boolean. Whether the pattern should continue to play while the game is paused.  

## Outputs

Out: Exec.

