# SetHapticsbyValue

Sets the value of the haptics for the specified hand directly, using frequency and amplitude. NOTE: If a curve is already. playing for this hand, it will be cancelled in favour of the specified values.

Target is Player Controller

## 图示

![]($-20221218-19055422.png)

## Inputs

In: Exec.

Target: Player Controller Object Reference.

Frequency: Float (single-precision). The normalized frequency [0.0, 1.0] to play through the haptics system.

Amplitude: Float (single-precision). The normalized amplitude [0.0, 1.0] to set the haptic feedback to.

Hand: EControllerHand Enum. Which hand to play the effect on.  

## Outputs

Out: Exec.

