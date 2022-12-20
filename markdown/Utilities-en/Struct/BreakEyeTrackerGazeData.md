# BreakEyeTrackerGazeData

Adds a node that breaks a 'EyeTrackerGazeData' into its member fields

## 图示

![]($-20221218-14355715.png)

## Inputs

Eye Tracker Gaze Data: Eye Tracker Gaze Data Structure (by ref).  

## Outputs

Gaze Origin: Vector. Gaze Origin:. Origin of the unified gaze ray..

Gaze Direction: Vector. Gaze Direction:. Forward direction of the unified gaze ray..

Fixation Point: Vector. Fixation Point:. Location that the eyes converge. This is the 3d point where the tracked viewer is looking..

Confidence Value: Float (single-precision). Confidence Value:. Value [0..1] that represents confidence in the gaze ray data above. Stable, reliably tracked eyes will be at or near 1. Fast-moving or unreliably tracked eyes will be at or near 0..

