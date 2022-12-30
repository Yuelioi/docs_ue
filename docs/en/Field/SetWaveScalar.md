# SetWaveScalar

Set a temporal wave scalar value according to the sample distance from the field position.

Target is Wave Scalar

## 图示

![]($-20221218-19001364.png)

## Inputs

Target: Wave Scalar Object Reference.

Field Magnitude: Float (single-precision). Magnitude of the wave function.

Center Position: Vector. Center position of the wave field.

Wave Length: Float (single-precision). Distance between 2 wave peaks.

Wave Period: Float (single-precision). Time over which the wave will travel from one peak to another one. The wave velocity is proportional to wavelength/period.

Wave Function: EWaveFunctionType Enum. Wave function used for the field.

Falloff Type: EFieldFalloffType Enum. Type of falloff function used if the falloff function is picked.  

## Outputs

Return Value: Wave Scalar Object Reference.

