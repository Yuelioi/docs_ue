# ClearGlobalControlBusMixValue

Clears global control bus mix if set, using the applied fade time to return to the provided bus's parameter default value.

Target is Audio Modulation Statics

## 图示

![]($-20221218-18024497.png)

## Inputs

In: Exec.

Bus: Sound Control Bus Object Reference. Bus associated with mix to update.

Fade Time: Float (single-precision). Fade time to user when interpolating between current value and new values. If non-positive, change is immediate..  

## Outputs

Out: Exec.

