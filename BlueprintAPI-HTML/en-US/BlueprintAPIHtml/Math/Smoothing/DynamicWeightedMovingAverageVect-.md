# DynamicWeightedMovingAverageVect-

Calculates the new value in a weighted moving average series using the previous value and a weight range.. The weight range is used to dynamically adjust based upon distance between the samples. This allows you to smooth a value more aggressively for small noise and let large movements be smoothed less (or vice versa)

Target is Kismet Math Library

## 图示

![]($-20221218-19545164.png)

## Inputs

Current Sample: Vector. The value to blend with the previous sample to get a new weighted value.

Previous Sample: Vector. The last value from the series.

Max Distance: Float (single-precision). Distance to use as the blend between min weight or max weight.

Min Weight: Float (single-precision). The weight use when the distance is small.

Max Weight: Float (single-precision). The weight use when the distance is large.  

## Outputs

Return Value: Vector. the next value in the series.

