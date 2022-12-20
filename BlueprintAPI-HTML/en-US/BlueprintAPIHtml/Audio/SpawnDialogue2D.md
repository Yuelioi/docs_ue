# SpawnDialogue2D

Spawns a DialogueWave, a special type of Asset that requires Context data in order to resolve a specific SoundBase,. which is then passed on to the new Audio Component. Audio Components created using this function by default will not. have Spatialization applied. Sound instances will begin playing upon spawning this Audio Component.

  * Not Replicated.





Target is Gameplay Statics

## 图示

![]($-20221218-18075723.png)

## Inputs

In: Exec.

Dialogue: Dialogue Wave Object Reference. dialogue to play.

Context: Dialogue Context Structure (by ref). context the dialogue is to play in.

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the dialogue to begin playback at.

Auto Destroy: Boolean. Whether the returned audio component will be automatically cleaned up when the sound finishes (by completing or stopping) or whether it can be reactivated.  

## Outputs

Out: Exec.

Return Value: Audio Component Object Reference. An audio component to manipulate the spawned sound.

