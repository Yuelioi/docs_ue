# GetGeneratedComponent

获取为具有给定基元路径的基元生成的瞬态组件。警告。组件的寿命由AUSDStageActor管理，它可在任何时候被强制销毁（例如关闭舞台时）。

目标是Usd舞台演员

## 图示

![]($-20221218-21210264.png)

## Inputs

在。执行。

目标。Usd Stage Actor对象参考。

原始路径。字符串。源基元的完整路径，例如"/root_prim/my_prim"。  

## Outputs

出：执行。

返回值。场景组件对象参考。相应的被生成的组件。如果PrimPath处的基元被折叠，它可能对应于一个父基元。如果路径是无效的，则为Nullptr。
