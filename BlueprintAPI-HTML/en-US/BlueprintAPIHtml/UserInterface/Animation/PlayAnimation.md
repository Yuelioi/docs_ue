# PlayAnimation

Plays an animation in this widget a specified number of times

Target is User Widget

## 图示

![]($-20221218-21213038.png)

## Inputs

In: Exec.

Target: User Widget Object Reference.

In Animation: Widget Animation Object Reference. The animation to play.

Start at Time: Float (single-precision). The time in the animation from which to start playing, relative to the start position. For looped animations, this will only affect the first playback of the animation..

Num Loops to Play: Integer. The number of times to loop this animation (0 to loop indefinitely).

Play Mode: EUMGSequencePlayMode Enum. Specifies the playback mode.

Playback Speed: Float (single-precision). The speed at which the animation should play.

Restore State: Boolean. Restores widgets to their pre-animated state when the animation stops.  

## Outputs

Out: Exec.

Return Value: UMGSequence Player Object Reference.

