# PlaySound2D

Plays a sound directly with no attenuation, perfect for UI sounds.

  * Fire and Forget.

  * Not Replicated.





Target is Gameplay Statics

## 图示

![]($-20221218-18072582.png)

## Inputs

In: Exec.

Sound: Sound Base Object Reference. Sound to play..

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the sound to begin playback at.

Concurrency Settings: Sound Concurrency Object Reference. Override concurrency settings package to play sound with.

Owning Actor: Actor Object Reference. The actor to use as the "owner" for concurrency settings purposes. Allows PlaySound calls to do a concurrency limit per owner..

Is UISound: Boolean. True if sound is UI related, else false.  

## Outputs

Out: Exec.

