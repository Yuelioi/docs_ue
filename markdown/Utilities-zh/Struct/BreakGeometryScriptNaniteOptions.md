# BreakGeometryScriptNaniteOptions

添加一个节点，将'GeometryScriptNaniteOptions'分解成其成员字段

## 图示

![]($-20221218-14371658.png)

## Inputs

Geometry Script Nanite Options:Geometry Script Nanite Options结构（按参考文献）。  

## Outputs

已启用。布尔型。启用：。将Nanite设置为启用/禁用。

回落百分比三角形。Float (single-precision).Fallback Percent Triangles:.当Nanite不可用时，在Fallback网格中保持三角形的百分比。

回落相对误差。Float (single-precision).Fallback Relative Error:。当Nanite不可用时在Fallback网格中保留的相对误差。覆盖FallbackPercentTriangles。设置为0，只使用FallbackPercentTriangles（默认）。
