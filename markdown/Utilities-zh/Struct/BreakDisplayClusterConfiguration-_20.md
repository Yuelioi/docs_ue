# BreakDisplayClusterConfiguration-_20

添加一个节点，将'DisplayClusterConfigurationViewport_Overscan'分解到其成员字段中。

## 图示

![]($-20221218-14343716.png)

## Inputs

Display Cluster Configuration Viewport Overscan。Display Cluster Configuration Viewport Overscan 结构（通过引用）。 

## Outputs

启用。布尔值。Enabled:（已启用）。启用/禁用视口过扫描，指定单位为百分比或像素值。

模式。EDisplayClusterConfigurationViewportOverscanMode枚举。模式:. 启用/禁用视口过扫描并指定单位为百分比或像素值。

左：浮点（单精度）。左边:. 左边。

右边。浮点（单精度）。右：. 右边。

顶部：浮点运算（单精度）。顶部：. 顶部。

底部。Float (single-precision). 底部:. 底部。

适应分辨率。Boolean（布尔）。Oversize:. 设置为 "True "可按过扫描分辨率渲染，设置为 "False "可按配置中的分辨率渲染，并对过扫描进行缩放。
