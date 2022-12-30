# PlaySoundatLocation

Plays a sound at the given location. This is a fire and forget sound and does not travel with any actor.. Replication is also not handled at this point.

Target is Gameplay Statics

## 图示

![]($-20221218-18072724.png)

## Inputs

In: Exec.

Sound: Sound Base Object Reference. sound to play.

Location: Vector. World position to play sound at.

Rotation: Rotator. World rotation to play sound at.

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the sound to begin playback at.

Attenuation Settings: Sound Attenuation Object Reference. Override attenuation settings package to play sound with.

Concurrency Settings: Sound Concurrency Object Reference. Override concurrency settings package to play sound with.

Owning Actor: Actor Object Reference. The actor to use as the "owner" for concurrency settings purposes. Allows PlaySound calls to do a concurrency limit per owner..

Initial Params: Initial Active Sound Params Object Reference.  

## Outputs

Out: Exec.

