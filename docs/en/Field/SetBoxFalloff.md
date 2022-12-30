# SetBoxFalloff

Box scalar field that will be defined only within a box

Target is Box Falloff

## 图示

![]($-20221218-18595130.png)

## Inputs

Target: Box Falloff Object Reference.

Field Magnitude: Float (single-precision). Magnitude of the box falloff field.

Min Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Max Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Default Value: Float (single-precision). The field value will be set to Default if the sample distance from the box is higher than the scale of the transform.

Box Transform: Transform. Translation, Rotation and Scale of the unit box.

Falloff Type: EFieldFalloffType Enum. Type of falloff function used to model the evolution of the field from the box surface to the sample position.  

## Outputs

Return Value: Box Falloff Object Reference.

