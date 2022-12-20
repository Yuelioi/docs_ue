# SetControlBusMix

Sets a Control Bus Mix with the provided stage data, if the stages. are provided in an active instance proxy of the mix.. Does not update UObject definition of the mix.

Target is Audio Modulation Statics

## 图示

![]($-20221218-18074163.png)

## Inputs

In: Exec.

Mix: Sound Control Bus Mix Object Reference. Mix to update.

Stages: Array of Sound Control Bus Mix Stage Structures. Stages to set. If stage's bus is not referenced by mix, stage's update request is ignored..

Fade Time: Float (single-precision). Fade time to user when interpolating between current value and new values. If negative, falls back to last fade time set on stage. If fade time never set on stage, uses attack time set on stage in mix asset..  

## Outputs

Out: Exec.

