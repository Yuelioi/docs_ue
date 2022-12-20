# FindorCreateDistortionModelHandl-

Return the handler associated with the input distortion source, if one exists that also matches the input model. If none exist, create a new handler and return it.

Target is Camera Calibration Subsystem

## 图示

![]($-20221218-19401349.png)

## Inputs

In: Exec.

Target: Camera Calibration Subsystem Object Reference.

Distortion Handler Picker: Distortion Handler Picker Structure (by ref).

Lens Model Class: Lens Model Class Reference.  

## Outputs

Out: Exec.

Return Value: Lens Distortion Model Handler Base Object Reference. Return the handler associated with the input distortion source, if one exists that also matches the input model. If none exist, create a new handler and return it..

