# MakeEyeTrackerGazeData

Adds a node that create a 'EyeTrackerGazeData' from its members

## 图示

![]($-20221218-14523659.png)

## Inputs

Gaze Origin: Vector. Gaze Origin:. Origin of the unified gaze ray..

Gaze Direction: Vector. Gaze Direction:. Forward direction of the unified gaze ray..

Fixation Point: Vector. Fixation Point:. Location that the eyes converge. This is the 3d point where the tracked viewer is looking..

Confidence Value: Float (single-precision). Confidence Value:. Value [0..1] that represents confidence in the gaze ray data above. Stable, reliably tracked eyes will be at or near 1. Fast-moving or unreliably tracked eyes will be at or near 0..  

## Outputs

Eye Tracker Gaze Data: Eye Tracker Gaze Data Structure.

