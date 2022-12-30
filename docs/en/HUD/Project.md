# Project

Transforms a 3D world-space vector into 2D screen coordinates

Target is HUD

## 图示

![]($-20221218-19163112.png)

## Inputs

Target: HUD Object Reference.

Location: Vector. The world-space position to transform.

Clamp to Zero Plane: Boolean. If true, 2D screen coordinates behind the viewing plane (-Z) will have Z set to 0 (leaving X and Y alone).  

## Outputs

Return Value: Vector. The transformed vector.

