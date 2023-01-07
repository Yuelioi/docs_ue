# LandscapeExportHeightmaptoRender-

输出一个景观高度图到渲染目标

目标是景观代理

## 图示

![](/uploads/projects/ue-bluprint/20221218-20364768.png)

## Inputs

在。执行。

目标。景观代理对象参考。

在 Render Target 中。纹理 渲染目标 2D 对象参考。有效的渲染目标，格式为 RTF_RGBA16f、RTF_RGBA32f 或 RTF_RGBA8。

在导出高度到 RGChannel。布尔值。告诉我们是否应该将内部存储为 R 和 G（16 位）的高度导出到渲染目标的单个 R 通道（格式需要是 RTF_RGBA16f 或 RTF_RGBA32f）。 注意，使用 RTF_RGBA16f 和 InExportHeightIntoRGChannel == false，会有精度损失。

在导出景观代理中：布尔值。可以选择同时导出景观演员的所有代理的组件（如果 LandscapeProxy 是景观演员）。

## Outputs

出：执行。

返回值。布尔值。

<hr>

Output a landscape heightmap to a render target

Target is Landscape Proxy

## 图示

![](/uploads/projects/ue-bluprint/20221218-20364768.png)

## Inputs

In: Exec.

Target: Landscape Proxy Object Reference.

In Render Target: Texture Render Target 2D Object Reference. Valid render target with a format of RTF_RGBA16f, RTF_RGBA32f or RTF_RGBA8.

In Export Height Into RGChannel: Boolean. Tell us if we should export the height that is internally stored as R & G (for 16 bits) to a single R channel of the render target (the format need to be RTF_RGBA16f or RTF_RGBA32f) Note that using RTF_RGBA16f with InExportHeightIntoRGChannel == false, could have precision loss..

In Export Landscape Proxies: Boolean. Option to also export components of all proxies of Landscape actor (if LandscapeProxy is the Landscape Actor).

## Outputs

Out: Exec.

Return Value: Boolean.
