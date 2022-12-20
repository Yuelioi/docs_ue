# MakeSubmixEffectDelaySettings

Adds a node that create a 'SubmixEffectDelaySettings' from its members

## 图示

![]($-20221218-15024153.png)

## Inputs

Maximum Delay Length: Float (single-precision). Maximum Delay Length:. Maximum possible length for a delay, in milliseconds. Changing this at runtime will reset the effect..

Interpolation Time: Float (single-precision). Interpolation Time:. Number of milliseconds over which a tap will reach it's set length and gain. Smaller values are more responsive, while larger values will make pitching less dramatic..

Delay Length: Float (single-precision). Delay Length:. Number of milliseconds of delay. Caps at max delay at runtime..  

## Outputs

Submix Effect Delay Settings: Submix Effect Delay Settings Structure.

