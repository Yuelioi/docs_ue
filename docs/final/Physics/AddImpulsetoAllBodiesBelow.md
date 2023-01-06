# AddImpulsetoAllBodiesBelow

为下面的所有单体刚体添加冲力。适合于一次性的瞬间爆发。

目标是骨架网组件

## 图示

![]($-20221218-20204165.png)

## Inputs

在。执行。

目标。骨骼网组件对象参考。

脉冲：矢量。脉冲的大小和方向适用于...

骨骼名称。名称。如果是SkeletalMeshComponent，要应用脉冲的主体名称。'无'表示根体。

维尔变化。布尔值。如果为真，强度将被视为速度的变化而不是冲力（即质量没有影响）。

包括自己：布尔值。如果为 "假"，则 "力 "只适用于下面的身体，但不给骨名。

## Outputs

出：执行。

Add impulse to all single rigid bodies below. Good for one time instant burst.

Target is Skeletal Mesh Component

## 图示

![]($-20221218-20204165.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

Impulse: Vector. Magnitude and direction of impulse to apply..

Bone Name: Name. If a SkeletalMeshComponent, name of body to apply impulse to. 'None' indicates root body..

Vel Change: Boolean. If true, the Strength is taken as a change in velocity instead of an impulse (ie. mass will have no effect)..

Include Self: Boolean. If false, Force is only applied to bodies below but not given bone name..  

## Outputs

Out: Exec.

