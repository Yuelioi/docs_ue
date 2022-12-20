# BreakPhysicsAssetSolverSettings

Adds a node that breaks a 'PhysicsAssetSolverSettings' into its member fields

## 图示

![]($-20221218-14410622.png)

## Inputs

Physics Asset Solver Settings: Physics Asset Solver Settings Structure (by ref).  

## Outputs

Position Iterations: Integer. Position Iterations:. The number of position iterations to run. The position solve is responsible for depenetration and friction.. Increasing this will improve simulation stability, but increase the cost..

Velocity Iterations: Integer. Velocity Iterations:. The number of velocity iterations to run. The velocity solve is responsible for restitution..

Projection Iterations: Integer. Projection Iterations:. The number of projection iterations to run. The projection phase is a final pass over the constraints, applying. a semi-physical correction to any joint errors remaining after the position and velocity solves. It can be. very helpful to stabilize joint chains, but can cause issues with collision response. The projection magnitude. can be controlled per-constraint in the constraint settings (assuming ProjectionIteration is not zero)..

Cull Distance: Float (single-precision). Cull Distance:. The distance at which collisions are ignored. In general you need this to be a bit larger than the typical relative body. movement in your simulation, but small enough so that we don't have to speculatively create too many unused collisions..

Max Depenetration Velocity: Float (single-precision). Max Depenetration Velocity:. When bodies are penetrating, this is the maximum velocity delta that can be applied in one frame..

Fixed Time Step: Float (single-precision). Fixed Time Step:. The recommended fixed timestep for the RBAN solver. Set to 0 to run with variable timestep (default).. NOTE: If this value is non-zero and less than the current frame time, the simulation will step multiple times. which increases the cost..

