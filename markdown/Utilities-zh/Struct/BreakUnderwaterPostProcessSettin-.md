# BreakUnderwaterPostProcessSettin-

添加一个节点，将'UnderwaterPostProcessSettings'分解成其成员字段

## 图示

![]($-20221218-14450200.png)

## Inputs

水下后期处理设置。水下后期处理设置结构（按参考）。  

## Outputs

已启用。布尔型。已启用。

优先级。浮点数（单精度）。优先级。

混合半径。Float（单精度）。Blend Radius:（混合半径）。用于混合的体积周围的世界空间半径（仅在非绑定时）。

混合重量。Float（单精度）。混合权重：。0:无影响，1:完全影响。

后期流程设置。后期处理设置结构。后期处理设置：。所有在水下使用的后期处理设置的列表：注意：使用UnderwaterPostProcessMaterial来设置实际的后期处理材料。
