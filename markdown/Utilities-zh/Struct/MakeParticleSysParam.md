# MakeParticleSysParam

Adds a node that create a 'ParticleSysParam' from its members

## 图示

![]($-20221218-14590308.png)

## Inputs

Name: Name. Name:. The name of the parameter.

Param Type: EParticleSysParamType Enum. Param Type:. The type of parameters. PSPT_None - There is no data type. PSPT_Scalar - Use the scalar value. PSPT_ScalarRand - Select a scalar value in the range [Scalar_Low..Scalar). PSPT_Vector - Use the vector value. PSPT_VectorRand - Select a vector value in the range [Vector_Low..Vector). PSPT_Color - Use the color value. PSPT_Actor - Use the actor value. PSPT_Material - Use the material value. PSPT_VectorUnitRand - Select a random unit vector and scale along the range [Vector_Low..Vector).

Scalar: Float (single-precision). Scalar.

Scalar Low: Float (single-precision). Scalar Low.

Vector: Vector. Vector.

Vector Low: Vector. Vector Low.

Color: Color Structure. Color.

Actor: Actor Object Reference. Actor.

Material: Material Interface Object Reference. Material.  

## Outputs

Particle Sys Param: Particle Sys Param Structure.

