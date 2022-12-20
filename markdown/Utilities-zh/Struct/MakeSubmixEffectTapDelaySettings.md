# MakeSubmixEffectTapDelaySettings

Adds a node that create a 'SubmixEffectTapDelaySettings' from its members

## 图示

![]($-20221218-15025127.png)

## Inputs

Maximum Delay Length: Float (single-precision). Maximum Delay Length:. Maximum possible length for a delay, in milliseconds. Changing this at runtime will reset the effect..

Interpolation Time: Float (single-precision). Interpolation Time:. Number of milliseconds over which a tap will reach it's set length and gain. Smaller values are more responsive, while larger values will make pitching less dramatic..

Taps: Array of Tap Delay Info Structures. Taps:. Each tap's metadata.  

## Outputs

Submix Effect Tap Delay Settings: Submix Effect Tap Delay Settings Structure.

