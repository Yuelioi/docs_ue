# AddorUpdateWarpTargetfromCompone-

Create and adds or update a target associated with a specified name

Target is Motion Warping Component

## 图示

![]($-20221218-20074121.png)

## Inputs

In: Exec.

Target: Motion Warping Component Object Reference.

Warp Target Name: Name. Warp target identifier.

Component: Scene Component Object Reference. Scene Component used to get the target transform.

Bone Name: Name. Optional bone or socket in the component used to get the target transform..

Follow Component: Boolean. Whether the target transform should update while the warping is active. Useful for tracking moving targets. Note that this will be one frame off if our owner ticks before the target actor. Add tick pre-requisites to avoid this..  

## Outputs

Out: Exec.

