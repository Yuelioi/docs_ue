# SetConvexDecompositionCollisions-

在静态网格中添加一个凸形碰撞。任何现有的碰撞都会从静态网格中移除。这个方法是复制在网格编辑器中调用菜单项 "碰撞 > 自动凸面碰撞 "时的做法。

目标是静态网格编辑器子系统

## 图示

![]($-20221218-21040622.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

静态网格。静态网格对象参考。静态网格上添加凸形碰撞。

船体计数。整数。将被创建的最大数量的凸面片。必须是正数。

最大的船体顶点。整数。任何生成的凸面体允许的最大顶点数。

船体精度。整数。生成碰撞时要使用的体素数。必须是正数。

应用变化。布尔值。表示是否必须应用更改。

## Outputs

出：执行。

返回值。布尔值。一个布尔值，表示加法是否成功。
