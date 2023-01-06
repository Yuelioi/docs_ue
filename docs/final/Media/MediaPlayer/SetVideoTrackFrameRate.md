# SetVideoTrackFrameRate

设置指定视频轨道的帧率。

目标是媒体播放器

## 图示

![]($-20221218-20015028.png)

## Inputs

在。执行。

目标。媒体播放器对象参考。

轨迹索引。整数。轨迹的索引，如果是选定的，则是INDEX_NONE。

格式索引。整数。音轨格式的索引，或者选定的音轨格式为INDEX_NONE。

帧速率。Float (single-precision).要设置的帧率（必须在格式支持的帧率范围内）。  

## Outputs

出：执行。

返回值。布尔值。成功时为真，否则为假。

Set the frame rate of the specified video track.

Target is Media Player

## 图示

![]($-20221218-20015028.png)

## Inputs

In: Exec.

Target: Media Player Object Reference.

Track Index: Integer. The index of the track, or INDEX_NONE for the selected one..

Format Index: Integer. Index of the track format, or INDEX_NONE for the selected one..

Frame Rate: Float (single-precision). The frame rate to set (must be in range of format's supported frame rates)..  

## Outputs

Out: Exec.

Return Value: Boolean. true on success, false otherwise..

