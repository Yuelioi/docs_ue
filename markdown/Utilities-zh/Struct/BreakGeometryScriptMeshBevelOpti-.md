# BreakGeometryScriptMeshBevelOpti-

添加一个节点，将'GeometryScriptMeshBevelOptions'分解成其成员字段

## 图示

![]($-20221218-14370681.png)

## Inputs

Geometry Script Mesh Bevel Options:Geometry Script Mesh Bevel Options结构（按参考）。  

## Outputs

坡口距离。Float（单精度）。坡口距离。

推断材料ID：布尔值。推断材料ID。

设置材料ID：整数。设置材料ID。

应用过滤框。Boolean.应用滤镜盒：。如果为真，则斜面聚组边缘的集合仅限于那些完全或部分包含在（转换后的）FilterBox中的边缘。

过滤盒。箱体结构。滤波盒：。用于边缘过滤的包围盒。

滤镜盒 变形。变形。滤镜盒变换：。应用于FilterBox的变换。

完全包含。布尔型。完全包含：。如果为真，那么只有完全包含在过滤盒内的多组边缘将被倒角，。否则，如果任何顶点在过滤盒内，边缘将被倒角。
