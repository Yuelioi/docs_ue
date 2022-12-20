# SetPlaneFalloff

Plane scalar field that will be defined only within a distance from a plane

Target is Plane Falloff

## 图示

![]($-20221218-19000052.png)

## Inputs

Target: Plane Falloff Object Reference.

Field Magnitude: Float (single-precision). Magnitude of the plane falloff field.

Min Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Max Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Default Value: Float (single-precision). The field value will be set to default if the sample projected distance ((Sample Position - Center Position).dot(Plane Normal)) is higher than the Plane Distance.

Plane Distance: Float (single-precision). Distance limit for the plane falloff field starting from the center position and extending in the direction of the plane normal.

Center Position: Vector. Plane center position of the plane falloff field.

Plane Normal: Vector. Plane normal of the plane falloff field.

Falloff Type: EFieldFalloffType Enum. Type of falloff function used to model the evolution of the field from the plane surface to the distance isosurface.  

## Outputs

Return Value: Plane Falloff Object Reference.

