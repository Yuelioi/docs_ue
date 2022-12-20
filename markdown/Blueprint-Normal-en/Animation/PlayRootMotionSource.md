# PlayRootMotionSource

Callable by authority. Plays "out of band" animation: e.g, directly sets the RootMotionSourceID on the sync state, rather than the pending InputCmd.. This is analogous to outside code teleporting the actor (outside of the core simulation function)

Target is Mock Root Motion Component

## 图示

![]($-20221218-17502192.png)

## Inputs

In: Exec.

Target: Mock Root Motion Component Object Reference.

Source: Mock Root Motion Source Object Reference.  

## Outputs

Out: Exec.

