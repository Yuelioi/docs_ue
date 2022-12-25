# CalculateLensParameters

目标是开放的CVLens校准器

## 图示

![]($-20221218-19402715.png)

## Inputs

在。执行。

目标。打开CVLens校准器对象参考。  

## Outputs

出：执行。

镜头失真参数。打开CVLens Distortion Parameters结构。从传入校准器的图像中计算出的失真数据。

误差边际。浮动（单精度）。返回校准的再投影误差。

摄像机视图信息。打开CVCamera View Info结构，返回从标定参数获得的摄像机视图信息。

返回值。布尔值。如果有足够的数据来计算失真度，则为真。
