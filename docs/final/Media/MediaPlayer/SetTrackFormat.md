# SetTrackFormat

在指定的轨道上设置格式。

选择格式将不会切换到指定的轨道。要切换轨道，请使用 SelectTrack 代替。如果轨道已经被选中，格式的改变将被立即应用。

目标是媒体播放器

## 图示

![](/uploads/projects/ue-bluprint/20221218-20014909.png)

## Inputs

在。执行。

目标。媒体播放器对象参考。

轨迹类型。EMediaPlayerTrack 枚举。要更新的轨道的类型。

轨迹索引。整数。要更新的轨道的索引。

格式索引。整数。要选择的格式的索引（必须是有效的）。

## Outputs

出：执行。

返回值。布尔值。如果轨道被选中，则为 true，否则为 false。

<hr>

Set the format on the specified track.

Selecting the format will not switch to the specified track. To switch. tracks, use SelectTrack instead. If the track is already selected, the. format change will be applied immediately.

Target is Media Player

## 图示

![](/uploads/projects/ue-bluprint/20221218-20014909.png)

## Inputs

In: Exec.

Target: Media Player Object Reference.

Track Type: EMediaPlayerTrack Enum. The type of track to update..

Track Index: Integer. The index of the track to update..

Format Index: Integer. The index of the format to select (must be valid)..

## Outputs

Out: Exec.

Return Value: Boolean. true if the track was selected, false otherwise..
