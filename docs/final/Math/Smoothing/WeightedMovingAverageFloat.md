# WeightedMovingAverageFloat

使用前一个值和权重计算加权移动平均数系列中的新值

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19545303.png)

## Inputs

目前的样本。Float（单精度）。与前一个样本混合的值，以得到一个新的加权值。

以前的样本。Float (single-precision).该系列的最后一个值。

重量。Float（单精度）。要混合的重量。

## Outputs

返回值。Float（单精度）。系列中的下一个值。

<hr>

Calculates the new value in a weighted moving average series using the previous value and the weight

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19545303.png)

## Inputs

Current Sample: Float (single-precision). The value to blend with the previous sample to get a new weighted value.

Previous Sample: Float (single-precision). The last value from the series.

Weight: Float (single-precision). The weight to blend with.

## Outputs

Return Value: Float (single-precision). the next value in the series.
