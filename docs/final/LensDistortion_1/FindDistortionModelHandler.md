# FindDistortionModelHandler

如果存在的话，返回与输入失真源相关的处理程序。如果 bUpdatePicker 为真，输入选取器的引用将被更新，使其属性与找到的处理程序的属性一致

目标是相机校准子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-19401248.png)

## Inputs

目标。相机校准子系统对象参考。

Distortion Handler Picker: Distortion Handler Picker 结构（通过参考）。

更新选取器：布尔值。

## Outputs

返回值。镜头失真模型处理程序基本对象参考。如果存在与输入变形源相关的处理程序，则返回该处理程序。如果 bUpdatePicker 为真，输入选取器的引用将被更新，使其属性与找到的处理程序的属性一致。

<hr>

Return the handler associated with the input distortion source, if one exists. If bUpdatePicker is true, the input picker reference will be updated so that its properties match those of the found handler

Target is Camera Calibration Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-19401248.png)

## Inputs

Target: Camera Calibration Subsystem Object Reference.

Distortion Handler Picker: Distortion Handler Picker Structure (by ref).

Update Picker: Boolean.

## Outputs

Return Value: Lens Distortion Model Handler Base Object Reference. Return the handler associated with the input distortion source, if one exists. If bUpdatePicker is true, the input picker reference will be updated so that its properties match those of the found handler.
