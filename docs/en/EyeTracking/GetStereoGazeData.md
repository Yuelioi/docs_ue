# GetStereoGazeData

Returns stereo gaze data from the eye tracker. This includes a gaze ray per eye, as well as a fixation point.

Target is Eye Tracker Function Library

## 图示

![]($-20221218-18593402.png)

## Inputs

In: Exec.  

## Outputs

Out: Exec.

Out Gaze Data: Eye Tracker Stereo Gaze Data Structure.

Return Value: Boolean. True if the returned gaze data is valid, false otherwise. A false return is likely to be common (e.g. the when user blinks)..

