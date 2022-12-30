# PredictProjectilePath_Advanced

Predict the arc of a virtual projectile affected by gravity with collision checks along the arc.. Returns true if it hit something.

Target is Gameplay Statics

## 图示

![]($-20221218-19072911.png)

## Inputs

In: Exec.

Predict Params: Predict Projectile Path Params Structure (by ref). Input params to the trace (start location, velocity, time to simulate, etc)..  

## Outputs

Out: Exec.

Predict Result: Predict Projectile Path Result Structure. Output result of the trace (Hit result, array of location/velocity/times for each trace step, etc)..

Return Value: Boolean. True if hit something along the path (if tracing with collision)..

