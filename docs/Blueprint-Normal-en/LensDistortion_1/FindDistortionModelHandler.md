# FindDistortionModelHandler

Return the handler associated with the input distortion source, if one exists. If bUpdatePicker is true, the input picker reference will be updated so that its properties match those of the found handler

Target is Camera Calibration Subsystem

## 图示

![]($-20221218-19401248.png)

## Inputs

Target: Camera Calibration Subsystem Object Reference.

Distortion Handler Picker: Distortion Handler Picker Structure (by ref).

Update Picker: Boolean.  

## Outputs

Return Value: Lens Distortion Model Handler Base Object Reference. Return the handler associated with the input distortion source, if one exists. If bUpdatePicker is true, the input picker reference will be updated so that its properties match those of the found handler.

