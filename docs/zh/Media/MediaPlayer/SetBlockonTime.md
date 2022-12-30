# SetBlockonTime

设定封锁的时间。

如果设置，该播放器将在TickInput或TickFetch中阻断，直到指定时间的视频样本实际可用。

目标是媒体播放器

## 图示

![]($-20221218-20014094.png)

## Inputs

在。执行。

目标。媒体播放器对象参考。

时间：Timespan结构（通过引用）。阻止的时间，或者是FTimespan::MinValue来禁止的。  

## Outputs

出：执行。
