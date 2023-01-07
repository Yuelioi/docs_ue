# WeightedMovingAverageVector

使用前一个值和权重计算加权移动平均数系列中的新值

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19545569.png)

## Inputs

目前的样本。向量。与前一个样本混合的值，得到一个新的加权值。

以前的样品。向量。该系列的最后一个值。

重量。Float（单精度）。要混合的重量。

## Outputs

返回值。矢量。系列中的下一个值。

<hr>

Calculates the new value in a weighted moving average series using the previous value and the weight

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19545569.png)

## Inputs

Current Sample: Vector. The value to blend with the previous sample to get a new weighted value.

Previous Sample: Vector. The last value from the series.

Weight: Float (single-precision). The weight to blend with.

## Outputs

Return Value: Vector. the next value in the series.
