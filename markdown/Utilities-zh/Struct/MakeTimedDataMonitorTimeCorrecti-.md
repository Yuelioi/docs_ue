# MakeTimedDataMonitorTimeCorrecti-

添加一个节点，从其成员中创建一个 "TimedDataMonitorTimeCorrectionParameters"。

## 图示

![]($-20221218-15032542.png)

## Inputs

允许调整缓冲区大小。Boolean.允许的缓冲区大小：。如果不可能校准，我们是否允许增加缓冲区的大小。

允许的缓冲区收缩。Boolean.允许的缓冲区收缩：。当调整缓冲区的大小时，我们是否允许缩小它们。

如果缓冲区不能被调整大小，则失败。Boolean.Failed if Buffer Cant be Resize:（缓冲区不能调整大小时失败）。当调整缓冲区的大小时，如果缓冲区不能被调整大小，则校准失败。

使用标准偏差。布尔型。使用标准偏差：。校准时，确保评价包含在STD.内。

标准偏差的数量。整数。标准差的数量：。当使用STD时，我们应该使用多少个。

## Outputs

计时数据监控器时间校正参数。定时数据监测器时间校正参数结构。
