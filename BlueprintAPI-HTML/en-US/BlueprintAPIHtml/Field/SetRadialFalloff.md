# SetRadialFalloff

Sphere scalar field that will be defined only within a sphere

Target is Radial Falloff

## 图示

![]($-20221218-19000182.png)

## Inputs

Target: Radial Falloff Object Reference.

Field Magnitude: Float (single-precision). Magnitude of the sphere falloff field.

Min Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Max Range: Float (single-precision). The initial function value between 0 and 1 will be scaled between MinRange and MaxRange before being multiplied by magnitude.

Default Value: Float (single-precision). The field value will be set to Default if the sample distance from the center is higher than the radius.

Sphere Radius: Float (single-precision). Radius of the sphere falloff field.

Center Position: Vector. Center position of the sphere falloff field.

Falloff Type: EFieldFalloffType Enum. Type of falloff function used if the falloff function is picked.  

## Outputs

Return Value: Radial Falloff Object Reference.

