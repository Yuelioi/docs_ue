# BreakDisplayClus-_5

添加一个节点，将'DisplayClusterConfigurationICVFX_CameraMotionBlurOverridePPS'分解成其成员字段

## 图示

![]($-20221218-14341873.png)

## Inputs

显示集群配置ICVFX摄像机运动模糊覆盖PPS：显示集群配置ICVFX摄像机运动模糊覆盖PPS结构（通过参考）。 

## Outputs

启用设置覆盖。布尔值。替换启用：。如果启用，覆盖整体运动模糊设置，否则将来自当前的后处理卷或Cine Camera。

强度。浮点（单精度）。Motion Blur Amount:（运动模糊量）。运动模糊的强度，0：关闭。

最大值：浮点（单精度）。运动模糊最大值：。由运动模糊引起的最大失真，占屏幕宽度的百分比，0:关闭。

每个物体的大小。Float（单精度）。每物体大小的运动模糊：。速度传递中要绘制的基元的最小投影屏幕半径。屏幕宽度的百分比，较小的数字会导致更多的绘制调用，默认：4 %。
