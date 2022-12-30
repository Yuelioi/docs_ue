# GetFloatAttribute

Get float type attribute value.

Target is Skeletal Mesh Component

## 图示

![]($-20221218-18341353.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

Bone Name: Name (by ref). Name of the bone to retrieve try and retrieve the attribute from.

Attribute Name: Name (by ref). Name of the attribute to retrieve.

Default Value: Float (single-precision). In case the attribute could not be found.

Lookup Type: ECustomBoneAttributeLookup Enum. Determines how the attribute is retrieved from the specified BoneName (see ECustomBoneAttributeLookup).  

## Outputs

Out: Exec.

Out Value: Float (single-precision). Retrieved attribute value if found, otherwise is set to DefaultValue.

Return Value: Boolean. Whether or not the atttribute was successfully retrieved.

