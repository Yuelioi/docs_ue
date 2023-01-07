# GetStereoGazeData

返回来自眼部追踪器的立体注视数据。这包括每只眼睛的注视射线，以及一个固定点。

目标是眼球追踪器功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18593402.png)

## Inputs

In: Exec.

## Outputs

出：执行。

输出注视数据。眼球追踪器立体注视数据结构。

返回值。布尔值。如果返回的凝视数据是有效的，则为真，否则为假。一个假的返回很可能是常见的（例如，当用户眨眼时）。

<hr>

Returns stereo gaze data from the eye tracker. This includes a gaze ray per eye, as well as a fixation point.

Target is Eye Tracker Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18593402.png)

## Inputs

In: Exec.

## Outputs

Out: Exec.

Out Gaze Data: Eye Tracker Stereo Gaze Data Structure.

Return Value: Boolean. True if the returned gaze data is valid, false otherwise. A false return is likely to be common (e.g. the when user blinks)..
