# BreakBodyInstanceCore

Adds a node that breaks a 'BodyInstanceCore' into its member fields

## 图示

![]($-20221218-14314754.png)

## Inputs

Body Instance Core: Body Instance Core Structure (by ref).  

## Outputs

Simulate Physics: Boolean. Simulate Physics:. If true, this body will use simulation. If false, will be 'fixed' (ie kinematic) and move where it is told.. For a Skeletal Mesh Component, simulating requires a physics asset setup and assigned on the SkeletalMesh asset.. For a Static Mesh Component, simulating requires simple collision to be setup on the StaticMesh asset..

Enable Gravity: Boolean. Enable Gravity:. If object should have the force of gravity applied.

Auto Weld: Boolean. Auto Weld:. If true and is attached to a parent, the two bodies will be joined into a single rigid body. Physical settings like collision profile and body settings are determined by the root.

Start Awake: Boolean. Start Awake:. If object should start awake, or if it should initially be sleeping.

Generate Wake Events: Boolean. Generate Wake Events:. Should 'wake/sleep' events fire when this object is woken up or put to sleep by the physics simulation..

Update Mass When Scale Changes: Boolean. Update Mass when Scale Changes:. If true, it will update mass when scale change *.

