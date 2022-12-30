# StartCameraShake

Plays a camera shake on this camera.

Target is Player Camera Manager

## 图示

![]($-20221218-18142322.png)

## Inputs

In: Exec.

Target: Player Camera Manager Object Reference.

Shake Class: Camera Shake Base Class Reference.

Scale: Float (single-precision). Scalar defining how "intense" to play the shake. 1.0 is normal (as authored)..

Play Space: ECameraShakePlaySpace Enum. Which coordinate system to play the shake in (affects oscillations and camera anims).

User Play Space Rot: Rotator. Coordinate system to play shake when PlaySpace == CAPS_UserDefined..  

## Outputs

Out: Exec.

Return Value: Camera Shake Base Object Reference.

