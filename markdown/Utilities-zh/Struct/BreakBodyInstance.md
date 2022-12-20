# BreakBodyInstance

Adds a node that breaks a 'BodyInstance' into its member fields

## 图示

![]($-20221218-14314664.png)

## Inputs

Body Instance: Body Instance Structure (by ref).  

## Outputs

Sleep Family: ESleepFamily Enum. Sleep Family:. The set of values used in considering when put this body to sleep..

Use CCD: Boolean. Use CCD:. If true Continuous Collision Detection (CCD) will be used for this component.

Ignore Analytic Collisions: Boolean. Ignore Analytic Collisions:. If true ignore analytic collisions and treat objects as a general implicit surface.

Simulation Generates Hit Events: Boolean. Notify Rigid Body Collision:. Should 'Hit' events fire when this object collides during physics simulation..

Smooth Edge Collisions: Boolean. Smooth Edge Collisions:. Remove unnecessary edge collisions to allow smooth sliding over surfaces composed of multiple actors/components.. This is fairly expensive and should only be enabled on hero objects..

Position Solver Iteration Count: Byte. Position Solver Iteration Count:. [PhysX Only] This physics body's solver iteration count for position. Increasing this will be more CPU intensive, but better stabilized..

Velocity Solver Iteration Count: Byte. Velocity Solver Iteration Count:. [PhysX Only] This physics body's solver iteration count for velocity. Increasing this will be more CPU intensive, but better stabilized..

Max Depenetration Velocity: Float (single-precision). Max Depenetration Velocity:. [PhysX Only] The maximum velocity used to depenetrate this object.

Mass (Kg): Float (single-precision). Mass in Kg Override:. Mass of the body in KG. By default we compute this based on physical material and mass scale.. @see bOverrideMass to set this directly.

Linear Damping: Float (single-precision). Linear Damping:. 'Drag' force added to reduce linear movement.

Angular Damping: Float (single-precision). Angular Damping:. 'Drag' force added to reduce angular movement.

Center Of Mass Offset: Vector. COMNudge:. User specified offset for the center of mass of this object, from the calculated location.

Mass Scale: Float (single-precision). Mass Scale:. Per-instance scaling of mass.

Inertia Tensor Scale: Vector. Inertia Tensor Scale:. Per-instance scaling of inertia (bigger number means it'll be harder to rotate).

Walkable Slope Override: Walkable Slope Override Structure. Walkable Slope Override:. Custom walkable slope override setting for this instance.. @see GetWalkableSlopeOverride(), SetWalkableSlopeOverride().

Phys Material Override: Physical Material Object Reference. Phys Material Override:. Allows you to override the PhysicalMaterial to use for simple collision on this body..

Max Angular Velocity: Float (single-precision). Max Angular Velocity:. The maximum angular velocity for this instance [degrees/s].

Custom Sleep Threshold Multiplier: Float (single-precision). Custom Sleep Threshold Multiplier:. If the SleepFamily is set to custom, multiply the natural sleep threshold by this amount. A higher number will cause the body to sleep sooner..

Stabilization Threshold Multiplier: Float (single-precision). Stabilization Threshold Multiplier:. Stabilization factor for this body if Physics stabilization is enabled. A higher number will cause more aggressive stabilization at the risk of loss of momentum at low speeds. A value of 0 will disable stabilization for this body..

Simulate Physics: Boolean. Simulate Physics:. If true, this body will use simulation. If false, will be 'fixed' (ie kinematic) and move where it is told.. For a Skeletal Mesh Component, simulating requires a physics asset setup and assigned on the SkeletalMesh asset.. For a Static Mesh Component, simulating requires simple collision to be setup on the StaticMesh asset..

Enable Gravity: Boolean. Enable Gravity:. If object should have the force of gravity applied.

Auto Weld: Boolean. Auto Weld:. If true and is attached to a parent, the two bodies will be joined into a single rigid body. Physical settings like collision profile and body settings are determined by the root.

Start Awake: Boolean. Start Awake:. If object should start awake, or if it should initially be sleeping.

Generate Wake Events: Boolean. Generate Wake Events:. Should 'wake/sleep' events fire when this object is woken up or put to sleep by the physics simulation..

Update Mass When Scale Changes: Boolean. Update Mass when Scale Changes:. If true, it will update mass when scale change *.

