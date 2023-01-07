# GetGazeData

返回来自眼球追踪器的未证实的注视数据。这是一个单一的注视射线，代表双眼的融合。

目标是眼球追踪器功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18593289.png)

## Inputs

In: Exec.

## Outputs

出：执行。

输出注视数据。眼球追踪器凝视数据结构。

返回值。布尔值。如果返回的凝视数据是有效的，则为真，否则为假。一个假的返回很可能是常见的（例如，当用户眨眼时）。

<hr>

Returns unfied gaze data from the eye tracker. This is a single gaze ray, representing the fusion of both eyes.

Target is Eye Tracker Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18593289.png)

## Inputs

In: Exec.

## Outputs

Out: Exec.

Out Gaze Data: Eye Tracker Gaze Data Structure.

Return Value: Boolean. True if the returned gaze data is valid, false otherwise. A false return is likely to be common (e.g. the when user blinks)..
