# BreakEyeTrackerStereoGazeData

Adds a node that breaks a 'EyeTrackerStereoGazeData' into its member fields

## 图示

![]($-20221218-14355802.png)

## Inputs

Eye Tracker Stereo Gaze Data: Eye Tracker Stereo Gaze Data Structure (by ref).  

## Outputs

Left Eye Origin: Vector. Left Eye Origin:. Origin of the left eye's gaze ray..

Left Eye Direction: Vector. Left Eye Direction:. Forward direction of the left eye's gaze ray..

Right Eye Origin: Vector. Right Eye Origin:. Origin of the right eye's gaze ray..

Right Eye Direction: Vector. Right Eye Direction:. Forward direction of the right eye's gaze ray..

Fixation Point: Vector. Fixation Point:. Location that the eyes converge. This is the 3d point where the tracked viewer is looking..

Confidence Value: Float (single-precision). Confidence Value:. Value [0..1] that represents confidence in the gaze ray data above. Stable, reliably tracked eyes will be at or near 1. Fast-moving or unreliably tracked eyes will be at or near 0..

