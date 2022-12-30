# UpdateControlBusMix

Commits updates from a UObject definition of a bus mix to active instance in audio thread. (ignored if mix has not been activated).

Target is Audio Modulation Statics

## 图示

![]($-20221218-18081302.png)

## Inputs

In: Exec.

Mix: Sound Control Bus Mix Object Reference. Mix to update.

Fade Time: Float (single-precision). Fade time to user when interpolating between current value and new values. If negative, falls back to last fade time set on stage. If fade time never set on stage, uses attack time set on stage in mix asset..  

## Outputs

Out: Exec.

