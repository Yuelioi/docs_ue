# BreakFrameMetrics

Adds a node that breaks a 'FrameMetrics' into its member fields

## 图示

![]($-20221218-14361557.png)

## Inputs

Frame Metrics: Frame Metrics Structure (by ref).  

## Outputs

Total Elapsed Time: Float (single-precision). Total Elapsed Time:. The total amount of time, in seconds, since the capture started.

Frame Delta: Float (single-precision). Frame Delta:. The total amount of time, in seconds, that this specific frame took to render (not accounting for dropped frames).

Frame Number: Integer. Frame Number:. The index of this frame from the start of the capture, including dropped frames.

Num Dropped Frames: Integer. Num Dropped Frames:. The number of frames we dropped in-between this frame, and the last one we captured.

