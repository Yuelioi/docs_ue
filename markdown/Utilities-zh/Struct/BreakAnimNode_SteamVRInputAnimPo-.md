# BreakAnimNode_SteamVRInputAnimPo-

Adds a node that breaks a 'AnimNode_SteamVRInputAnimPose' into its member fields

## 图示

![]($-20221218-14310090.png)

## Inputs

Anim Node Steam VRInput Anim Pose: Anim Node Steam VRInput Anim Pose Structure (by ref).  

## Outputs

Motion Range: EMotionRange Enum. Motion Range:. Range of motion for the skeletal input values.

Hand: EHand Enum. Hand:. Which hand should the animation node retrieve skeletal input values for.

Hand Skeleton: EHandSkeleton Enum. Hand Skeleton:. What kind of skeleton are we dealing with.

Mirror: Boolean. Mirror:. Should the pose be mirrored so it can be applied to the opposite hand.

Steam VRSkeletal Transform: Steam VRSkeleton Transform Structure. Steam VRSkeletal Transform:. The UE4 equivalent of the SteamVR Transform values per bone.
