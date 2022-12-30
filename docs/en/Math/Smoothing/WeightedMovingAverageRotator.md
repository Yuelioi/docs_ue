# WeightedMovingAverageRotator

Calculates the new value in a weighted moving average series using the previous value and the weight

Target is Kismet Math Library

## 图示

![]($-20221218-19545434.png)

## Inputs

Current Sample: Rotator. The value to blend with the previous sample to get a new weighted value.

Previous Sample: Rotator. The last value from the series.

Weight: Float (single-precision). The weight to blend with.  

## Outputs

Return Value: Rotator. the next value in the series.

