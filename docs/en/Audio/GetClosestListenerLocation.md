# GetClosestListenerLocation

Finds and returns the position of the closest listener to the specified location

Target is Gameplay Statics

## 图示

![]($-20221218-18045113.png)

## Inputs

In: Exec.

Location: Vector (by ref). The location from which we'd like to find the closest listener, in world space..

Maximum Range: Float (single-precision). The maximum distance away from Location that a listener can be..

Allow Attenuation Override: Boolean. True for the adjusted listener position (if attenuation override is set), false for the raw listener position (for panning).  

## Outputs

Out: Exec.

Listener Position: Vector. [Out] The position of the closest listener in world space, if found..

Return Value: Boolean. true if we've successfully found a listener within MaximumRange of Location, otherwise false..

