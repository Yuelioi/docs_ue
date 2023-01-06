# AddTorqueinRadians

给单个刚体增加一个扭矩。

目标是原始组件

## 图示

![]($-20221218-20204638.png)

## Inputs

在。执行。

目标。原始组件对象参考。

扭矩。矢量。应用的扭矩。方向是旋转的轴线，大小是扭矩的强度。

骨骼名称。名称。如果是SkeletalMeshComponent，要应用扭矩的主体名称。'无'表示根体。

加速变化。布尔值。如果为真，扭矩将被视为角加速度的变化，而不是物理扭矩（即质量将没有影响）。  

## Outputs

出：执行。

Add a torque to a single rigid body.

Target is Primitive Component

## 图示

![]($-20221218-20204638.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Torque: Vector. Torque to apply. Direction is axis of rotation and magnitude is strength of torque..

Bone Name: Name. If a SkeletalMeshComponent, name of body to apply torque to. 'None' indicates root body..

Accel Change: Boolean. If true, Torque is taken as a change in angular acceleration instead of a physical torque (i.e. mass will have no effect)..  

## Outputs

Out: Exec.

