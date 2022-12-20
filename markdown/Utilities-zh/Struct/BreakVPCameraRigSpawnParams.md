# BreakVPCameraRigSpawnParams

Adds a node that breaks a 'VPCameraRigSpawnParams' into its member fields

## 图示

![]($-20221218-14452415.png)

## Inputs

VPCamera Rig Spawn Params: VPCamera Rig Spawn Params Structure (by ref).  

## Outputs

Use World Space: Boolean. Use World Space:. Use world space (as opposed to local space) for points..

Use First Point As Spawn Location: Boolean. Use First Point as Spawn Location:. Use the first vector of input as the spawn transform.. Causes RigTransform to be completely ignored..

Linear Approximation Mode: EVPCameraRigSpawnLinearApproximationMode Enum. Linear Approximation Mode:. Causes a linear approximation of the spline points to be generated instead. of relying purely on the passed in points / curves..

Linear Approximation Param: Float (single-precision). Linear Approximation Param:. This is only used if LinearApproximationMode is not None.. When mode is Density:. See FSplinePositionLinearApproximation::Build.: When mode is IntegrationStep:. Integration step (in CM) between approximation points. Decreasing this value will. increase the number of spline points and will therefore increase the accuracy. (at the cost of increased complexity)..

