# GetActorBounds

Returns the bounding box of all components that make up this Actor (excluding ChildActorComponents).

Target is Actor

## 图示

![]($-20221218-18185149.png)

## Inputs

Target: Actor Object Reference.

Only Colliding Components: Boolean. If true, will only return the bounding box for components with collision enabled..

Include from Child Actors: Boolean. If true then recurse in to ChildActor components.  

## Outputs

Origin: Vector. Set to the center of the actor in world space.

Box Extent: Vector. Set to half the actor's size in 3d space.

