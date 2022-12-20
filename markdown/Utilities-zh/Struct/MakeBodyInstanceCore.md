# MakeBodyInstanceCore

Adds a node that create a 'BodyInstanceCore' from its members

## 图示

![]($-20221218-14474935.png)

## Inputs

Simulate Physics: Boolean. Simulate Physics:. If true, this body will use simulation. If false, will be 'fixed' (ie kinematic) and move where it is told.. For a Skeletal Mesh Component, simulating requires a physics asset setup and assigned on the SkeletalMesh asset.. For a Static Mesh Component, simulating requires simple collision to be setup on the StaticMesh asset..

Auto Weld: Boolean. Auto Weld:. If true and is attached to a parent, the two bodies will be joined into a single rigid body. Physical settings like collision profile and body settings are determined by the root.

Update Mass When Scale Changes: Boolean. Update Mass when Scale Changes:. If true, it will update mass when scale change *.  

## Outputs

Body Instance Core: Body Instance Core Structure.

