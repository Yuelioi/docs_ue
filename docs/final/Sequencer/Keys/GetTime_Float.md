# GetTime_Float

从拥有的通道获取此键的时间。

目标是电影场景脚本的浮动键

## 图示

![](/uploads/projects/ue-bluprint/20221218-20493733.png)

## Inputs

目标。电影场景脚本的浮动键对象参考。

时间单位。ESequenceTimeUnit 枚举。时间应该以显示率帧（可能有一个子帧值）或以 Tick Resolution（无子帧值）返回？

## Outputs

返回值。帧时间结构。此键的时间，结合了帧号和它所在的子帧。如果你要求 Tick Resolution，子帧将为零。

<hr>

Gets the time for this key from the owning channel.

Target is Movie Scene Scripting Float Key

## 图示

![](/uploads/projects/ue-bluprint/20221218-20493733.png)

## Inputs

Target: Movie Scene Scripting Float Key Object Reference.

Time Unit: ESequenceTimeUnit Enum. Should the time be returned in Display Rate frames (possibly with a sub-frame value) or in Tick Resolution with no sub-frame values?.

## Outputs

Return Value: Frame Time Structure. The time of this key which combines both the frame number and the sub-frame it is on. Sub-frame will be zero if you request Tick Resolution..
