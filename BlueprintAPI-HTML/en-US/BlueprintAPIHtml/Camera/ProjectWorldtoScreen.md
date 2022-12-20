# ProjectWorldtoScreen

Transforms the given 3D world-space point into a its 2D screen space coordinate.

Target is Gameplay Statics

## 图示

![]($-20221218-18131827.png)

## Inputs

Player: Player Controller Object Reference. Project using this player's view..

World Position: Vector (by ref). World position to project..

Player Viewport Relative: Boolean. Should this be relative to the player viewport subregion (useful when using player attached widgets in split screen).  

## Outputs

Screen Position: Vector 2D Structure. (out) Corresponding 2D position in screen space.

Return Value: Boolean.

