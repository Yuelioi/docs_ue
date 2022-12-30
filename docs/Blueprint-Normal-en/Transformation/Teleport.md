# Teleport

Teleport this actor to a new location. If the actor doesn't fit exactly at the location specified, tries to slightly move it out of walls and such.

Target is Actor

## 图示

![]($-20221218-21154824.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

Dest Location: Vector. The target destination point.

Dest Rotation: Rotator. The target rotation at the destination.  

## Outputs

Out: Exec.

Return Value: Boolean. true if the actor has been successfully moved, or false if it couldn't fit..

