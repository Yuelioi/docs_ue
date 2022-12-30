# BreakDatasmithOpenNurbsOptions

添加一个节点，将'DatasmithOpenNurbsOptions'分解成其成员字段

## 图示

![]($-20221218-14333984.png)

## Inputs

Datasmith Open Nurbs Options。Datasmith Open Nurbs Options结构（通过引用）。 

## Outputs

Geometry（几何）。EDatasmithOpenNurbsBrepTessellatedSource枚举。几何学：EDatasmithOpenNurbsBrepTessellatedSource枚举。

Chord Tolerance（弦线公差）。Float（单精度）。Chord Tolerance：. 任何生成的三角形与原始表面之间的最大距离。较小的值会产生更多的三角形。

最大边缘长度。Float（单精度）。最大边缘长度：。生成的三角形中任何边缘的最大长度。较小的值会产生更多的三角形。

正常公差。Float（单精度）。法线公差：。相邻三角形之间的最大角度。较小的值使更多的三角形。

缝合技术。EDatasmithCADStitchingTechnique Enum。缝合技术：。在细分之前应用于模型的缝合技术。缝合可能影响对象的数量。
