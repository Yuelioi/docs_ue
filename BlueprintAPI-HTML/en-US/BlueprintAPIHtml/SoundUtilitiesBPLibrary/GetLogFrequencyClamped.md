# GetLogFrequencyClamped

Returns the log frequency of the input value. Maps linear domain and range values to log output (good for linear slider controlling frequency)

Target is Sound Utilities BPFunction Library

## 图示

![]($-20221218-20594168.png)

## Inputs

In: Exec.

In Value: Float (single-precision). The linear value to convert to logarithmic frequency.

In Domain: Vector 2D Structure (by ref). The domain to use when converting between linear and logarithmic scales.

In Range: Vector 2D Structure (by ref). The range to use when converting between linear and logarithmic scales.  

## Outputs

Out: Exec.

Return Value: Float (single-precision). The log frequency of the given input.

