# QuaternionSpringInterp

使用一个简单的弹簧模型，将四元数从 Current 插值到 Target。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19511922.png)

## Inputs

在。执行。

目前。Quat 结构。目前的价值。

目标。Quat 结构。目标值。

弹簧状态。四元组弹簧状态结构（通过参考）。与弹簧模型相关的数据（速度，误差，等等...）--为每个弹簧创建一个唯一的变量。

硬度。浮点（单精度）。弹簧模型的刚度如何（更多的刚度意味着围绕目标值的更多摆动）。

临界阻尼系数。浮动（单精度）。对弹簧施加多少阻尼（0 意味着没有阻尼，1 意味着临界阻尼，意味着没有振荡）。

三角洲时间。浮点数（单精度）。自上次更新以来的时间差。

质量。浮点（单精度）。倍数，作用类似于弹簧上的质量。

目标速度量。浮点（单精度）。如果是 1，那么将计算并使用目标速度，这将导致更紧密地跟随目标/没有滞后。数值降至零（建议在使用此功能来平滑数据时）将逐渐禁用此效果。

从目标初始化：布尔值。如果设置，那么当前值将在第一次更新时从目标设置。

## Outputs

出：执行。

返回值。Quat 结构。

<hr>

Uses a simple spring model to interpolate a quaternion from Current to Target.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19511922.png)

## Inputs

In: Exec.

Current: Quat Structure. Current value.

Target: Quat Structure. Target value.

Spring State: Quaternion Spring State Structure (by ref). Data related to spring model (velocity, error, etc..) - Create a unique variable per spring.

Stiffness: Float (single-precision). How stiff the spring model is (more stiffness means more oscillation around the target value).

Critical Damping Factor: Float (single-precision). How much damping to apply to the spring (0 means no damping, 1 means critically damped which means no oscillation).

Delta Time: Float (single-precision). Time difference since the last update.

Mass: Float (single-precision). Multiplier that acts like mass on a spring.

Target Velocity Amount: Float (single-precision). If 1 then the target velocity will be calculated and used, which results following the target more closely/without lag. Values down to zero (recommended when using this to smooth data) will progressively disable this effect..

Initialize from Target: Boolean. If set then the current value will be set from the target on the first update.

## Outputs

Out: Exec.

Return Value: Quat Structure.
