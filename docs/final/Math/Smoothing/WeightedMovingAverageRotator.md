# WeightedMovingAverageRotator

使用前一个值和权重计算加权移动平均数系列中的新值

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19545434.png)

## Inputs

目前的样品。旋转器。与前一个样本混合的值，以得到一个新的加权值。

以前的样品。旋转器。该系列的最后一个值。

重量。Float（单精度）。要混合的重量。

## Outputs

返回值。旋转器。系列中的下一个值。

<hr>

Calculates the new value in a weighted moving average series using the previous value and the weight

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19545434.png)

## Inputs

Current Sample: Rotator. The value to blend with the previous sample to get a new weighted value.

Previous Sample: Rotator. The last value from the series.

Weight: Float (single-precision). The weight to blend with.

## Outputs

Return Value: Rotator. the next value in the series.
