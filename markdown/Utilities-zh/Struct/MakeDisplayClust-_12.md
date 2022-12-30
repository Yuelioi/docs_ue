# MakeDisplayClust-_12

添加一个节点，从其成员中创建一个 "DisplayClusterConfigurationICVFX_OverlayAdvancedRenderSettings"。

## 图示

![]($-20221218-14502906.png)

## Inputs

缓冲器比率。Float (single-precision).缓冲区比率：。允许屏幕百分比。

渲染目标比率。Float（单精度）。渲染目标比率：。性能。Render to scale RTT，用shader到视口解决（自定义值）。

GPUIndex。整数。GPUIndex:.性能，多GPU。指定用于视口渲染的GPU。值'-1'用于默认GPU映射（EYE_LEFT和EYE_RIGHT GPU）。

立体声GPUIndex。整数。Stereo GPUIndex:.性能，多GPU。为立体模式第二视图定制GPU（EYE_RIGHT GPU）。

立体声模式。EDisplayClusterConfigurationViewport_StereoMode枚举。立体模式：。性能：强制单镜面渲染，解析为立体视口。  

## Outputs

显示群组配置ICVFX叠加高级渲染设置。显示集群配置 ICVFX叠加高级渲染设置结构。
