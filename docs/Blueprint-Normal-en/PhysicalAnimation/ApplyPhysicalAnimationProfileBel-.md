# ApplyPhysicalAnimationProfileBel-

Applies the physical animation profile to the body given and all bodies below.

Target is Physical Animation Component

## 图示

![]($-20221218-20202408.png)

## Inputs

In: Exec.

Target: Physical Animation Component Object Reference.

Body Name: Name. The body from which we'd like to start applying the physical animation profile. Finds all bodies below in the skeleton hierarchy. None implies all bodies.

Profile Name: Name. The physical animation profile we'd like to apply. For each body in the physics asset we search for physical animation settings with this name..

Include Self: Boolean. Whether to include the provided body name in the list of bodies we act on (useful to ignore for cases where a root has multiple children).

Clear Not Found: Boolean. If true, bodies without the given profile name will have any existing physical animation settings cleared. If false, bodies without the given profile name are left untouched..  

## Outputs

Out: Exec.

