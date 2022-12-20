# GetLaserPointer

Gets the start and end point of the laser pointer for the specified hand

Target is Viewport Interactor

## 图示

![]($-20221218-19305058.png)

## Inputs

In: Exec.

Target: Viewport Interactor Object Reference.

Even if Blocked: Boolean. If true, returns a laser pointer even if the hand has UI in front of it (defaults to false).

Laser Length Override: Float (single-precision). If zero the default laser length (VREdMode::GetLaserLength) is used.  

## Outputs

Out: Exec.

Laser Pointer Start: Vector.

Laser Pointer End: Vector.

Return Value: Boolean. True if we have motion controller data for this hand and could return a valid result.

