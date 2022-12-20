# BreakMaterialProxySettings

Adds a node that breaks a 'MaterialProxySettings' into its member fields

## 图示

![]($-20221218-14394437.png)

## Inputs

Material Proxy Settings: Material Proxy Settings Structure (by ref).  

## Outputs

Texture Sizing Type: ETextureSizingType Enum. Texture Sizing Type:. Method that should be used to generate the sizes of the output textures.

Texture Size: Int Point Structure. Texture Size:. Size of generated BaseColor map.

Target Texel Density Per Meter: Float (single-precision). Target Texel Density Per Meter:. Target texel density.

Mesh Max Screen Size Percent: Float (single-precision). Mesh Max Screen Size Percent:. Expected maximum screen size for the mesh.

Mesh Min Draw Distance: Float (single-precision). Mesh Min Draw Distance:. Expected minimum distance at which the mesh will be rendered.

Gutter Space: Float (single-precision). Gutter Space:. Gutter space to take into account.

Metallic Constant: Float (single-precision). Metallic Constant:. Constant value to use for the Metallic property.

Roughness Constant: Float (single-precision). Roughness Constant:. Constant value to use for the Roughness property.

Anisotropy Constant: Float (single-precision). Anisotropy Constant:. Constant value to use for the Anisotropy property.

Specular Constant: Float (single-precision). Specular Constant:. Constant value to use for the Specular property.

Opacity Constant: Float (single-precision). Opacity Constant:. Constant value to use for the Opacity property.

Opacity Mask Constant: Float (single-precision). Opacity Mask Constant:. Constant value to use for the Opacity mask property.

Ambient Occlusion Constant: Float (single-precision). Ambient Occlusion Constant:. Constant value to use for the Ambient Occlusion property.

Blend Mode: EBlendMode Enum. Blend Mode:. Target blend mode for the generated material.

Allow Two Sided Material: Boolean. Allow Two Sided Material:. Whether or not to allow the generated material can be two-sided.

Normal Map: Boolean. Normal Map:. Whether to generate a texture for the Normal property.

Tangent Map: Boolean. Tangent Map:. Whether to generate a texture for the Tangent property.

Metallic Map: Boolean. Metallic Map:. Whether to generate a texture for the Metallic property.

Roughness Map: Boolean. Roughness Map:. Whether to generate a texture for the Roughness property.

Anisotropy Map: Boolean. Anisotropy Map:. Whether to generate a texture for the Anisotropy property.

Specular Map: Boolean. Specular Map:. Whether to generate a texture for the Specular property.

Emissive Map: Boolean. Emissive Map:. Whether to generate a texture for the Emissive property.

Opacity Map: Boolean. Opacity Map:. Whether to generate a texture for the Opacity property.

Opacity Mask Map: Boolean. Opacity Mask Map:. Whether to generate a texture for the Opacity Mask property.

Ambient Occlusion Map: Boolean. Ambient Occlusion Map:. Whether to generate a texture for the Ambient Occlusion property.

Diffuse Texture Size: Int Point Structure. Diffuse Texture Size:. Override Diffuse texture size.

Normal Texture Size: Int Point Structure. Normal Texture Size:. Override Normal texture size.

Tangent Texture Size: Int Point Structure. Tangent Texture Size:. Override Tangent texture size.

Metallic Texture Size: Int Point Structure. Metallic Texture Size:. Override Metallic texture size.

Roughness Texture Size: Int Point Structure. Roughness Texture Size:. Override Roughness texture size.

Anisotropy Texture Size: Int Point Structure. Anisotropy Texture Size:. Override Anisotropy texture size.

Specular Texture Size: Int Point Structure. Specular Texture Size:. Override Specular texture size.

Emissive Texture Size: Int Point Structure. Emissive Texture Size:. Override Emissive texture size.

Opacity Texture Size: Int Point Structure. Opacity Texture Size:. Override Opacity texture size.

Opacity Mask Texture Size: Int Point Structure. Opacity Mask Texture Size:. Override Opacity Mask texture size.

Ambient Occlusion Texture Size: Int Point Structure. Ambient Occlusion Texture Size:. Override Ambient Occlusion texture size.

