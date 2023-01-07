# ProjectWorldtoScreen

将给定的 3D 世界空间点转换为其 2D 屏幕空间坐标。

目标是游戏规则

## 图示

![](/uploads/projects/ue-bluprint/20221218-18131827.png)

## Inputs

玩家。玩家控制器对象参考。使用该玩家的视图进行投影。

世界位置。Vector（通过参考）。投影的世界位置。

Player Viewport Relative: 布尔值。这应该是相对于玩家视口子区域的位置（在分屏中使用玩家附属部件时很有用）。

## Outputs

屏幕位置。矢量 2D 结构。(out) 在屏幕空间中的对应的 2D 位置。

返回值。布尔值。

<hr>

Transforms the given 3D world-space point into a its 2D screen space coordinate.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18131827.png)

## Inputs

Player: Player Controller Object Reference. Project using this player's view..

World Position: Vector (by ref). World position to project..

Player Viewport Relative: Boolean. Should this be relative to the player viewport subregion (useful when using player attached widgets in split screen).

## Outputs

Screen Position: Vector 2D Structure. (out) Corresponding 2D position in screen space.

Return Value: Boolean.
