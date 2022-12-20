# BreakMeterResults

Adds a node that breaks a 'MeterResults' into its member fields

## 图示

![]($-20221218-14400296.png)

## Inputs

Meter Results: Meter Results Structure (by ref).  

## Outputs

Time Seconds: Float (single-precision). Time Seconds:. The time in seconds since analysis began of this meter analysis result.

Meter Value: Float (single-precision). Meter Value:. The meter value.

Peak Value: Float (single-precision). Peak Value:. The peak value.

Num Samples Clipping: Integer. Num Samples Clipping:. The number of samples in the period which were above the clipping threshold. Will be 0 if no clipping was detected..

Clipping Value: Float (single-precision). Clipping Value:. The value (if non-zero) if clipping was detected above the clipping threshold.

