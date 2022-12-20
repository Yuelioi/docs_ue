# QuaternionSpringInterp

Uses a simple spring model to interpolate a quaternion from Current to Target.

Target is Kismet Math Library

## 图示

![]($-20221218-19511922.png)

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

