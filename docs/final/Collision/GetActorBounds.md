# GetActorBounds

返回构成此Actor的所有组件的包围盒（不包括ChildActorComponents）。

目标是演员

## 图示

![]($-20221218-18185149.png)

## Inputs

目标。Actor对象参考。

只有碰撞的组件。布尔值。如果为真，将只返回已启用碰撞的组件的包围盒。

包括来自子角色的内容。布尔值。如果为真，则递归到子角色组件。 

## Outputs

原点。矢量。设置为世界空间中演员的中心。

盒子的范围。向量。设置为3D空间中演员大小的一半。

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

