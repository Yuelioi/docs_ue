# GetActorsinSelectionRectangle

返回选择矩形内的演员数组，并带有一个类别过滤器。

使用样本。

TArray<AStaticMeshActor*> ActorsInSelectionRect; 。Canvas->GetActorsInSelectionRectangle<AStaticMeshActor>(FirstPoint,SecondPoint,ActorsInSelectionRect)。

目标是HUD

## 图示

![]($-20221218-19162412.png)

## Inputs

目标：HUD对象参考。

类过滤器。演员类参考。

第一点。矢量二维结构（通过参考）。第一个点，或者说侯选框的锚点。在屏幕空间中，拖动轮廓线的起点。

第二点。矢量二维结构（通过参考）。第二点，鼠标光标当前所在的位置/框选的另一点，在屏幕空间。

包括非碰撞部件。布尔值。在确定行为体的边界时，是否包括行为体的非碰撞组件。

演员必须是完全封闭的。布尔值。选择规则：选择框是否可以部分地与Actor相交，或者必须完全包围Actor。  

## Outputs

出来的演员。演员对象参考数组。

Returns the array of actors inside a selection rectangle, with a class filter.

Sample usage:

TArray<AStaticMeshActor*> ActorsInSelectionRect;. Canvas->GetActorsInSelectionRectangle<AStaticMeshActor>(FirstPoint,SecondPoint,ActorsInSelectionRect);

Target is HUD

## 图示

![]($-20221218-19162412.png)

## Inputs

Target: HUD Object Reference.

Class Filter: Actor Class Reference.

First Point: Vector 2D Structure (by ref). The first point, or anchor of the marquee box. Where the dragging of the marquee started in screen space..

Second Point: Vector 2D Structure (by ref). The second point, where the mouse cursor currently is / the other point of the box selection, in screen space..

Include Non Colliding Components: Boolean. Whether to include even non-colliding components of the actor when determining its bounds.

Actor Must be Fully Enclosed: Boolean. The Selection rule: whether the selection box can partially intersect Actor, or must fully enclose the Actor..  

## Outputs

Out Actors: Array of Actor Object References.

