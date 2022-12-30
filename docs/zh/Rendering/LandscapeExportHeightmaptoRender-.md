# LandscapeExportHeightmaptoRender-

输出一个景观高度图到渲染目标

目标是景观代理

## 图示

![]($-20221218-20364768.png)

## Inputs

在。执行。

目标。景观代理对象参考。

在Render Target中。纹理 渲染目标 2D对象参考。有效的渲染目标，格式为RTF_RGBA16f、RTF_RGBA32f或RTF_RGBA8。

在导出高度到RGChannel。布尔值。告诉我们是否应该将内部存储为R和G（16位）的高度导出到渲染目标的单个R通道（格式需要是RTF_RGBA16f或RTF_RGBA32f）。 注意，使用RTF_RGBA16f和InExportHeightIntoRGChannel == false，会有精度损失。

在导出景观代理中：布尔值。可以选择同时导出景观演员的所有代理的组件（如果LandscapeProxy是景观演员）。  

## Outputs

出：执行。

返回值。布尔值。
