# CalibrateExterna-

用于校准外部跟踪源与内部跟踪源之间的偏移变换。(例如，Mocap跟踪器与HMD跟踪器的关系）。每个会话应该调用一次，或者当外部跟踪器和内部跟踪器之间的物理关系发生变化时（例如，它被碰撞或重新连接）。校准后，调用UpdateExternalTrackingPosition将尝试将内部跟踪器校正到校准的偏移量，以防止两个系统之间的漂移。

目标是头戴式显示器功能库

## 图示

![]($-20221218-19234220.png)

## Inputs

在。执行。

外部跟踪转化。Transform (by ref).外部追踪系统的参考标记在世界坐标中的变换。  

## Outputs

出：执行。

Called to calibrate the offset transform between an external tracking source and the internal tracking source. (e.g. mocap tracker to and HMD tracker). This should be called once per session, or when the physical relationship. between the external tracker and internal tracker changes (e.g. it was bumped or reattached). After calibration,. calling UpdateExternalTrackingPosition will try to correct the internal tracker to the calibrated offset to prevent. drift between the two systems

Target is Head Mounted Display Function Library

## 图示

![]($-20221218-19234220.png)

## Inputs

In: Exec.

External Tracking Transform: Transform (by ref). The transform in world-coordinates, of the reference marker of the external tracking system.  

## Outputs

Out: Exec.

