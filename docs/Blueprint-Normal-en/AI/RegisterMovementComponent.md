# RegisterMovementComponent

Register with the given avoidance manager.

Target is Avoidance Manager

## 图示

![]($-20221218-17483016.png)

## Inputs

In: Exec.

Target: Avoidance Manager Object Reference.

Movement Comp: Movement Component Object Reference.

Avoidance Weight: Float (single-precision). When avoiding each other, actors divert course in proportion to their relative weights. Range is 0.0 to 1.0. Special: at 1.0, actor will not divert course at all..  

## Outputs

Out: Exec.

Return Value: Boolean.

