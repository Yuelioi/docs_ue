# BreakDisplayClus-_3

添加一个打破'DisplayClusterConfigurationICVFX_CameraCustomFrustum'的节点到其成员字段中

## 图示

![]($-20221218-14341698.png)

## Inputs

Display Cluster Configuration ICVFX Camera Custom Frustum: 显示集群配置 ICVFX Camera Custom Frustum 结构（按参考）。 

## Outputs

估计的过扫描分辨率。Int点结构。估算的过扫描分辨率。

内层Frustum分辨率。内点结构。内视距分辨率。

过扫描像素的增加。Float（单精度）。Overscan Pixels Increase（过扫描像素增加）。

Enable Inner Frustum Overscan: 布尔值。启用：. 启用自定义Frustum Frustum.

适应分辨率。布尔值。适应分辨率：. 启用自定义Frustum Frustum...

Overscan Multiplier: 浮点数（单精度）。视野倍增器：. 将ICVFX摄像机的视场乘以此值。这可以增加内围的整体尺寸，以帮助在移动摄像机时提供一个缓冲区，防止延迟。

过扫描单位。EDisplayClusterConfigurationViewportCustomFrustumMode Enum。模式：。启用/禁用内部摄像机的自定义推力，并指定单位为百分比或像素值。

左：浮点（单精度）。左：。像素/百分比值，用于改变左边的地壳。

右边。浮点（单精度）。右：。像素/百分比值，用于改变右侧的地壳。

Top: Float (single-precision). 顶部：。像素/百分比值，用于将地壳改变到顶部。

底部。Float（单精度）。底部：。改变地壳底部的像素/百分数值。
