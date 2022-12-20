# SpawnForceFeedbackatLocation

Plays a force feedback effect at the given location. This is a fire and forget effect and does not travel with any actor. Replication is also not handled at this point.

Target is Gameplay Statics

## 图示

![]($-20221218-19005329.png)

## Inputs

In: Exec.

Force Feedback Effect: Force Feedback Effect Object Reference. effect to play.

Location: Vector. World position to center the effect at.

Rotation: Rotator. World rotation to center the effect at.

Looping: Boolean.

Intensity Multiplier: Float (single-precision). Intensity multiplier.

Start Time: Float (single-precision). How far in to the feedback effect to begin playback at.

Attenuation Settings: Force Feedback Attenuation Object Reference. Override attenuation settings package to play effect with.

Auto Destroy: Boolean. Whether the returned force feedback component will be automatically cleaned up when the feedback pattern finishes (by completing or stopping) or whether it can be reactivated.  

## Outputs

Out: Exec.

Return Value: Force Feedback Component Object Reference. Force Feedback Component to manipulate the playing feedback effect with.

