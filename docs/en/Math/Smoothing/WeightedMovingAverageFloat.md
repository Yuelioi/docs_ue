# WeightedMovingAverageFloat

Calculates the new value in a weighted moving average series using the previous value and the weight

Target is Kismet Math Library

## 图示

![]($-20221218-19545303.png)

## Inputs

Current Sample: Float (single-precision). The value to blend with the previous sample to get a new weighted value.

Previous Sample: Float (single-precision). The last value from the series.

Weight: Float (single-precision). The weight to blend with.  

## Outputs

Return Value: Float (single-precision). the next value in the series.

