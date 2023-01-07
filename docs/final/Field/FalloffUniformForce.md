# FalloffUniformForce

FalloffUniformForce。这个函数将向物理线程发送一条命令，以应用一个统一方向的线性力。当它远离中心时，力的矢量会减弱。

目标是场系统组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18594793.png)

## Inputs

在。执行。

目标。场系统组件对象参考。

启用字段。布尔值。这个力是否启用评估。

中心位置。矢量。力的原点。

统一方向。矢量。线性力的方向。

落差半径。浮点（单精度）。从位置的径向影响，更远的位置会更弱。

场的大小。浮点（单精度）。线性力的大小。

## Outputs

输出。执行。

<hr>

FalloffUniformForce. This function will dispatch a command to the physics thread to apply. a linear force in a uniform direction. The force vector is weaker as. it moves away from the center.

Target is Field System Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18594793.png)

## Inputs

In: Exec.

Target: Field System Component Object Reference.

Enable Field: Boolean. Is this force enabled for evaluation..

Center Position: Vector. The origin point of the force.

Uniform Direction: Vector. The direction of the linear force.

Falloff Radius: Float (single-precision). Radial influence from the position, positions further away are weaker..

Field Magnitude: Float (single-precision). The size of the linear force..

## Outputs

Out: Exec.
