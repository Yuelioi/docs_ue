# AddImpulsetoAllBodiesBelow

Add impulse to all single rigid bodies below. Good for one time instant burst.

Target is Skeletal Mesh Component

## 图示

![]($-20221218-20204165.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

Impulse: Vector. Magnitude and direction of impulse to apply..

Bone Name: Name. If a SkeletalMeshComponent, name of body to apply impulse to. 'None' indicates root body..

Vel Change: Boolean. If true, the Strength is taken as a change in velocity instead of an impulse (ie. mass will have no effect)..

Include Self: Boolean. If false, Force is only applied to bodies below but not given bone name..  

## Outputs

Out: Exec.

