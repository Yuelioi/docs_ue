# PredictProjectilePathByObjectTyp-

Predict the arc of a virtual projectile affected by gravity with collision checks along the arc. Returns a list of positions of the simulated arc and the destination reached by the simulation.. Returns true if it hit something.

Target is Gameplay Statics

## 图示

![]($-20221218-19072671.png)

## Inputs

In: Exec.

Start Pos: Vector. First start trace location.

Launch Velocity: Vector. Velocity the "virtual projectile" is launched at.

Trace Path: Boolean. Trace along the entire path to look for blocking hits.

Projectile Radius: Float (single-precision). Radius of the virtual projectile to sweep against the environment.

Object Types: Array of EObjectTypeQuery Enums. ObjectTypes to trace against, if bTracePath is true..

Trace Complex: Boolean. Use TraceComplex (trace against triangles not primitives).

Actors to Ignore: Array of Actor Object References. Actors to exclude from the traces.

Draw Debug Type: EDrawDebugTrace Enum. Debug type (one-frame, duration, persistent).

Draw Debug Time: Float (single-precision). Duration of debug lines (only relevant for DrawDebugType::Duration).

Sim Frequency: Float (single-precision). Determines size of each sub-step in the simulation (chopping up MaxSimTime).

Max Sim Time: Float (single-precision). Maximum simulation time for the virtual projectile..

Override Gravity Z: Float (single-precision). Optional override of Gravity (if 0, uses WorldGravityZ).  

## Outputs

Out: Exec.

Out Hit: Hit Result Structure. Predicted hit result, if the projectile will hit something.

Out Path Positions: Array of Vectors. Predicted projectile path. Ordered series of positions from StartPos to the end. Includes location at point of impact if it hit something..

Out Last Trace Destination: Vector. Goal position of the final trace it did. Will not be in the path if there is a hit..

Return Value: Boolean. True if hit something along the path if tracing for collision..

