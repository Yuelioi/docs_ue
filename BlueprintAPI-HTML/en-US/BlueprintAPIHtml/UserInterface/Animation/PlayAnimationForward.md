# PlayAnimationForward

Plays an animation on this widget relative to it's current state forward. You should use this version in situations where. say a user can click a button and that causes a panel to slide out, and you want to reverse that same animation to begin sliding. in the opposite direction.

Target is User Widget

## 图示

![]($-20221218-21213173.png)

## Inputs

In: Exec.

Target: User Widget Object Reference.

In Animation: Widget Animation Object Reference. The animation to play.

Playback Speed: Float (single-precision). The speed at which the animation should play.

Restore State: Boolean. Restores widgets to their pre-animated state when the animation stops.  

## Outputs

Out: Exec.

Return Value: UMGSequence Player Object Reference.

