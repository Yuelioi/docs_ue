# SetGlobalControlBusMixValue

Sets a Global Control Bus Mix with a single stage associated with the provided Bus to the given float value. This call should. be reserved for buses that are to be always active. It is NOT recommended for transient buses, as not calling clear can keep. buses active indefinitely.

Target is Audio Modulation Statics

## 图示

![]($-20221218-18074426.png)

## Inputs

In: Exec.

Bus: Sound Control Bus Object Reference. Bus associated with mix to update.

Value: Float (single-precision). Value to set global stage to..

Fade Time: Float (single-precision). Fade time to user when interpolating between current value and new value. If negative, falls back to last fade time set on stage. If fade time never set on stage, defaults to 100ms..  

## Outputs

Out: Exec.

