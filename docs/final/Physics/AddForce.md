# AddForce

在一个单一的刚体上添加一个力。这就像一个 "推进器"。适合在一些（非零）时间内增加一个爆发力。应该在力的持续时间内每一帧都被调用。

目标是原始组件

## 图示

![]($-20221218-20203456.png)

## Inputs

在。执行。

目标。原始组件对象参考。

力量。矢量。应用的力矢量。幅度表示力的强度。

骨骼名称。名称。如果是SkeletalMeshComponent，要施加力的主体名称。'无'表示根体。

加速变化。布尔值。如果为真，力将被视为加速度的变化，而不是物理力（即质量将没有影响）。  

## Outputs

出：执行。

Add a force to a single rigid body.. This is like a 'thruster'. Good for adding a burst over some (non zero) time. Should be called every frame for the duration of the force.

Target is Primitive Component

## 图示

![]($-20221218-20203456.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Force: Vector. Force vector to apply. Magnitude indicates strength of force..

Bone Name: Name. If a SkeletalMeshComponent, name of body to apply force to. 'None' indicates root body..

Accel Change: Boolean. If true, Force is taken as a change in acceleration instead of a physical force (i.e. mass will have no effect)..  

## Outputs

Out: Exec.

