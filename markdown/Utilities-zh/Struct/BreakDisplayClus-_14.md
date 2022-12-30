# BreakDisplayClus-_14

添加一个打破'DisplayClusterConfigurationICVFX_OverlayAdvancedRenderSettings'的节点到其成员字段中

## 图示

![]($-20221218-14340350.png)

## Inputs

显示群组配置ICVFX叠加高级渲染设置。显示集群配置ICVFX叠加高级渲染设置结构（按参考）。 

## Outputs

缓冲区比率。Float (single-precision). 缓冲区比率：。允许屏幕百分比。

渲染目标比率。Float（单精度）。渲染目标比率：. 性能。Render to scale RTT，用shader解决视口的问题（自定义值）。

GPUIndex。整数。GPUIndex:. 性能，多GPU。指定用于视口渲染的GPU。值'-1'用于默认GPU映射（EYE_LEFT和EYE_RIGHT GPU）。

Stereo GPUIndex: 整数。Stereo GPUIndex:. 性能，多GPU。为立体模式第二视图定制GPU（EYE_RIGHT GPU）。

立体模式。EDisplayClusterConfigurationViewport_StereoMode枚举。立体模式：。性能：强制单镜面渲染，解析为立体视口。
