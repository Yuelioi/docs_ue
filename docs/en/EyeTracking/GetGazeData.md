# GetGazeData

Returns unfied gaze data from the eye tracker. This is a single gaze ray, representing the fusion of both eyes.

Target is Eye Tracker Function Library

## 图示

![]($-20221218-18593289.png)

## Inputs

In: Exec.  

## Outputs

Out: Exec.

Out Gaze Data: Eye Tracker Gaze Data Structure.

Return Value: Boolean. True if the returned gaze data is valid, false otherwise. A false return is likely to be common (e.g. the when user blinks)..

