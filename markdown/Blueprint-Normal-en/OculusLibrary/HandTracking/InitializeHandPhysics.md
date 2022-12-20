# InitializeHandPhysics

Initializes physics capsules for collision and physics on the runtime mesh

Target is Oculus Input Function Library

## 图示

![]($-20221218-20153306.png)

## Inputs

In: Exec.

Skeleton Type: EOculusHandType Enum. (in) The skeleton type that will be used to generated the capsules.

Hand Component: Skinned Mesh Component Object Reference. (in) The skinned mesh component that the capsules will be attached to.

World to Meters: Float (single-precision). (in) Optional change to the world to meters conversion value.  

## Outputs

Out: Exec.

Return Value: Array of Oculus Capsule Collider Structures.

