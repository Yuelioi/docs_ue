# AddTrackedPointwithName

手动添加一个带有名称和世界变换的追踪点。@WorldTransform：在世界空间中创建点的变换。@PointName：创建的点的名称，必须是非空的。@bDeletePointsWithSameName：如果现有的同名的点应该被删除。

目标是ARBlueprint库

## 图示

![]($-20221218-17560121.png)

## Inputs

在。执行。

世界转换。变换（通过引用）。

点名称。字符串。

删除同名的点。Boolean.  

## Outputs

输出。执行。

返回值。布尔值。如果操作成功。请注意，这是一个异步操作--添加的点要在几帧之后才能使用。
