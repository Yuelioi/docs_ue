# EvaluateDataRegistryCurve

Attempts to evaluate a curve stored in a DataRegistry cache using a specific input value

Target is Data Registry Subsystem

## 图示

![]($-20221218-18362189.png)

## Inputs

In: Exec.

Item Id: Data Registry Id Structure. Item identifier to lookup in cache.

Input Value: Float (single-precision). Time/level/parameter input value used to evaluate curve at certain position.

Default Value: Float (single-precision). Value to use if no curve found or input is outside acceptable range.  

## Outputs

Found: Exec. Found the row successfully..

Not Found: Exec. Failed to find the row..

Out Value: Float (single-precision). Result will be replaced with evaluated value, or default if that fails.

