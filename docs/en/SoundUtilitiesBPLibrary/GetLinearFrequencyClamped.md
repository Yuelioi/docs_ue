# GetLinearFrequencyClamped

Returns the linear frequency of the input value. Maps log domain and range values to linear output (good for linear. slider representation/visualization of log frequency). Reverse of GetLogFrequencyClamped.

Target is Sound Utilities BPFunction Library

## 图示

![]($-20221218-20594053.png)

## Inputs

In: Exec.

In Value: Float (single-precision). The logarithmic value to convert to linear frequency.

In Domain: Vector 2D Structure (by ref). The domain to use when converting between linear and logarithmic scales.

In Range: Vector 2D Structure (by ref). The range to use when converting between linear and logarithmic scales.  

## Outputs

Out: Exec.

Return Value: Float (single-precision). The linear frequency of the given logarithmic input.

