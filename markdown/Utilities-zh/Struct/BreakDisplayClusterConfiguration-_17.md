# BreakDisplayClusterConfiguration-_17

添加一个节点，将'DisplayClusterConfigurationRenderFrame'分解成其成员字段

## 图示

![]($-20221218-14343368.png)

## Inputs

显示群集配置渲染框架。Display Cluster Configuration Render Frame结构（通过引用）。 

## Outputs

全局视口RTT大小乘数。Float (single-precision). Cluster Render Target Ratio Mult:. 将整个集群的所有视口RTT大小乘以这个值。

Inner Frustum RTT Size Multiplier: Float (single-precision). Cluster ICVFXInner Viewport Render Target Ratio Mult:. 整个集群的内视口RTT大小乘以此值。

外视口RTT尺寸乘数。浮点数（单精度）。Cluster ICVFXOuter Viewport Render Target Ratio Mult:. 整个集群的外部视口RTT大小乘以此值。

全局视口屏幕百分比乘数。浮点数（单精度）。Cluster Buffer Ratio Mult:. 整个集群的所有缓冲区比率乘以这个值。

Inner Frustum Screen Percentage Multiplier: Float（单精度）。Cluster ICVFXInner Frustum Buffer Ratio Mult:。整个群组的内侧Frustums缓冲区比率乘以此值。

视口屏幕百分比乘数。浮点数（单精度）。Cluster ICVFXOuter Viewport Buffer Ratio Mult:。将集群中所有视口的屏幕百分比乘以这个值。

Allow Warp Blend: 布尔值。Allow Warp Blend:.允许翘曲混合。允许翘曲混合渲染。
