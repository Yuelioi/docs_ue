# StartMatineeCameraShake

Backwards compatible method used by core BP redirectors. This is needed because the return value is specifically a Matinee camera shake,. which some BP logic often uses directly to set oscillator/anim properties.

Target is Matinee Camera Shake

## 图示

![]($-20221218-18142593.png)

## Inputs

In: Exec.

Player Camera Manager: Player Camera Manager Object Reference.

Shake Class: Matinee Camera Shake Class Reference.

Scale: Float (single-precision).

Play Space: ECameraShakePlaySpace Enum.

User Play Space Rot: Rotator.  

## Outputs

Out: Exec.

Return Value: Matinee Camera Shake Object Reference. Backwards compatible method used by core BP redirectors. This is needed because the return value is specifically a Matinee camera shake,. which some BP logic often uses directly to set oscillator/anim properties..

