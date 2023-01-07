# CalculateLensParameters

目标是开放的 CVLens 校准器

## 图示

![](/uploads/projects/ue-bluprint/20221218-19402715.png)

## Inputs

在。执行。

目标。打开 CVLens 校准器对象参考。

## Outputs

出：执行。

镜头失真参数。打开 CVLens Distortion Parameters 结构。从传入校准器的图像中计算出的失真数据。

误差边际。浮动（单精度）。返回校准的再投影误差。

摄像机视图信息。打开 CVCamera View Info 结构，返回从标定参数获得的摄像机视图信息。

返回值。布尔值。如果有足够的数据来计算失真度，则为真。

<hr>

Target is Open CVLens Calibrator

## 图示

![](/uploads/projects/ue-bluprint/20221218-19402715.png)

## Inputs

In: Exec.

Target: Open CVLens Calibrator Object Reference.

## Outputs

Out: Exec.

Lens Distortion Parameters: Open CVLens Distortion Parameters Structure. the calculated distortion data from the images passed into the calibrator..

Margin Of Error: Float (single-precision). returned reprojection error of the calibration.

Camera View Info: Open CVCamera View Info Structure. returned information about the camera view obtained from calibration parameters.

Return Value: Boolean. true if there was enough data to calculate the distortion.
