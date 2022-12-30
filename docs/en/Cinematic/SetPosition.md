# SetPosition

Set the position of the interpolation.. Note: if the interpolation is not currently active, this function doesn't send any Kismet events

Target is Matinee Actor

## 图示

![]($-20221218-18163933.png)

## Inputs

In: Exec.

Target: Matinee Actor Object Reference.

New Position: Float (single-precision). the new position to set the interpolation to.

Jump: Boolean. if true, teleport to the new position (don't trigger any events between the old and new positions, etc).  

## Outputs

Out: Exec.

