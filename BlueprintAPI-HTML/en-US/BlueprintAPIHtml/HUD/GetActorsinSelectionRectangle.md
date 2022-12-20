# GetActorsinSelectionRectangle

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

