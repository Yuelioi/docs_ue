# AddRadialForce

给这个组件中的所有物体增加一个力，这个力来自于提供的世界空间位置。

目标是原始组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20204287.png)

## Inputs

在。执行。

目标。原始组件对象参考。

原产地。矢量。世界空间中力的起源.

半径。Float（单精度）。施加力的半径。

强度。Float（单精度）。应用的力的强度...

Falloff:ERadialImpulseFalloff 枚举。允许你控制力的强度作为与原点距离的函数。

加速变化。布尔值。如果为真，力量将被视为加速度的变化，而不是物理力（即质量没有影响）。

## Outputs

出：执行。

<hr>

Add a force to all bodies in this component, originating from the supplied world-space location.

Target is Primitive Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20204287.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Origin: Vector. Origin of force in world space..

Radius: Float (single-precision). Radius within which to apply the force..

Strength: Float (single-precision). Strength of force to apply..

Falloff: ERadialImpulseFalloff Enum. Allows you to control the strength of the force as a function of distance from Origin..

Accel Change: Boolean. If true, Strength is taken as a change in acceleration instead of a physical force (i.e. mass will have no effect)..

## Outputs

Out: Exec.
