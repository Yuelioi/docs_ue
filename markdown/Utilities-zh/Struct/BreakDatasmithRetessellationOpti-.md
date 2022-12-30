# BreakDatasmithRetessellationOpti-

添加一个节点，将 "DatasmithRetessellationOptions "分解到其成员字段中。

## 图示

![]($-20221218-14334158.png)

## Inputs

Datasmith Retessellation Options。Datasmith Retessellation Options结构（通过引用）。 

## Outputs

重新分割规则。EDatasmithCADRetessellationRule枚举。Retessellation Rule:（重新分割规则）。在重分解过程中重新生成被删除的曲面或忽略它们。

弦线公差。浮点（单精度）。Chord Tolerance:.和弦公差。任何生成的三角形与原始曲面之间的最大距离。较小的值会产生更多的三角形。

最大边缘长度。Float（单精度）。最大边缘长度：。生成的三角形中任何边缘的最大长度。较小的值会产生更多的三角形。

正常公差。Float（单精度）。法线公差：。相邻三角形之间的最大角度。较小的值使更多的三角形。

缝合技术。EDatasmithCADStitchingTechnique Enum。缝合技术：。在细分之前应用于模型的缝合技术。缝合可能影响对象的数量。
