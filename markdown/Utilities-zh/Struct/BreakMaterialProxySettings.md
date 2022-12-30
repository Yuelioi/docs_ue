# BreakMaterialProxySettings

添加一个节点，将'MaterialProxySettings'分解成其成员字段

## 图示

![]($-20221218-14394437.png)

## Inputs

材料代理设置。材料代理设置结构（通过引用）。

## Outputs

纹理尺寸类型。ETextureSizingType枚举。纹理尺寸类型：。应该用来生成输出纹理尺寸的方法。

纹理尺寸。Int点结构。Texture Size:.纹理尺寸。生成的BaseColor贴图的大小。

Target Texel Density Per Meter（每米密度）。Float（单精度）。Target Texel Density Per Meter（每米目标纺织品密度）：。目标texel密度。

Mesh Max Screen Size百分比。Float（单精度）。Mesh Max Screen Size Percent（网眼最大尺寸百分比）：。网格的预期最大筛网尺寸。

Mesh Min Draw Distance（网格最小绘制距离）。Float（单精度）。网格最小绘制距离：。预计渲染网格的最小距离。

Gutter Space（沟槽空间）。Float（单精度）。Gutter Space：水槽空间。要考虑的沟槽空间。

Metallic Constant（金属常数）。Float (single-precision). Metallic Constant:.金属常数。用于金属属性的常量值。

粗糙度常数。Float (single-precision). 粗糙度常数:. 用于粗糙度属性的常量值。

各向异性常数。Float (single-precision). 各向异性常数:. 用于各向异性属性的常量值。

Specular Constant: Float (single-precision). Specular Constant:（镜面常数）。用于Specular属性的常量值。

Opacity Constant: Float (single-precision). Opacity Constant:（不透明度常数）。用于不透明度属性的常量值。

Opacity Mask Constant: Float（单精度）。Opacity Mask Constant:.不透明度遮罩常数。用于不透明度遮罩属性的常量值。

Ambient Occlusion Constant: Float（单精度）。Ambient Occlusion Constant:（环境遮蔽常数）。用于环境遮蔽属性的常量值。

Blend Mode（混合模式）。EBlendMode Enum。Blend Mode（混合模式）：。生成的材质的目标混合模式。

Allow Two Sided Material（允许两面材料）。Boolean（布尔）。Allow Two Sided Material（允许双面材料）：。是否允许生成的材质是双面的。

法线贴图。布尔值。Normal Map（法线贴图）：。是否为法线属性生成纹理。

Tangent Map（切线贴图）。Boolean（布尔）。Tangent Map:（切线贴图）。是否为切线属性生成纹理。

Metallic Map（金属贴图）。Boolean（布尔）。Metallic Map:（金属贴图）。是否为金属属性生成纹理。

Roughness Map（粗糙度贴图）。Boolean（布尔）。Roughness Map:.粗糙度贴图。是否为 "粗糙度 "属性生成纹理。

Anisotropy Map（各向异性图）。Boolean（布尔）。Anisotropy Map（各向异性图）：。是否为各向异性属性生成纹理。

Specular Map（镜面图）：。Boolean（布尔）。Specular Map（镜面图）：。是否为Specular属性生成纹理。

放射性地图。Boolean. Emissive Map：。是否为Emissive属性生成纹理。

Opacity Map（不透明度贴图）。Boolean（布尔）。Opacity Map:（不透明度贴图）。是否为不透明度属性生成纹理。

Opacity Mask Map（不透明度遮罩图）：。Boolean（布尔）。Opacity Mask Map:（不透明度蒙版图）。是否为不透明度遮罩属性生成纹理。

Ambient Occlusion Map（环境遮蔽贴图）：。Boolean（布尔）。Ambient Occlusion Map：环境遮蔽贴图。是否为Ambient Occlusion属性生成纹理。

Diffuse Texture Size（漫反射纹理尺寸）。Int点结构。Diffuse Texture Size:（漫反射纹理尺寸）。覆盖漫反射纹理大小。

Normal Texture Size（正常纹理尺寸）。Int Point Structure. Normal Texture Size:（正常纹理尺寸）。覆盖法线纹理尺寸。

Tangent Texture Size（切线纹理尺寸）。Int Point Structure. Tangent Texture Size:（切线纹理尺寸）。覆盖切线纹理尺寸。

Metallic Texture Size（金属纹理尺寸）。Int Point Structure. Metallic Texture Size:.金属纹理尺寸。覆盖金属纹理尺寸。

Roughness Texture Size（粗糙度纹理尺寸）。Int Point Structure. Roughness Texture Size:.粗糙度纹理尺寸。覆盖粗糙度纹理尺寸。

Anisotropy Texture Size（各向异性纹理尺寸）。Int Point Structure. Anisotropy Texture Size:.各向异性纹理尺寸。覆盖各向异性纹理的大小。

Specular Texture Size（镜面纹理尺寸）。Int Point Structure.镜面纹理尺寸：.覆盖镜面纹理尺寸。

Emissive Texture Size（辐射纹理尺寸）。Int Point Structure. Emissive Texture Size:（辐射纹理尺寸）。覆盖Emissive纹理尺寸。

Opacity Texture Size（不透明度纹理尺寸）。Int Point Structure. Opacity Texture Size:.不透明度纹理尺寸。覆盖不透明度纹理大小。

Opacity Mask Texture Size（不透明度遮罩纹理尺寸）。Int Point Structure. Opacity Mask Texture Size:. 覆盖不透明度蒙版纹理尺寸。

Ambient Occlusion Texture Size（环境遮蔽纹理尺寸）。Int Point Structure.覆盖Ambient Occlusion纹理尺寸。