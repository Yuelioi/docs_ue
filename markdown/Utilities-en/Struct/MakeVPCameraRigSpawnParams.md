# MakeVPCameraRigSpawnParams

Adds a node that create a 'VPCameraRigSpawnParams' from its members

## 图示

![]($-20221218-15042133.png)

## Inputs

Use World Space: Boolean. Use World Space:. Use world space (as opposed to local space) for points..

Use First Point As Spawn Location: Boolean. Use First Point as Spawn Location:. Use the first vector of input as the spawn transform.. Causes RigTransform to be completely ignored..

Linear Approximation Mode: EVPCameraRigSpawnLinearApproximationMode Enum. Linear Approximation Mode:. Causes a linear approximation of the spline points to be generated instead. of relying purely on the passed in points / curves..

Linear Approximation Param: Float (single-precision). Linear Approximation Param:. This is only used if LinearApproximationMode is not None.. When mode is Density:. See FSplinePositionLinearApproximation::Build.: When mode is IntegrationStep:. Integration step (in CM) between approximation points. Decreasing this value will. increase the number of spline points and will therefore increase the accuracy. (at the cost of increased complexity)..  

## Outputs

VPCamera Rig Spawn Params: VPCamera Rig Spawn Params Structure.

