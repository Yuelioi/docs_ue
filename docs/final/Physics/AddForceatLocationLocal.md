# AddForceatLocationLocal

在一个单一的刚体上的特定位置添加一个力。力和位置都应该是在体的空间。这就像一个 "推进器"。适合在一些（非零）时间内增加一个爆发力。应该在力的持续时间内每一帧都被调用。

目标是原始组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20203687.png)

## Inputs

在。执行。

目标。原始组件对象参考。

力量。矢量。应用的力矢量。幅度表示力的强度。

地点：向量。矢量。施加力的位置，在分量空间中。

骨骼名称。名称。如果是 SkeletalMeshComponent，要施加力的主体名称。'无'表示根体。

## Outputs

出：执行。

<hr>

Add a force to a single rigid body at a particular location. Both Force and Location should be in body space.. This is like a 'thruster'. Good for adding a burst over some (non zero) time. Should be called every frame for the duration of the force.

Target is Primitive Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20203687.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Force: Vector. Force vector to apply. Magnitude indicates strength of force..

Location: Vector. Location to apply force, in component space..

Bone Name: Name. If a SkeletalMeshComponent, name of body to apply force to. 'None' indicates root body..

## Outputs

Out: Exec.
