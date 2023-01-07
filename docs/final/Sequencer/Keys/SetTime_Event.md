# SetTime_Event

设置该键在所属通道的时间。将取代该通道中已经存在的该帧数的任何键。

目标是电影场景脚本的事件键

## 图示

![](/uploads/projects/ue-bluprint/20221218-20504688.png)

## Inputs

在。执行。

目标。电影场景脚本事件的关键对象参考。

新的框架编号。帧号结构（通过参考）。这个键应该被移到哪个帧？这应该是由 TimeUnit.指定的时间单位。

子帧。Float（单精度）。如果使用显示率时间，这个子帧应该到什么地方去？钳制[0-1]，当 TimeUnit 被设置为 Tick Resolution 时被忽略。

时间单位。ESequenceTimeUnit 枚举。NewFrameNumber 应该被解释为显示速率帧还是在 Tick Resolution？

## Outputs

出：执行。

<hr>

Sets the time for this key in the owning channel. Will replace any key that already exists at that frame number in this channel.

Target is Movie Scene Scripting Event Key

## 图示

![](/uploads/projects/ue-bluprint/20221218-20504688.png)

## Inputs

In: Exec.

Target: Movie Scene Scripting Event Key Object Reference.

New Frame Number: Frame Number Structure (by ref). What frame should this key be moved to? This should be in the time unit specified by TimeUnit..

Sub Frame: Float (single-precision). If using Display Rate time, what is the sub-frame this should go to? Clamped [0-1), and ignored with when TimeUnit is set to Tick Resolution..

Time Unit: ESequenceTimeUnit Enum. Should the NewFrameNumber be interpreted as Display Rate frames or in Tick Resolution?.

## Outputs

Out: Exec.
