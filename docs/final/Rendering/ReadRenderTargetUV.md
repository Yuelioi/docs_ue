# ReadRenderTargetUV

令人难以置信的低效和缓慢的操作!使用UV[0,1]x[0,1]坐标从渲染目标中读取一个sRGB颜色值。LDR渲染目标被认为是在sRGB空间。而HDR的目标则假定为线性空间。结果是在sRGB空间中每通道8位的[0,255]BGRA。

目标是Kismet Rendering Library

## 图示

![]($-20221218-20384776.png)

## Inputs

在。执行。

纹理渲染目标。纹理渲染目标 2D对象参考。

U:Float（单精度）。

V：浮点数（单精度）。  

## Outputs

出：执行。

返回值。颜色结构。令人难以置信的低效和缓慢的操作!使用UV[0,1]x[0,1]坐标从渲染目标中读取一个sRGB颜色值。LDR渲染目标被假定为sRGB空间。而HDR的目标则假定为线性空间。结果是在sRGB空间中每通道8位的[0,255]BGRA。

Incredibly inefficient and slow operation! Read a value as sRGB color from a render target using UV [0,1]x[0,1] coordinates.. LDR render targets are assumed to be in sRGB space. HDR ones are assumed to be in linear space.. Result is 8-bit per channel [0,255] BGRA in sRGB space.

Target is Kismet Rendering Library

## 图示

![]($-20221218-20384776.png)

## Inputs

In: Exec.

Texture Render Target: Texture Render Target 2D Object Reference.

U: Float (single-precision).

V: Float (single-precision).  

## Outputs

Out: Exec.

Return Value: Color Structure. Incredibly inefficient and slow operation! Read a value as sRGB color from a render target using UV [0,1]x[0,1] coordinates.. LDR render targets are assumed to be in sRGB space. HDR ones are assumed to be in linear space.. Result is 8-bit per channel [0,255] BGRA in sRGB space..

