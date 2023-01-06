# AddForce

为角色添加力。力量在每个tick中累积并一起应用。所以多次调用这个函数会累积。力的大小取决于时间步长，所以它们可以在每一帧中应用。如果你想要一个瞬时的力，请使用AddImpulse.DOC。增加一个力总是要考虑到演员的质量。注意，像这样改变角色的动量可以改变运动模式。

目标是角色运动组件

## 图示

![]($-20221218-20180262.png)

## Inputs

在。执行。

目标。角色运动组件对象参考。

力量。矢量。力的应用...  

## Outputs

出：执行。

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

