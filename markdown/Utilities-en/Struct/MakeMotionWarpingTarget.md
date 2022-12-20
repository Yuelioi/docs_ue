# MakeMotionWarpingTarget

Adds a node that create a 'MotionWarpingTarget' from its members

## 图示

![]($-20221218-14575654.png)

## Inputs

Transform: Transform. Transform:. When the warp target is created from a component this stores the transform of the component at the time of creation, otherwise its the transform supplied by the user.

Component: Scene Component Weak object. Component:. Optional component used to calculate the final target transform.

Bone Name: Name. Bone Name:. Optional bone name in the component used to calculate the final target transform.

Follow Component: Boolean. Follow Component:. Whether the target transform calculated from a component and an optional bone should be updated during the warp.  

## Outputs

Motion Warping Target: Motion Warping Target Structure.

