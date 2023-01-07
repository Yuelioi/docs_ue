# LandscapeImportHeightmapfromRend-

用渲染目标数据覆盖一个景观高度图

目标是景观代理

## 图示

![](/uploads/projects/ue-bluprint/20221218-20365013.png)

## Inputs

在。执行。

目标。景观代理对象参考。

在 Render Target 中。纹理 渲染目标 2D 对象参考。有效的渲染目标，格式为 RTF_RGBA16f、RTF_RGBA32f 或 RTF_RGBA8。

在从 RGChannel 导入高度。布尔值。只有在使用 RTF_RGBA16f 或 RTF_RGBA32f 格式时才有意义，它将告诉我们是否应该只从渲染目标的 R 通道或从 R 和 G 通道导入高度数据。注意，使用 InImportHeightFromRGChannel == false 的 RTF_RGBA16f，可能有精度损失。

## Outputs

出：执行。

返回值。布尔值。

<hr>

Overwrites a landscape heightmap with render target data

Target is Landscape Proxy

## 图示

![](/uploads/projects/ue-bluprint/20221218-20365013.png)

## Inputs

In: Exec.

Target: Landscape Proxy Object Reference.

In Render Target: Texture Render Target 2D Object Reference. Valid render target with a format of RTF_RGBA16f, RTF_RGBA32f or RTF_RGBA8.

In Import Height from RGChannel: Boolean. Only relevant when using format RTF_RGBA16f or RTF_RGBA32f, and will tell us if we should import the height data from the R channel only of the Render target or from R & G. Note that using RTF_RGBA16f with InImportHeightFromRGChannel == false, could have precision loss Only works in the editor.

## Outputs

Out: Exec.

Return Value: Boolean.
