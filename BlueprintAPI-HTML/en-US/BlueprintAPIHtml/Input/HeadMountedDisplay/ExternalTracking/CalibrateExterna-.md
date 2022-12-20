# CalibrateExterna-

Called to calibrate the offset transform between an external tracking source and the internal tracking source. (e.g. mocap tracker to and HMD tracker). This should be called once per session, or when the physical relationship. between the external tracker and internal tracker changes (e.g. it was bumped or reattached). After calibration,. calling UpdateExternalTrackingPosition will try to correct the internal tracker to the calibrated offset to prevent. drift between the two systems

Target is Head Mounted Display Function Library

## 图示

![]($-20221218-19234220.png)

## Inputs

In: Exec.

External Tracking Transform: Transform (by ref). The transform in world-coordinates, of the reference marker of the external tracking system.  

## Outputs

Out: Exec.

