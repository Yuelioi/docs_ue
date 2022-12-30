# WasComponentRecentlyRendered

Returns true if this component has been rendered "recently", with a tolerance in seconds to define what "recent" means.. e.g.: If a tolerance of 0.1 is used, this function will return true only if the actor was rendered in the last 0.1 seconds of game time.

Target is Primitive Component

## 图示

![]($-20221218-20403592.png)

## Inputs

Target: Primitive Component Object Reference.

Tolerance: Float (single-precision). How many seconds ago the actor last render time can be and still count as having been "recently" rendered..  

## Outputs

Return Value: Boolean. Whether this actor was recently rendered..

