# SetStageRootLayer

使用StageRootLayerPath作为根层打开或创建一个美元阶段，如果需要的话，创建根层。所有未来的转换都将从这个阶段获取底层和获取/设置美元数据。注意：完成后必须记得调用Cleanup()，否则此对象将永久保留对已打开的阶段的引用。

目标是Usd转换蓝图的背景

## 图示

![]($-20221218-18593169.png)

## Inputs

在。执行。

目标。Usd转换蓝图背景对象参考。

舞台根层路径。文件路径结构。  

## Outputs

出：执行。
