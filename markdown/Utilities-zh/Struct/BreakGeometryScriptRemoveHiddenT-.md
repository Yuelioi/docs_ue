# BreakGeometryScriptRemoveHiddenT-

添加一个打破'GeometryScriptRemoveHiddenTrianglesOptions'的节点到其成员字段中。

## 图示

![]($-20221218-14372755.png)

## Inputs

Geometry Script Remove Hidden Triangles Options:Geometry Script Remove Hidden Triangles Options结构（参考）。  

## Outputs

方法。EGeometryScriptRemoveHiddenTrianglesMethod Enum.方法。

每个三角形的样本。整数。Samples Per Triangle:.增加每个三角形的样本（除了TriangleSamplingMethod）。

收缩选择。整数。Shrink Selection:.一旦确定要删除的三角形，就进行边界侵蚀的迭代，即通过边界顶点一环进行收缩选择。

绕组Iso值。Float（单精度）。绕组等值：。在WindingNumber模式下，将此作为绕组等值。

每个样品的射线。整数。Rays Per Sample:.随机添加到+/-主轴以外的射线，用于射线广播采样。

正常偏移。Float（单精度）。正常偏移：。将样本点向外推移这一数额，以试图抵消数字上的问题。

紧凑的结果。布尔型。紧凑的结果。
