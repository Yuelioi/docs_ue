# PlaySteamVRHapticFeedback

Generate haptic feedback in the requested controller

Target is Steam VRInput Device Function Library

## 图示

![]($-20221218-21044536.png)

## Inputs

In: Exec.

Hand: ESteamVRHand Enum. Which hand to send the controller feedback to.

Start Seconds from Now: Float (single-precision). When to start the haptic feedback.

Duration Seconds: Float (single-precision). How long to have the haptic feedback active.

Frequency: Float (single-precision). Frequency used in the haptic feedback.

Amplitude: Float (single-precision). Amplitude used in the haptic feedback.  

## Outputs

Out: Exec.

