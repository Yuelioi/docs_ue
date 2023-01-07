# ReadRenderTargetUV

令人难以置信的低效和缓慢的操作!使用 UV[0,1]x[0,1]坐标从渲染目标中读取一个 sRGB 颜色值。LDR 渲染目标被认为是在 sRGB 空间。而 HDR 的目标则假定为线性空间。结果是在 sRGB 空间中每通道 8 位的[0,255]BGRA。

目标是 Kismet Rendering Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20384776.png)

## Inputs

在。执行。

纹理渲染目标。纹理渲染目标 2D 对象参考。

U:Float（单精度）。

V：浮点数（单精度）。

## Outputs

出：执行。

返回值。颜色结构。令人难以置信的低效和缓慢的操作!使用 UV[0,1]x[0,1]坐标从渲染目标中读取一个 sRGB 颜色值。LDR 渲染目标被假定为 sRGB 空间。而 HDR 的目标则假定为线性空间。结果是在 sRGB 空间中每通道 8 位的[0,255]BGRA。

<hr>

Incredibly inefficient and slow operation! Read a value as sRGB color from a render target using UV [0,1]x[0,1] coordinates.. LDR render targets are assumed to be in sRGB space. HDR ones are assumed to be in linear space.. Result is 8-bit per channel [0,255] BGRA in sRGB space.

Target is Kismet Rendering Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20384776.png)

## Inputs

In: Exec.

Texture Render Target: Texture Render Target 2D Object Reference.

U: Float (single-precision).

V: Float (single-precision).

## Outputs

Out: Exec.

Return Value: Color Structure. Incredibly inefficient and slow operation! Read a value as sRGB color from a render target using UV [0,1]x[0,1] coordinates.. LDR render targets are assumed to be in sRGB space. HDR ones are assumed to be in linear space.. Result is 8-bit per channel [0,255] BGRA in sRGB space..
