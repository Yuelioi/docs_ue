# LineTrace

在特定的位置/方向上进行线迹追踪

目标是Geo Referencing Editor BPLibrary

## 图示

![]($-20221218-19144167.png)

## Inputs

在。执行。

世界的位置。矢量。视口原点（相机）在世界空间中的位置。

世界方向。矢量。视口（摄像机）在世界空间中的方向。

忽略的演员。演员对象参考数组。

追踪复杂：布尔值。是否要对复杂碰撞进行追踪。

显示跟踪。布尔值。我们是否应该调试画出跟踪。  

## Outputs

出：执行。

成功。布尔值。如果关卡编辑器不在焦点上，它将返回false，如果什么都没有被击中，也是如此。

命中结果。命中结果结构。追踪命中结果...
