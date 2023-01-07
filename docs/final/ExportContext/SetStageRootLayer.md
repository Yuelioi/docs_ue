# SetStageRootLayer

使用 StageRootLayerPath 作为根层打开或创建一个美元阶段，如果需要的话，创建根层。所有未来的转换都将从这个阶段获取底层和获取/设置美元数据。注意：完成后必须记得调用 Cleanup()，否则此对象将永久保留对已打开的阶段的引用。

目标是 Usd 转换蓝图的背景

## 图示

![](/uploads/projects/ue-bluprint/20221218-18593169.png)

## Inputs

在。执行。

目标。Usd 转换蓝图背景对象参考。

舞台根层路径。文件路径结构。

## Outputs

出：执行。

<hr>

Opens or creates a USD stage using StageRootLayerPath as root layer, creating the root layer if needed.. All future conversions will fetch prims and get/set USD data to/from this stage.. Note: You must remember to call Cleanup() when done, or else this object will permanently hold a reference to the opened stage!

Target is Usd Conversion Blueprint Context

## 图示

![](/uploads/projects/ue-bluprint/20221218-18593169.png)

## Inputs

In: Exec.

Target: Usd Conversion Blueprint Context Object Reference.

Stage Root Layer Path: File Path Structure.

## Outputs

Out: Exec.
