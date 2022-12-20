# MakeUsdMaterialBakingOptions

Adds a node that create a 'UsdMaterialBakingOptions' from its members

## 图示

![]($-20221218-15035548.png)

## Inputs

Properties: Array of Property Entry Structures. Properties:. Properties which are supposed to be baked out for the material.

Default Texture Size: Int Point Structure. Default Texture Size:. Size of the baked texture for all properties that don't have a CustomSize set.

Textures Dir: Directory Path Structure. Textures Dir:. Where baked textures are placed. Intentionally not a config as it's heavily dependent on where the stage is.  

## Outputs

Usd Material Baking Options: Usd Material Baking Options Structure.

