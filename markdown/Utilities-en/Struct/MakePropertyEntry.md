# MakePropertyEntry

Adds a node that create a 'PropertyEntry' from its members

## 图示

![]($-20221218-14593878.png)

## Inputs

Property: EMaterialProperty Enum. Property:. Property which should be baked out.

Use Custom Size: Boolean. Use Custom Size:. Whether or not to use the value of custom size for the output texture.

Custom Size: Int Point Structure. Custom Size:. Defines the size of the output textures for the baked out material properties.

Use Constant Value: Boolean. Use Constant Value:. Wheter or not to use Constant Value as the final 'baked out' value for the this property.

Constant Value: Float (single-precision). Constant Value:. Defines the value representing this property in the final proxy material.  

## Outputs

Property Entry: Property Entry Structure.

