# SpawnSoundAttached

This function allows users to create and play Audio Components attached to a specific Scene Component.. Useful for spatialized and/or distance-attenuated sounds that need to follow another object in space.

Target is Gameplay Statics

## 图示

![]($-20221218-18080384.png)

## Inputs

In: Exec.

Sound: Sound Base Object Reference. sound to play.

Attach to Component: Scene Component Object Reference.

Attach Point Name: Name. Optional named point within the AttachComponent to play the sound at.

Location: Vector. Depending on the value of Location Type this is either a relative offset from the attach component/point or an absolute world position that will be translated to a relative offset.

Rotation: Rotator. Depending on the value of Location Type this is either a relative offset from the attach component/point or an absolute world rotation that will be translated to a relative offset.

Location Type: EAttachLocation Enum. Specifies whether Location is a relative offset or an absolute world position.

Stop when Attached to Destroyed: Boolean. Specifies whether the sound should stop playing when the owner of the attach to component is destroyed..

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the sound to begin playback at.

Attenuation Settings: Sound Attenuation Object Reference. Override attenuation settings package to play sound with.

Concurrency Settings: Sound Concurrency Object Reference. Override concurrency settings package to play sound with.

Auto Destroy: Boolean. Whether the returned audio component will be automatically cleaned up when the sound finishes (by completing or stopping) or whether it can be reactivated.  

## Outputs

Out: Exec.

Return Value: Audio Component Object Reference. An audio component to manipulate the spawned sound.

