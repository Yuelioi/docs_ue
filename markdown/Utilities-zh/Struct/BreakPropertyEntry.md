# BreakPropertyEntry

Adds a node that breaks a 'PropertyEntry' into its member fields

## 图示

![]($-20221218-14412844.png)

## Inputs

Property Entry: Property Entry Structure (by ref).  

## Outputs

Property: EMaterialProperty Enum. Property:. Property which should be baked out.

Use Custom Size: Boolean. Use Custom Size:. Whether or not to use the value of custom size for the output texture.

Custom Size: Int Point Structure. Custom Size:. Defines the size of the output textures for the baked out material properties.

Use Constant Value: Boolean. Use Constant Value:. Wheter or not to use Constant Value as the final 'baked out' value for the this property.

Constant Value: Float (single-precision). Constant Value:. Defines the value representing this property in the final proxy material.

