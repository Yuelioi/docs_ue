# CalcVelocity

Updates Velocity and Acceleration based on the current state, applying the effects of friction and acceleration or deceleration. Does not apply gravity.. This is used internally during movement updates. Normally you don't need to call this from outside code, but you might want to use it for custom movement modes.

Target is Character Movement Component

## 图示

![]($-20221218-20180496.png)

## Inputs

In: Exec.

Target: Character Movement Component Object Reference.

Delta Time: Float (single-precision). time elapsed since last frame..

Friction: Float (single-precision). coefficient of friction when not accelerating, or in the direction opposite acceleration..

Fluid: Boolean. true if moving through a fluid, causing Friction to always be applied regardless of acceleration..

Braking Deceleration: Float (single-precision). deceleration applied when not accelerating, or when exceeding max velocity..  

## Outputs

Out: Exec.

