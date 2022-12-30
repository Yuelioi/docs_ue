# ProjectWorldLocationtoWidgetPosi-

Gets the projected world to screen position for a player, then converts it into a widget. position, which takes into account any quality scaling.

Target is Widget Layout Library

## 图示

![]($-20221218-21252161.png)

## Inputs

Player Controller: Player Controller Object Reference. The player controller to project the position in the world to their screen..

World Location: Vector. The world location to project from..

Player Viewport Relative: Boolean. Should this be relative to the player viewport subregion (useful when using player attached widgets in split screen or when aspect-ratio constrained).  

## Outputs

Screen Position: Vector 2D Structure. The position in the viewport with quality scale removed and DPI scale remove..

Return Value: Boolean. true if the position projects onto the screen..

