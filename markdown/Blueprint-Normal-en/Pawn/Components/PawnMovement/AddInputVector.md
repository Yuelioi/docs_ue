# AddInputVector

Adds the given vector to the accumulated input in world space. Input vectors are usually between 0 and 1 in magnitude.. They are accumulated during a frame then applied as acceleration during the movement update.

Target is Pawn Movement Component

## 图示

![]($-20221218-20184139.png)

## Inputs

In: Exec.

Target: Pawn Movement Component Object Reference.

World Vector: Vector.

Force: Boolean. If true always add the input, ignoring the result of IsMoveInputIgnored()..  

## Outputs

Out: Exec.

