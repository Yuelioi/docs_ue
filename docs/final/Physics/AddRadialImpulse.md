# AddRadialImpulse

给这个组件中的所有刚体添加一个脉冲，从指定位置向外辐射。

目标是原始组件

## 图示

![]($-20221218-20204399.png)

## Inputs

在。执行。

目标。原始组件对象参考。

原产地。矢量。径向冲力爆炸的原点，在世界空间。

半径。Float（单精度）。径向冲力的大小。超过这个距离的原点，将不会有任何影响。

强度。Float（单精度）。应用于身体的最大脉冲强度。

Falloff:ERadialImpulseFalloff枚举。允许你控制脉冲的强度作为与原点的距离的函数。

维尔变化。布尔值。如果为真，强度将被视为速度的变化而不是冲力（即质量没有影响）。  

## Outputs

出：执行。

Add an impulse to all rigid bodies in this component, radiating out from the specified position.

Target is Primitive Component

## 图示

![]($-20221218-20204399.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Origin: Vector. Point of origin for the radial impulse blast, in world space.

Radius: Float (single-precision). Size of radial impulse. Beyond this distance from Origin, there will be no affect..

Strength: Float (single-precision). Maximum strength of impulse applied to body..

Falloff: ERadialImpulseFalloff Enum. Allows you to control the strength of the impulse as a function of distance from Origin..

Vel Change: Boolean. If true, the Strength is taken as a change in velocity instead of an impulse (ie. mass will have no effect)..  

## Outputs

Out: Exec.

