# BreakMeshReductionSettings

添加一个打破'MeshReductionSettings'的节点到其成员字段中。

## 图示

![]($-20221218-14400032.png)

## Inputs

网格缩减设置。网格缩减设置结构（按参考）。  

## Outputs

三角形百分比。Float (single-precision).Triangles百分比：。要保留的三角形的百分比。1.0 = 不减少，0.0 = 没有三角形。

顶点百分比。Float (single-precision).Percent Vertices:（顶点百分比）。保留顶点的百分比。1.0 = 不减少，0.0 = 没有顶点。

最大偏差。Float（单精度）。最大偏差：。缩小后的网格在物体空间中可能偏离原始网格的最大距离。

像素误差。Float (single-precision).像素误差：。该LOD允许的像素误差量。

焊接阈值。浮点（单精度）。焊接阈值：。对象空间中顶点被焊接在一起的阈值。

硬角阈值。Float（单精度）。硬角阈值：。在面孔之间引入硬边缘的角度。

基础LODModel。整数。Base LODModel.

剪影的重要性。EMeshFeatureImportance Enum.Silhouette Importance:.较高的值可以最大限度地减少对边界的改变。

纹理的重要性。EMeshFeatureImportance Enum.纹理重要性：。更高的值可以减少纹理的拉伸。

阴影的重要性。EMeshFeatureImportance Enum.Shading Importance:.更高的值可以更好地保留法线。

重新计算法线。布尔值。重新计算法线。

生成独特的光照图UV。布尔值。Generate Unique Lightmap UVs.

保持对称性。布尔型。保持对称性。

可见性辅助。Boolean.可见度辅助。

Cull Occluded:Boolean.Cull Occluded.

终止标准。EStaticMeshReductionTerimationCriterion Enum.终止准则：。优化静态网格LOD时使用的方法。

Visibility Aggressiveness:EMeshFeatureImportance Enum.Visibility Aggressiveness:.较高的值会产生较少的样本。

顶点颜色的重要性。EMeshFeatureImportance Enum.顶点颜色的重要性：。更高的值使顶点颜色数据的变化最小。
