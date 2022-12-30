# MakeMaterialProxySettings

添加一个节点，从其成员中创建一个 "MaterialProxySettings"。

## 图示

![]($-20221218-14572286.png)

## Inputs

纹理尺寸类型。ETextureSizingType枚举。纹理尺寸类型：。应该用来生成输出纹理尺寸的方法。

纹理大小。Int Point Structure.纹理大小：。生成的BaseColor贴图的大小。

每米的目标泰克斯尔密度。浮点（单精度）。每米的目标特克斯尔密度：。目标德士林密度。

网孔最大尺寸百分比。Float（单精度）。Mesh Max Screen Size Percent:.网格的预期最大筛分尺寸。

网格最小绘制距离。Float（单精度）。Mesh Min Draw Distance:（网格最小绘制距离）。预计渲染网格的最小距离。

沟槽空间。Float（单精度）。Gutter Space:。要考虑到的沟槽空间。

金属常数。Float（单精度）。Metallic Constant:.用于金属属性的常量值。

粗糙度常数。Float（单精度）。粗糙度常数：。用于粗糙度属性的常量值。

各向异性常数。Float (single-precision).各向异性常数：。用于各向异性属性的常量值。

镜面常数。Float (single-precision).Specular Constant:（镜面常数）。用于Specular属性的常量值。

不透明度常数。Float (single-precision).Opacity Constant:（不透明度常数）。用于不透明度属性的常量值。

不透明度掩码常数。Float (single-precision).Opacity Mask Constant：。用于不透明度遮罩属性的常数。

环境遮蔽常数。Float（单精度）。Ambient Occlusion Constant:（环境遮蔽常数）。用于环境遮蔽属性的常数。

混合模式。EBlendMode Enum.Blend Mode:.混合模式。生成的材质的目标混合模式。

允许双面材料。Boolean.允许双面材料：。是否允许生成的材料可以是两面的。

法线图。Boolean.Normal Map（法线贴图）：。是否为法线属性生成纹理。

切线图。布尔型。Tangent Map：。是否为切线属性生成纹理。

金属地图。Boolean.Metallic Map：。是否为金属色属性生成纹理。

粗糙度图。布尔型。Roughness Map：。是否为粗糙度属性生成纹理。

各向异性图。布尔型。Anisotropy Map：。是否为各向异性属性生成纹理。

镜面地图。Boolean.Specular Map：。是否为Specular属性生成纹理。

放射性地图。Boolean.Emissive Map：。是否为Emissive属性生成纹理。

不透明度地图。Boolean.Opacity Map：。是否为Opacity属性生成纹理。

不透明度掩码图。Boolean.Opacity Mask Map：。是否为Opacity Mask属性生成纹理。

环境遮蔽图。Boolean.Ambient Occlusion Map：。是否为Ambient Occlusion属性生成纹理。

漫反射纹理尺寸。Int Point Structure.Diffuse Texture Size:.覆盖漫反射纹理尺寸。

普通纹理尺寸。Int 点结构。Normal Texture Size:（正常纹理尺寸）。覆盖法线纹理尺寸。

切线纹理尺寸。Int Point Structure.Tangent Texture Size:.覆盖切线纹理尺寸。

金属质地大小。Int点结构.Metallic Texture Size:.覆盖金属纹理尺寸。

粗糙度纹理大小。Int Point Structure.Roughness Texture Size:.覆盖粗糙度纹理大小。

各向异性的纹理大小。Int Point Structure.Anisotropy Texture Size:.覆盖各向异性的纹理尺寸。

镜面纹理尺寸。Int Point Structure.Specular Texture Size:.覆盖镜面纹理尺寸。

放射性纹理尺寸。Int Point Structure.Emissive Texture Size:.覆盖Emissive纹理尺寸。

不透明度 纹理大小。Int Point Structure.Opacity Texture Size:.覆盖不透明度纹理尺寸。

不透明度遮罩 纹理大小。Int Point Structure.Opacity Mask Texture Size:.覆盖不透明度蒙版的纹理尺寸。

环境遮蔽纹理尺寸。Int Point Structure.Ambient Occlusion Texture Size:.覆盖环境遮挡纹理尺寸。  

## Outputs

材料代理设置。材料代理设置结构。
