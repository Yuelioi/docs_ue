# FloatSpringInterp

Uses a simple spring model to interpolate a float from Current to Target.

Target is Kismet Math Library

## 图示

![]($-20221218-19511662.png)

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

