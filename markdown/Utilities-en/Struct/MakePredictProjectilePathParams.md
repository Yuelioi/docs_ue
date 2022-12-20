# MakePredictProjectilePathParams

Adds a node that create a 'PredictProjectilePathParams' from its members

## 图示

![]($-20221218-14593010.png)

## Inputs

Start Location: Vector. Start Location:. Location of the start of the trace..

Launch Velocity: Vector. Launch Velocity:. Initial launch velocity at the start of the trace..

Trace With Collision: Boolean. Trace with Collision:. Whether to trace along the path looking for blocking collision and stopping at the first hit..

Projectile Radius: Float (single-precision). Projectile Radius:. Projectile radius, used when tracing for collision. If <= 0, a line trace is used instead..

Max Sim Time: Float (single-precision). Max Sim Time:. Maximum simulation time for the virtual projectile..

Trace With Channel: Boolean. Trace with Channel:. Whether or not to use TraceChannel, if tracing with collision..

Trace Channel: ECollisionChannel Enum. Trace Channel:. Trace channel to use, if tracing with collision..

Object Types: Array of EObjectTypeQuery Enums. Object Types:. Object type to use, if tracing with collision..

Actors To Ignore: Array of Actor Object References. Actors to Ignore:. Actors to ignore when tracing with collision..

Sim Frequency: Float (single-precision). Sim Frequency:. Determines size of each sub-step in the simulation (chopping up MaxSimTime). Recommended between 10 to 30 depending on desired quality versus performance..

Override Gravity Z: Float (single-precision). Override Gravity Z:. Optional override of Gravity (if 0, uses WorldGravityZ)..

Draw Debug Type: EDrawDebugTrace Enum. Draw Debug Type:. Debug drawing duration option..

Draw Debug Time: Float (single-precision). Draw Debug Time:. Duration of debug lines (only relevant for DrawDebugType::Duration).

Trace Complex: Boolean. Trace Complex:. Trace against complex collision (triangles rather than simple primitives) if tracing with collision..  

## Outputs

Predict Projectile Path Params: Predict Projectile Path Params Structure.

