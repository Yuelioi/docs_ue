# LandscapeImportHeightmapfromRend-

用渲染目标数据覆盖一个景观高度图

目标是景观代理

## 图示

![]($-20221218-20365013.png)

## Inputs

在。执行。

目标。景观代理对象参考。

在Render Target中。纹理 渲染目标 2D对象参考。有效的渲染目标，格式为RTF_RGBA16f、RTF_RGBA32f或RTF_RGBA8。

在从RGChannel导入高度。布尔值。只有在使用RTF_RGBA16f或RTF_RGBA32f格式时才有意义，它将告诉我们是否应该只从渲染目标的R通道或从R和G通道导入高度数据。注意，使用InImportHeightFromRGChannel == false的RTF_RGBA16f，可能有精度损失。  

## Outputs

出：执行。

返回值。布尔值。

Overwrites a landscape heightmap with render target data

Target is Landscape Proxy

## 图示

![]($-20221218-20365013.png)

## Inputs

In: Exec.

Target: Landscape Proxy Object Reference.

In Render Target: Texture Render Target 2D Object Reference. Valid render target with a format of RTF_RGBA16f, RTF_RGBA32f or RTF_RGBA8.

In Import Height from RGChannel: Boolean. Only relevant when using format RTF_RGBA16f or RTF_RGBA32f, and will tell us if we should import the height data from the R channel only of the Render target or from R & G. Note that using RTF_RGBA16f with InImportHeightFromRGChannel == false, could have precision loss Only works in the editor.  

## Outputs

Out: Exec.

Return Value: Boolean.

