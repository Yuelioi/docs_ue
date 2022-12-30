# StartCameraShakefromSource

Plays a camera shake on this camera.

Target is Player Camera Manager

## 图示

![]($-20221218-18142454.png)

## Inputs

In: Exec.

Target: Player Camera Manager Object Reference.

Shake Class: Camera Shake Base Class Reference.

Source Component: Camera Shake Source Component Object Reference. The source from which the camera shake originates..

Scale: Float (single-precision). Applies an additional constant scale on top of the dynamic scale computed with the distance to the source.

Play Space: ECameraShakePlaySpace Enum. Which coordinate system to play the shake in (affects oscillations and camera anims).

User Play Space Rot: Rotator. Coordinate system to play shake when PlaySpace == CAPS_UserDefined..  

## Outputs

Out: Exec.

Return Value: Camera Shake Base Object Reference.

