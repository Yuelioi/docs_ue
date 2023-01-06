# CreateCalibrator

目标是开放的CVLens校准器

## 图示

![]($-20221218-19402822.png)

## Inputs

在。执行。

Board Width（棋盘宽度）：整数。用于校准摄像机的棋盘宽度，作为内边缘的数量计算。

棋盘高度：整数。用于校准摄像机的棋盘高度，作为内边缘的数量计算。

方位大小。浮点数（单精度）。每个正方形的宽度，以（可能是任意的）世界单位。

使用鱼眼模型。布尔值。指定校验器是否使用OpenCV的鱼眼相机模型。  

## Outputs

出：执行。

返回值。打开CVLens校准器对象参考。

Target is Open CVLens Calibrator

## 图示

![]($-20221218-19402822.png)

## Inputs

In: Exec.

Board Width: Integer. The width of the checkerboard used to calibrate the camera counted as number of inner edges..

Board Height: Integer. The height of the checkerboard used to calibrate the camera counted as number of inner edges..

Square Size: Float (single-precision). The width of each square in (potentially arbitrary) world units..

Use Fisheye Model: Boolean. Specifies if the calibrator is to use the fisheye camera model from OpenCV.  

## Outputs

Out: Exec.

Return Value: Open CVLens Calibrator Object Reference.

