# BreakDisplayClus-_2

添加一个打破'DisplayClusterConfigurationICVFX_CameraAdvancedRenderSettings'的节点到其成员字段中。

## 图示

![]($-20221218-14340896.png)

## Inputs

显示集群配置ICVFX摄像机高级渲染设置。Display Cluster Configuration ICVFX Camera Advanced Render Settings（显示集群配置ICVFX摄像机高级渲染设置）结构（通过参考）。 

## Outputs

渲染目标比率。浮点（单精度）。渲染目标比率：。性能。渲染比例RTT，用shader到视口解决（自定义值）。

GPUIndex。整数。GPUIndex:. 性能，多GPU。指定用于视口渲染的GPU。值'-1'用于默认GPU映射（EYE_LEFT和EYE_RIGHT GPU）。

Stereo GPUIndex: 整数。Stereo GPUIndex:. 性能，多GPU。为立体模式第二视图定制GPU（EYE_RIGHT GPU）。

立体模式。EDisplayClusterConfigurationViewport_StereoMode枚举。立体模式：。性能：强制单镜面渲染，解析为立体视口。
