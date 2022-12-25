# WeightedMovingAverageFloat

使用前一个值和权重计算加权移动平均数系列中的新值

目标是Kismet数学图书馆

## 图示

![]($-20221218-19545303.png)

## Inputs

目前的样本。Float（单精度）。与前一个样本混合的值，以得到一个新的加权值。

以前的样本。Float (single-precision).该系列的最后一个值。

重量。Float（单精度）。要混合的重量。  

## Outputs

返回值。Float（单精度）。系列中的下一个值。
