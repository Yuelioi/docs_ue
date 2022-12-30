# MakeDisplayClusterConfigurationR-_1

添加一个节点，从其成员中创建一个 "DisplayClusterConfigurationRenderFrame"。

## 图示

![]($-20221218-14510967.png)

## Inputs

全局视口RTT大小乘数。Float (single-precision).Cluster Render Target Ratio Mult:.将整个集群的所有视口的RTT尺寸乘以这个值。

内部Frustum RTT大小乘数。Float (single-precision).Cluster ICVFXInner Viewport Render Target Ratio Mult:.整个集群的内视口RTT大小乘以此值。

外视口RTT大小乘数。Float（单精度）。Cluster ICVFXOuter Viewport Render Target Ratio Mult:.整个集群的外视口RTT大小乘以此值。

全局视口屏幕百分比乘数。浮点数（单精度）。Cluster Buffer Ratio Mult:.将整个集群的所有缓冲区比率乘以这个值。

内层Frustum屏幕百分比乘数。Float（单精度）。Cluster ICVFXInner Frustum Buffer Ratio Mult:.整个群组的内侧Frustums缓冲区比率乘以此值。

视口屏幕百分比乘数。Float（单精度）。Cluster ICVFXOuter Viewport Buffer Ratio Mult:.将集群中所有视口的屏幕百分比乘以此值。

允许经纬仪混合。布尔值。Allow Warp Blend:.允许经线混合。允许经线混合渲染。  

## Outputs

显示群集配置渲染框架。显示集群配置的渲染框架结构。
