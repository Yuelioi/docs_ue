# GetTime_ObjectPath

从拥有的通道获取此键的时间。

目标是电影场景脚本的对象路径键

## 图示

![]($-20221218-20493958.png)

## Inputs

目标。电影场景脚本对象路径关键对象参考。

时间单位。ESequenceTimeUnit枚举。时间应该以显示速率帧（可能有一个子帧值）或以Tick Resolution（无子帧值）返回？  

## Outputs

返回值。帧时间结构。此键的时间，结合了帧号和它所在的子帧。如果你要求Tick Resolution，子帧将为零。
