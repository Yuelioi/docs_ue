# GetDistortionPoint

通过给定的焦点和变焦获得一个失真点，如果不存在该点，则返回false。

目标是镜头文件

## 图示

![]($-20221218-19404507.png)

## Inputs

目标。镜头文件对象参考。

焦点。Float（单精度）。

在缩放中。Float（单精度）。  

## Outputs

输出失真信息。失真信息结构。

返回值。布尔值。通过给定的焦点和变焦获得一个失真点，如果不存在失真点，则返回false。

Gets a Distortion point by given focus and zoom, if point does not exists returns false

Target is Lens File

## 图示

![]($-20221218-19404507.png)

## Inputs

Target: Lens File Object Reference.

In Focus: Float (single-precision).

In Zoom: Float (single-precision).  

## Outputs

Out Distortion Info: Distortion Info Structure.

Return Value: Boolean. Gets a Distortion point by given focus and zoom, if point does not exists returns false.

