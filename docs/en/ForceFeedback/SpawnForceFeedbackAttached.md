# SpawnForceFeedbackAttached

Plays a force feedback effect attached to and following the specified component. This is a fire and forget effect. Replication is also not handled at this point.

Target is Gameplay Statics

## 图示

![]($-20221218-19005461.png)

## Inputs

In: Exec.

Force Feedback Effect: Force Feedback Effect Object Reference. effect to play.

Attach to Component: Scene Component Object Reference.

Attach Point Name: Name. Optional named point within the AttachComponent to attach to.

Location: Vector. Depending on the value of Location Type this is either a relative offset from the attach component/point or an absolute world position that will be translated to a relative offset.

Rotation: Rotator. Depending on the value of Location Type this is either a relative offset from the attach component/point or an absolute world rotation that will be translated to a relative offset.

Location Type: EAttachLocation Enum. Specifies whether Location is a relative offset or an absolute world position.

Stop when Attached to Destroyed: Boolean. Specifies whether the feedback effect should stop playing when the owner of the attach to component is destroyed..

Looping: Boolean.

Intensity Multiplier: Float (single-precision). Intensity multiplier.

Start Time: Float (single-precision). How far in to the feedback effect to begin playback at.

Attenuation Settings: Force Feedback Attenuation Object Reference. Override attenuation settings package to play effect with.

Auto Destroy: Boolean. Whether the returned force feedback component will be automatically cleaned up when the feedback patern finishes (by completing or stopping) or whether it can be reactivated.  

## Outputs

Out: Exec.

Return Value: Force Feedback Component Object Reference. Force Feedback Component to manipulate the playing feedback effect with.

