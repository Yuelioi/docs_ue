# FindDistortionModelHandler

如果存在的话，返回与输入失真源相关的处理程序。如果bUpdatePicker为真，输入选取器的引用将被更新，使其属性与找到的处理程序的属性一致

目标是相机校准子系统

## 图示

![]($-20221218-19401248.png)

## Inputs

目标。相机校准子系统对象参考。

Distortion Handler Picker: Distortion Handler Picker结构（通过参考）。

更新选取器：布尔值。  

## Outputs

返回值。镜头失真模型处理程序基本对象参考。如果存在与输入变形源相关的处理程序，则返回该处理程序。如果bUpdatePicker为真，输入选取器的引用将被更新，使其属性与找到的处理程序的属性一致。
