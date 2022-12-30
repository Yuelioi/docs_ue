# SpawnDialogueatLocation

Spawns a DialogueWave, a special type of Asset that requires Context data in order to resolve a specific SoundBase,. which is then passed on to the new Audio Component. This function allows users to create and play Audio Components at a. specific World Location and Rotation. Useful for spatialized and/or distance-attenuated dialogue.

Target is Gameplay Statics

## 图示

![]($-20221218-18075852.png)

## Inputs

In: Exec.

Dialogue: Dialogue Wave Object Reference. Dialogue to play.

Context: Dialogue Context Structure (by ref). Context the dialogue is to play in.

Location: Vector. World position to play dialogue at.

Rotation: Rotator. World rotation to play dialogue at.

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far into the dialogue to begin playback at.

Attenuation Settings: Sound Attenuation Object Reference. Override attenuation settings package to play sound with.

Auto Destroy: Boolean. Whether the returned audio component will be automatically cleaned up when the sound finishes (by completing or stopping) or whether it can be reactivated.  

## Outputs

Out: Exec.

Return Value: Audio Component Object Reference. Audio Component to manipulate the playing dialogue with.

