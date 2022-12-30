# MakeDisplayClust-_24

添加一个节点，从其成员中创建一个 "DisplayClusterConfigurationViewport_RenderSettings"。

## 图示

![]($-20221218-14504036.png)

## Inputs

立体声模式。EDisplayClusterConfigurationViewport_StereoMode枚举。立体声模式：。启用和设置立体声模式。

屏幕百分比。Float（单精度）。缓冲比例：。调整单个视口的分辨率比例。视口屏幕百分比乘数被应用到这个值。

替换。显示集群配置后渲染覆盖结构。取代:.覆盖来自源纹理的视口渲染。

后处理模糊：显示集群配置 渲染后模糊 后处理结构。后处理模糊：。在视口添加后处理模糊。

生成Mips。显示集群配置 渲染后生成Mips结构。生成Mips:.为该视口生成Mips纹理（仅在投影策略支持该功能时使用）。

Overscan。显示集群配置视口过扫描结构。Overscan:.渲染一个比配置中指定的更大的框架，以便在使用后期处理效果时实现跨显示器的连续性。  

## Outputs

显示群组配置视口的渲染设置。Display Cluster Configuration（显示集群配置） Viewport Render Settings（视口渲染设置）结构。
