# BreakAbcSamplingSettings

Adds a node that breaks a 'AbcSamplingSettings' into its member fields

## 图示

![]($-20221218-14303560.png)

## Inputs

Abc Sampling Settings: Abc Sampling Settings Structure (by ref).  

## Outputs

Sampling Type: EAlembicSamplingType Enum. Sampling Type:. Type of sampling performed while importing the animation.

Frame Steps: Integer. Frame Steps:. Steps to take when sampling the animation.

Time Steps: Float (single-precision). Time Steps:. Time steps to take when sampling the animation.

Frame Start: Integer. Frame Start:. Starting index to start sampling the animation from.

Frame End: Integer. Frame End:. Ending index to stop sampling the animation at.

Skip Empty Frames At Start Of Alembic Sequence: Boolean. Skip Empty:. Skip empty (pre-roll) frames and start importing at the frame which actually contains data.

