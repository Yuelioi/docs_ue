# GetDurationOfQuantizationTypeinS-

Returns the duration in seconds of the given Quantization Type

Target is Quartz Clock Handle

## 图示

![]($-20221218-20320739.png)

## Inputs

In: Exec.

Target: Quartz Clock Handle Object Reference.

Quantization Type: EQuartzCommandQuantization Enum (by ref).

Multiplier: Float (single-precision).  

## Outputs

Out: Exec.

Return Value: Float (single-precision). The duration, in seconds, of a multiplier amount of the Quantization Type, or -1 in the case the clock is invalid.

