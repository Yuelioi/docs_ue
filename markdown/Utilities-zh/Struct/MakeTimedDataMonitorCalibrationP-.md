# MakeTimedDataMonitorCalibrationP-

添加一个节点，从其成员中创建一个 "TimedDataMonitorCalibrationParameters"。

## 图示

![]($-20221218-15032169.png)

## Inputs

重试的次数。整数。重试次数：。当需要时，允许多少次重试。

允许调整缓冲区大小。Boolean.允许的缓冲区大小：。如果不可能校准，我们是否允许增加缓冲区的大小。

允许的缓冲区收缩。Boolean.允许的缓冲区收缩：。当调整缓冲区的大小时，我们是否允许缩小它们。

如果缓冲区不能被调整大小，则失败。Boolean.Failed if Buffer Cant be Resize:（缓冲区不能调整大小时失败）。当调整缓冲区的大小时，如果缓冲区不能被调整大小，则校准失败。

使用标准偏差。布尔型。使用标准偏差：。校准时，确保评价包含在STD.内。

标准偏差的数量。整数。标准差的数量：。当使用STD时，我们应该使用多少个。

在使用标准偏差之前重置统计数据。布尔值。使用标准偏差前重设统计数据：。在校准之前，允许重置统计数据。

统计重设后等待的秒数。Float (single-precision).统计复位后等待的秒数：。在校准之前，允许重置统计数据。  

## Outputs

计时数据监控器校准参数。定时数据监控器校准参数结构。
