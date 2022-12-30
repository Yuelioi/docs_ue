# PlayDialogue2D

Plays a dialogue directly with no attenuation, perfect for UI.

  * Fire and Forget.

  * Not Replicated.





Target is Gameplay Statics

## 图示

![]($-20221218-18072312.png)

## Inputs

In: Exec.

Dialogue: Dialogue Wave Object Reference. dialogue to play.

Context: Dialogue Context Structure (by ref). context the dialogue is to play in.

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the dialogue to begin playback at.  

## Outputs

Out: Exec.

