# MakeDisplayClust-_5

添加一个节点，从其成员中创建一个 "DisplayClusterConfigurationICVFX_CameraMotionBlurOverridePPS"。

## 图示

![]($-20221218-14504336.png)

## Inputs

启用设置重写。布尔值。替换启用：。如果启用，将覆盖整个运动模糊的设置，否则将来自当前的后期处理卷或Cine Camera。

强度。浮点（单精度）。运动模糊量：。运动模糊的强度，0:关闭。

最大值：浮点（单精度）。Motion Blur Max:.运动模糊造成的最大失真，占屏幕宽度的百分比，0：关闭。

每个对象的大小。浮点（单精度）。每物体大小的运动模糊：。在速度传递中要绘制的基元的最小投影屏幕半径。屏幕宽度的百分比，较小的数字会导致更多的绘制调用，默认：4 %。  

## Outputs

Display Cluster Configuration ICVFX Camera Motion Blur Override PPS: 显示集群配置 ICVFX Camera Motion Blur Override PPS 结构。
