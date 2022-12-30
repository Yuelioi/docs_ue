# BreakMeterResults

添加一个节点，将'MeterResults'分解成其成员字段

## 图示

![]($-20221218-14400296.png)

## Inputs

仪表结果。仪表结果结构（按参考）。  

## Outputs

时间秒数。Float（单精度）。时间秒数：。该仪表分析结果的分析开始后的时间，单位是秒。

仪表值。浮点（单精度）。仪表值：。仪表值。

峰值。Float (single-precision).峰值：。峰值值。

Num Samples Clipping:整数。Num Samples Clipping:.在这段时间内，超过削波阈值的样本数。如果没有检测到削波，则为0。

剪切值。Float (single-precision).削波值：。如果在削波阈值以上检测到削波，该值（如果非零）。
