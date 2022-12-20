# BreakRBFParams

Adds a node that breaks a 'RBFParams' into its member fields

## 图示

![]($-20221218-14413813.png)

## Inputs

RBFParams: RBFParams Structure (by ref).  

## Outputs

Solver Type: ERBFSolverType Enum. Solver Type:. Specifies the type of solver to use. The additive solver requires normalization, for the. most part, whereas the Interpolative solver is not as reliant on it. The interpolative. solver also has smoother blending, whereas the additive solver requires more targets but. has a more precise control over the influence of each target..

Radius: Float (single-precision). Radius:. Default radius for each target..

Automatic Radius: Boolean. Automatic Radius:. Automatically pick the radius based on the average distance between targets.

Function: ERBFFunctionType Enum. Function.

Distance Method: ERBFDistanceMethod Enum. Distance Method.

Twist Axis: EBoneAxis Enum. Twist Axis:. Axis to use when DistanceMethod is SwingAngle.

Weight Threshold: Float (single-precision). Weight Threshold:. Weight below which we shouldn't bother returning a contribution from a target.

Normalize Method: ERBFNormalizeMethod Enum. Normalize Method:. Method to use for normalizing the weight.

Median Reference: Vector. Median Reference:. Rotation or position of median (used for normalization).

Median Min: Float (single-precision). Median Min:. Minimum distance used for median.

Median Max: Float (single-precision). Median Max:. Maximum distance used for median.

