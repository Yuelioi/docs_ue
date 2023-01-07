# ReadRenderTarget

令人难以置信的低效和缓慢的操作!读取整个渲染目标的 sRGB 颜色，并返回一个 sRGB 颜色的线性阵列。LDR 渲染目标被认为是在 sRGB 空间。HDR 渲染目标被假定为线性空间。操作是否成功的结果。如果成功，OutSamples 会给每个像素一个条目，每个条目都是 sRGB 空间中的 8 位每通道[0,255]BGRA。

目标是 Kismet Rendering Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20383954.png)

## Inputs

在。执行。

纹理渲染目标。纹理渲染目标 2D 对象参考。

正常化。布尔值。

## Outputs

出：执行。

出来的样品。阵列的颜色结构。

返回值。布尔值。令人难以置信的低效和缓慢的操作!读取整个渲染目标的 sRGB 颜色，并返回一个 sRGB 颜色的线性阵列。LDR 渲染目标被假定为 sRGB 空间。HDR 渲染目标被假定为线性空间。操作是否成功的结果。如果成功，OutSamples 会给每个像素一个条目，每个条目是 sRGB 空间中每个通道[0,255]的 8 位 BGRA。

<hr>

Incredibly inefficient and slow operation! Reads entire render target as sRGB color and returns a linear array of sRGB colors.. LDR render targets are assumed to be in sRGB space. HDR ones are assumed to be in linear space.. Result whether the operation succeeded. If successful, OutSamples will an entry per pixel, where each is 8-bit per channel [0,255] BGRA in sRGB space.

Target is Kismet Rendering Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20383954.png)

## Inputs

In: Exec.

Texture Render Target: Texture Render Target 2D Object Reference.

Normalize: Boolean.

## Outputs

Out: Exec.

Out Samples: Array of Color Structures.

Return Value: Boolean. Incredibly inefficient and slow operation! Reads entire render target as sRGB color and returns a linear array of sRGB colors.. LDR render targets are assumed to be in sRGB space. HDR ones are assumed to be in linear space.. Result whether the operation succeeded. If successful, OutSamples will an entry per pixel, where each is 8-bit per channel [0,255] BGRA in sRGB space..
