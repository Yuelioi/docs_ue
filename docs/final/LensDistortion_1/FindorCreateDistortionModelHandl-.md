# FindorCreateDistortionModelHandl-

如果存在与输入失真源相关的处理程序，并与输入模型匹配，则返回该处理程序。如果不存在，则创建一个新的处理程序并返回。

目标是相机校准子系统

## 图示

![]($-20221218-19401349.png)

## Inputs

在。执行。

目标。相机校准子系统对象参考。

Distortion Handler Picker: Distortion Handler Picker结构（通过参考）。

镜头模型类。镜头模型类参考。  

## Outputs

出：执行。

返回值。镜头失真模型处理程序基本对象参考。返回与输入变形源相关的处理程序，如果存在一个与输入模型相匹配的处理程序。如果不存在，则创建一个新的处理程序并返回。

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

