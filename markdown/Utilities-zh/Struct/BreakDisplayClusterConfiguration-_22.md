# BreakDisplayClusterConfiguration-_22

添加一个节点，将'DisplayClusterConfigurationViewport_RemapData'分解成其成员字段

## 图示

![]($-20221218-14343894.png)

## Inputs

显示群集配置视口重映射数据。显示群组配置视口重映射数据结构（通过引用）。 

## Outputs

视口区域。Display Cluster Configuration Rectangle结构。视口区域：。要重新映射的视口的子区域；(0,0) x (W, H)将重新映射整个视口。

输出区域。Display Cluster Configuration Rectangle结构。输出区域：。屏幕空间中要输出重新映射区域的区域。

角度。Float（单精度）。角度：。将重新映射的区域旋转的角度（度）；围绕输出区域的中心进行旋转。

Flip H：布尔值。翻转H:. 水平地翻转重新映射的区域。

Flip V：布尔值。翻转V:。垂直翻转重新映射的区域。
