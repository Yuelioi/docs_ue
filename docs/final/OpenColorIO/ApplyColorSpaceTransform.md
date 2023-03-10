# ApplyColorSpaceTransform

应用设置中描述的颜色变换的渲染通道。

目标是开放的彩色 IOBlueprint 库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20164919.png)

## Inputs

在。执行。

转换设置。打开颜色 IOC 颜色转换设置结构（通过参考）。描述要应用的色彩空间转换的设置。

输入纹理。纹理对象参考。源色彩空间中的纹理。

输出渲染目标。纹理 渲染目标 2D 对象参考。在目标颜色空间中绘制输入纹理的 RenderTarget。

## Outputs

出：执行。

返回值。布尔值。如果排队等待应用转换的渲染命令，则为真。

<hr>

Applies a rendering pass of the color transform described in the settings

Target is Open Color IOBlueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20164919.png)

## Inputs

In: Exec.

Conversion Settings: Open Color IOColor Conversion Settings Structure (by ref). Settings describing the color space transform to apply.

Input Texture: Texture Object Reference. Texture in the source color space.

Output Render Target: Texture Render Target 2D Object Reference. RenderTarget where to draw the input texture in the destination color space.

## Outputs

Out: Exec.

Return Value: Boolean. True if a rendering command to apply the transform was queued..
