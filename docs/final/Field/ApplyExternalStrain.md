# ApplyExternalStrain

ApplyExternalStran.这个函数将向物理线程派发一个命令，以便在一组几何体上应用一个应变场。这被用来在求解器中触发一个破坏事件。

目标是现场系统组件

## 图示

![]($-20221218-18594315.png)

## Inputs

在。执行。

目标。现场系统组件对象参考。

启用字段。布尔型。是否为评估而启用该力量...

中心位置。矢量。力的原点。

漂移半径。Float（单精度）。从位置开始的径向影响，距离较远的位置会比较弱。

字段大小。Float（单精度）。线性力的大小...

集群级别。整数。进入集群层次结构的评估级别。

## Outputs

出：执行。

ApplyExternalStran. This function will dispatch a command to the physics thread to apply. a strain field on a clustered set of geometry. This is used to trigger a. breaking event within the solver.

Target is Field System Component

## 图示

![]($-20221218-18594315.png)

## Inputs

In: Exec.

Target: Field System Component Object Reference.

Enable Field: Boolean. Is this force enabled for evaluation..

Center Position: Vector. The origin point of the force.

Falloff Radius: Float (single-precision). Radial influence from the position, positions further away are weaker..

Field Magnitude: Float (single-precision). The size of the linear force..

Cluster Levels: Integer. Levels of evaluation into the cluster hierarchy..  

## Outputs

Out: Exec.

