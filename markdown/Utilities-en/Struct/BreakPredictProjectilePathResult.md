# BreakPredictProjectilePathResult

Adds a node that breaks a 'PredictProjectilePathResult' into its member fields

## 图示

![]($-20221218-14412228.png)

## Inputs

Predict Projectile Path Result: Predict Projectile Path Result Structure (by ref).  

## Outputs

Path Data: Array of Predict Projectile Path Point Data Structures. Path Data:. Info for each point on the path..

Last Trace Destination: Predict Projectile Path Point Data Structure. Last Trace Destination:. Info on the last point we tried to trace to, which may have been beyond the final hit..

Hit Result: Hit Result Structure. Hit Result:. Hit along the trace, if tracing with collision was enabled..

