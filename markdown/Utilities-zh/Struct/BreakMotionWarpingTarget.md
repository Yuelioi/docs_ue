# BreakMotionWarpingTarget

Adds a node that breaks a 'MotionWarpingTarget' into its member fields

## 图示

![]($-20221218-14401316.png)

## Inputs

Motion Warping Target: Motion Warping Target Structure (by ref).  

## Outputs

Transform: Transform. Transform:. When the warp target is created from a component this stores the transform of the component at the time of creation, otherwise its the transform supplied by the user.

Component: Scene Component Weak object. Component:. Optional component used to calculate the final target transform.

Bone Name: Name. Bone Name:. Optional bone name in the component used to calculate the final target transform.

Follow Component: Boolean. Follow Component:. Whether the target transform calculated from a component and an optional bone should be updated during the warp.

