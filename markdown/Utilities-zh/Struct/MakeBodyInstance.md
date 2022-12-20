# MakeBodyInstance

Adds a node that create a 'BodyInstance' from its members

## 图示

![]($-20221218-14474849.png)

## Inputs

Sleep Family: ESleepFamily Enum. Sleep Family:. The set of values used in considering when put this body to sleep..

Linear Damping: Float (single-precision). Linear Damping:. 'Drag' force added to reduce linear movement.

Angular Damping: Float (single-precision). Angular Damping:. 'Drag' force added to reduce angular movement.

Center Of Mass Offset: Vector. COMNudge:. User specified offset for the center of mass of this object, from the calculated location.

Mass Scale: Float (single-precision). Mass Scale:. Per-instance scaling of mass.

Inertia Tensor Scale: Vector. Inertia Tensor Scale:. Per-instance scaling of inertia (bigger number means it'll be harder to rotate).

Simulate Physics: Boolean. Simulate Physics:. If true, this body will use simulation. If false, will be 'fixed' (ie kinematic) and move where it is told.. For a Skeletal Mesh Component, simulating requires a physics asset setup and assigned on the SkeletalMesh asset.. For a Static Mesh Component, simulating requires simple collision to be setup on the StaticMesh asset..

Auto Weld: Boolean. Auto Weld:. If true and is attached to a parent, the two bodies will be joined into a single rigid body. Physical settings like collision profile and body settings are determined by the root.

Update Mass When Scale Changes: Boolean. Update Mass when Scale Changes:. If true, it will update mass when scale change *.  

## Outputs

Body Instance: Body Instance Structure.

