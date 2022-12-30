# BreakDisplayClus-_27

添加一个节点，将'DisplayClusterConfigurationViewport_RenderSettings'分解到其成员字段中。

## 图示

![]($-20221218-14341608.png)

## Inputs

显示群组配置视口渲染设置。显示群组配置视口渲染设置结构（通过参考）。 

## Outputs

立体模式。EDisplayClusterConfigurationViewport_StereoMode枚举。立体声模式：。启用和设置立体模式。

屏幕百分比。Float（单精度）。Buffer Ratio:。调整单个视口的分辨率缩放比例。视口屏幕百分比乘数被应用到这个值。

替换。Display Cluster Configuration Post Render Override结构。替换：。覆盖来自源纹理的视口渲染。

Postprocess Blur: Display Cluster Configuration Post Render Blur Postprocess Structure。Postprocess Blur:.后处理模糊 为视口添加后处理模糊。

Generate Mips: Display Cluster Configuration Post Render Generate Mips结构。生成Mips:. 为该视口生成Mips纹理（仅在投影策略支持此功能时使用）。

Overscan: 显示群组配置视口过扫描结构。Overscan:. 渲染一个比配置中指定的更大的帧，以便在使用后期处理效果时实现跨显示器的连续性。
