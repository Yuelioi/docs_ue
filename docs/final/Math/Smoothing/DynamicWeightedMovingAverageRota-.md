# DynamicWeightedMovingAverageRota-

使用前一个值和一个权重范围来计算加权移动平均数系列中的新值。权重范围是用来根据样本之间的距离进行动态调整的。这允许你对小的噪音更积极地平滑一个值，而让大的运动更少地被平滑（或者反过来）。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19545037.png)

## Inputs

目前的样品。旋转器。与前一个样本混合的值，以得到一个新的加权值。

以前的样品。旋转器。该系列的最后一个值。

最大距离。Float（单精度）。用来作为最小重量或最大重量之间的混合距离。

最小重量。Float（单精度）。当距离很小时使用的重量。

最大重量。Float（单精度）。距离较大时使用的重量。

## Outputs

返回值。旋转器。系列中的下一个值。

<hr>

Calculates the new value in a weighted moving average series using the previous value and a weight range.. The weight range is used to dynamically adjust based upon distance between the samples. This allows you to smooth a value more aggressively for small noise and let large movements be smoothed less (or vice versa)

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19545037.png)

## Inputs

Current Sample: Rotator. The value to blend with the previous sample to get a new weighted value.

Previous Sample: Rotator. The last value from the series.

Max Distance: Float (single-precision). Distance to use as the blend between min weight or max weight.

Min Weight: Float (single-precision). The weight use when the distance is small.

Max Weight: Float (single-precision). The weight use when the distance is large.

## Outputs

Return Value: Rotator. the next value in the series.
