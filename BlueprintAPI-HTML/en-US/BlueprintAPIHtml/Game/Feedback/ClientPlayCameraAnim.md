# ClientPlayCameraAnim

Play the indicated CameraAnim on this camera.

Target is Player Controller

## 图示

![]($-20221218-19053927.png)

## Inputs

In: Exec.

Target: Player Controller Object Reference.

Anim to Play: Camera Anim Object Reference. Camera animation to play.

Scale: Float (single-precision). "Intensity" scalar. This is the scale at which the anim was first played..

Rate: Float (single-precision). Multiplier for playback rate. 1.0 = normal..

Blend in Time: Float (single-precision). Time to interpolate in from zero, for smooth starts.

Blend Out Time: Float (single-precision). Time to interpolate out to zero, for smooth finishes.

Loop: Boolean. True if the animation should loop, false otherwise.

Random Start Time: Boolean. Whether or not to choose a random time to start playing. Only really makes sense for bLoop = true.

Space: ECameraShakePlaySpace Enum. Animation play area.

Custom Play Space: Rotator. Matrix used when Space = CAPS_UserDefined.  

## Outputs

Out: Exec.

