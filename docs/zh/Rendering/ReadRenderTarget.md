# ReadRenderTarget

令人难以置信的低效和缓慢的操作!读取整个渲染目标的sRGB颜色，并返回一个sRGB颜色的线性阵列。LDR渲染目标被认为是在sRGB空间。HDR渲染目标被假定为线性空间。操作是否成功的结果。如果成功，OutSamples会给每个像素一个条目，每个条目都是sRGB空间中的8位每通道[0,255]BGRA。

目标是Kismet Rendering Library

## 图示

![]($-20221218-20383954.png)

## Inputs

在。执行。

纹理渲染目标。纹理渲染目标 2D对象参考。

正常化。布尔值。  

## Outputs

出：执行。

出来的样品。阵列的颜色结构。

返回值。布尔值。令人难以置信的低效和缓慢的操作!读取整个渲染目标的sRGB颜色，并返回一个sRGB颜色的线性阵列。LDR渲染目标被假定为sRGB空间。HDR渲染目标被假定为线性空间。操作是否成功的结果。如果成功，OutSamples会给每个像素一个条目，每个条目是sRGB空间中每个通道[0,255]的8位BGRA。
