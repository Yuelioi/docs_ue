# ProjectWorldLocationtoWidgetPosi-

获取玩家的投影世界到屏幕的位置，然后将其转换为一个小部件的位置，其中考虑到任何质量缩放。

目标是 Widget Layout Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21252161.png)

## Inputs

播放器控制器。玩家控制器对象参考。玩家控制器将世界上的位置投射到他们的屏幕上。

世界的位置。向量。投射的世界位置。

玩家视口的相对性。布尔值。这应该是相对于播放器视口子区域的（当在分屏中使用播放器附属部件或宽高比受限时，很有用）。

## Outputs

屏幕位置。矢量 2D 结构。在视口中的位置，去掉质量比例和 DPI 比例。

返回值。布尔值。如果位置投射到屏幕上，为真。

<hr>

Gets the projected world to screen position for a player, then converts it into a widget. position, which takes into account any quality scaling.

Target is Widget Layout Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21252161.png)

## Inputs

Player Controller: Player Controller Object Reference. The player controller to project the position in the world to their screen..

World Location: Vector. The world location to project from..

Player Viewport Relative: Boolean. Should this be relative to the player viewport subregion (useful when using player attached widgets in split screen or when aspect-ratio constrained).

## Outputs

Screen Position: Vector 2D Structure. The position in the viewport with quality scale removed and DPI scale remove..

Return Value: Boolean. true if the position projects onto the screen..
