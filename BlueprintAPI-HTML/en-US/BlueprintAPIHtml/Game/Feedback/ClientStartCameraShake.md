# ClientStartCameraShake

Play Camera Shake

Target is Player Controller

## 图示

![]($-20221218-19054270.png)

## Inputs

In: Exec.

Target: Player Controller Object Reference.

Shake: Camera Shake Base Class Reference. Camera shake animation to play.

Scale: Float (single-precision). Scalar defining how "intense" to play the anim.

Play Space: ECameraShakePlaySpace Enum. Which coordinate system to play the shake in (used for CameraAnims within the shake)..

User Play Space Rot: Rotator. Matrix used when PlaySpace = CAPS_UserDefined.  

## Outputs

Out: Exec.

