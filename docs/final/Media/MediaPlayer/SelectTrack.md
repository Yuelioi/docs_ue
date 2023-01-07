# SelectTrack

选择给定类型的活动轨道。

选定的轨道将使用其当前的活动格式。活动的格式将以每条轨道为基础被记住。第一个可用的格式是通过以下方式激活的

1.要切换音轨格式，请使用 SetTrackFormat 代替。

目标是媒体播放器

## 图示

![](/uploads/projects/ue-bluprint/20221218-20013981.png)

## Inputs

在。执行。

目标。媒体播放器对象参考。

轨迹类型。EMediaPlayerTrack 枚举。要选择的轨道类型。

轨迹索引。整数。要选择的轨道的索引，或 INDEX_NONE，取消选择。

## Outputs

出：执行。

返回值。布尔值。如果轨道被选中，则为 true，否则为 false。

<hr>

Select the active track of the given type.

The selected track will use its currently active format. Active formats will. be remembered on a per track basis. The first available format is active by

1. To switch the track format, use SetTrackFormat instead.

Target is Media Player

## 图示

![](/uploads/projects/ue-bluprint/20221218-20013981.png)

## Inputs

In: Exec.

Target: Media Player Object Reference.

Track Type: EMediaPlayerTrack Enum. The type of track to select..

Track Index: Integer. The index of the track to select, or INDEX_NONE to deselect..

## Outputs

Out: Exec.

Return Value: Boolean. true if the track was selected, false otherwise..
