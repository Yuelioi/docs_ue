# UpdateExternalTr-

Called after calibration to attempt to pull the internal tracker (e.g. HMD tracking) in line with the external tracker. (e.g. mocap tracker). This will set the internal tracker's base offset and rotation to match and realign the two systems.. This can be called every tick, or whenever realignment is desired. Note that this may cause choppy movement if the two. systems diverge relative to each other, or a big jump if called infrequently when there has been significant drift

Target is Head Mounted Display Function Library

## 图示

![]($-20221218-19234332.png)

## Inputs

In: Exec.

External Tracking Transform: Transform (by ref). The transform in world-coordinates, of the reference marker of the external tracking system.  

## Outputs

Out: Exec.

