# PlayDialogueatLocation

Plays a dialogue at the given location. This is a fire and forget sound and does not travel with any actor.. Replication is also not handled at this point.

Target is Gameplay Statics

## 图示

![]($-20221218-18072450.png)

## Inputs

In: Exec.

Dialogue: Dialogue Wave Object Reference. dialogue to play.

Context: Dialogue Context Structure (by ref). context the dialogue is to play in.

Location: Vector. World position to play dialogue at.

Rotation: Rotator. World rotation to play dialogue at.

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the dialogue to begin playback at.

Attenuation Settings: Sound Attenuation Object Reference. Override attenuation settings package to play sound with.  

## Outputs

Out: Exec.

