# MakeAnimNode_SteamVRInputAnimPos-

Adds a node that create a 'AnimNode_SteamVRInputAnimPose' from its members

## 图示

![]($-20221218-14465302.png)

## Inputs

Motion Range: EMotionRange Enum. Motion Range:. Range of motion for the skeletal input values.

Hand: EHand Enum. Hand:. Which hand should the animation node retrieve skeletal input values for.

Hand Skeleton: EHandSkeleton Enum. Hand Skeleton:. What kind of skeleton are we dealing with.

Mirror: Boolean. Mirror:. Should the pose be mirrored so it can be applied to the opposite hand.

Steam VRSkeletal Transform: Steam VRSkeleton Transform Structure. Steam VRSkeletal Transform:. The UE4 equivalent of the SteamVR Transform values per bone.  

## Outputs

Anim Node Steam VRInput Anim Pose: Anim Node Steam VRInput Anim Pose Structure.

