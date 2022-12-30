# AddForce

Add force to character. Forces are accumulated each tick and applied together. so multiple calls to this function will accumulate.. Forces are scaled depending on timestep, so they can be applied each frame. If you want an. instantaneous force, use AddImpulse.. Adding a force always takes the actor's mass into account.. Note that changing the momentum of characters like this can change the movement mode.

Target is Character Movement Component

## 图示

![]($-20221218-20180262.png)

## Inputs

In: Exec.

Target: Character Movement Component Object Reference.

Force: Vector. Force to apply..  

## Outputs

Out: Exec.

