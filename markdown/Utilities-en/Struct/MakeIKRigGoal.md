# MakeIKRigGoal

Adds a node that create a 'IKRigGoal' from its members

## 图示

![]($-20221218-14553092.png)

## Inputs

Name: Name. Name:. Name of the IK Goal. Must correspond to the name of a Goal in the target IKRig asset..

Transform Source: EIKRigGoalTransformSource Enum. Transform Source:. Set the source of the transform data for the Goal.. "Manual Input" uses the values provided by the blueprint node pin.. "Bone" uses the transform of the bone provided by OptionalSourceBone.. "Actor Component" uses the transform supplied by any Actor Components that implements the IIKGoalCreatorInterface.

Position: Vector. Position:. Position of the IK goal in Component Space of target actor component..

Rotation: Rotator. Rotation:. Rotation of the IK goal in Component Space of target actor component..

Position Alpha: Float (single-precision). Position Alpha:. Range 0-1, default is 1.0. Smoothly blends the Goal position from the input pose (0.0) to the Goal position (1.0)..

Rotation Alpha: Float (single-precision). Rotation Alpha:. Range 0-1, default is 1.0. Smoothly blends the Goal rotation from the input pose (0.0) to the Goal rotation (1.0)..

Position Space: EIKRigGoalSpace Enum. Position Space:. The space that the goal position is in.. "Additive" treats the goal transform as an additive offset relative to the Bone at the effector.. "Component" treats the goal transform as being in the space of the Skeletal Mesh Actor Component.. "World" treats the goal transform as being in the space of the World..

Rotation Space: EIKRigGoalSpace Enum. Rotation Space:. The space that the goal rotation is in.. "Additive" treats the goal transform as an additive offset relative to the Bone at the effector.. "Component" treats the goal transform as being in the space of the Skeletal Mesh Actor Component.. "World" treats the goal transform as being in the space of the World..  

## Outputs

IKRig Goal: IKRig Goal Structure.

