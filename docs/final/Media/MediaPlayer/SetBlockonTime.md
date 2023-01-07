# SetBlockonTime

设定封锁的时间。

如果设置，该播放器将在 TickInput 或 TickFetch 中阻断，直到指定时间的视频样本实际可用。

目标是媒体播放器

## 图示

![](/uploads/projects/ue-bluprint/20221218-20014094.png)

## Inputs

在。执行。

目标。媒体播放器对象参考。

时间：Timespan 结构（通过引用）。阻止的时间，或者是 FTimespan::MinValue 来禁止的。

## Outputs

出：执行。

<hr>

Set the time on which to block.

If set, this player will block in TickInput or TickFetch until the video sample. for the specified time are actually available.

Target is Media Player

## 图示

![](/uploads/projects/ue-bluprint/20221218-20014094.png)

## Inputs

In: Exec.

Target: Media Player Object Reference.

Time: Timespan Structure (by ref). The time to block on, or FTimespan::MinValue to disable..

## Outputs

Out: Exec.
