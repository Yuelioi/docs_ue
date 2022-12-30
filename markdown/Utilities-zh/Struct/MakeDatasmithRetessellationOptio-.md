# MakeDatasmithRetessellationOptio-

添加一个节点，从其成员中创建一个 "DatasmithRetessellationOptions"。

## 图示

![]($-20221218-14500926.png)

## Inputs

重新分割规则。EDatasmithCADRetessellationRule枚举。重新分割规则：。在重新曲面化过程中重新生成被删除的曲面或忽略它们。

弦乐公差。Float（单精度）。弦的公差：。任何生成的三角形与原始表面之间的最大距离。较小的值会产生更多的三角形。

最大边缘长度。Float（单精度）。最大边缘长度：。生成的三角形中任何边缘的最大长度。较小的值会产生更多的三角形。

正常公差。Float (single-precision).法线公差：。相邻三角形之间的最大角度。较小的值使更多的三角形.

缝合技术。EDatasmithCADStitchingTechnique Enum.缝合技术：。镶嵌前应用于模型的缝合技术。缝合可能会影响物体的数量。  

## Outputs

Datasmith重拼选项。Datasmith Retessellation Options结构。
