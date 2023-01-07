# FloatSpringInterp

使用一个简单的弹簧模型，将一个浮点从 Current 插到 Target。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19511662.png)

## Inputs

在。执行。

电流。Float（单精度）。当前值。

目标。Float（单精度）。目标值。

弹簧状态。浮动的弹簧状态结构（通过参考）。与弹簧模型相关的数据（速度，误差等...）- 为每个弹簧创建一个唯一的变量。

硬度。浮点（单精度）。弹簧模型的刚度如何（更多的刚度意味着围绕目标值的更多摆动）。

临界阻尼系数。浮动（单精度）。对弹簧施加多少阻尼（0 意味着没有阻尼，1 意味着临界阻尼，意味着没有振荡）。

三角洲时间。浮点数（单精度）。自上次更新以来的时间差。

质量。浮点（单精度）。倍数，作用类似于弹簧上的质量。

目标速度量。浮点（单精度）。如果是 1，那么将计算并使用目标速度，这将导致更紧密地跟随目标/没有滞后。数值降至零（建议在使用此功能来平滑数据时）将逐渐禁用此效果。

钳制。布尔值。是否使用最小/最大值来夹紧运动。

最小值。Float（单精度）。夹住最小输出值，如果达到这个限制，就取消速度。

最大值。浮点数（单精度）。夹住最大输出值，如果达到这个极限，就取消速度。

从目标初始化：布尔值。如果设置，那么当前值将在第一次更新时从目标设置。

## Outputs

出：执行。

返回值。浮点数（单精度）。

<hr>

Uses a simple spring model to interpolate a float from Current to Target.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19511662.png)

## Inputs

In: Exec.

Current: Float (single-precision). Current value.

Target: Float (single-precision). Target value.

Spring State: Float Spring State Structure (by ref). Data related to spring model (velocity, error, etc..) - Create a unique variable per spring.

Stiffness: Float (single-precision). How stiff the spring model is (more stiffness means more oscillation around the target value).

Critical Damping Factor: Float (single-precision). How much damping to apply to the spring (0 means no damping, 1 means critically damped which means no oscillation).

Delta Time: Float (single-precision). Time difference since the last update.

Mass: Float (single-precision). Multiplier that acts like mass on a spring.

Target Velocity Amount: Float (single-precision). If 1 then the target velocity will be calculated and used, which results following the target more closely/without lag. Values down to zero (recommended when using this to smooth data) will progressively disable this effect..

Clamp: Boolean. Whether to use the Min/Max values to clamp the motion.

Min Value: Float (single-precision). Clamps the minimum output value and cancels the velocity if it reaches this limit.

Max Value: Float (single-precision). Clamps the maximum output value and cancels the velocity if it reaches this limit.

Initialize from Target: Boolean. If set then the current value will be set from the target on the first update.

## Outputs

Out: Exec.

Return Value: Float (single-precision).
