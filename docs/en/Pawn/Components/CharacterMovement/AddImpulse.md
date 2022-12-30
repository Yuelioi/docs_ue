# AddImpulse

Add impulse to character. Impulses are accumulated each tick and applied together. so multiple calls to this function will accumulate.. An impulse is an instantaneous force, usually applied once. If you want to continually apply. forces each frame, use AddForce().. Note that changing the momentum of characters like this can change the movement mode.

Target is Character Movement Component

## 图示

![]($-20221218-20180380.png)

## Inputs

In: Exec.

Target: Character Movement Component Object Reference.

Impulse: Vector. Impulse to apply..

Velocity Change: Boolean. Whether or not the impulse is relative to mass..  

## Outputs

Out: Exec.

