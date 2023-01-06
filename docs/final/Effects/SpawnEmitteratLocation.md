# SpawnEmitteratLocation

在给定的位置和旋转中播放指定的效果，发射并忘记。当效果完成后，系统将消失。不能复制。

目标是游戏规则

## 图示

![]($-20221218-18551207.png)

## Inputs

在。执行。

发射器模板。粒子系统对象参考。要创建的粒子系统。

位置。矢量。在世界空间中放置效果的位置。

Rotation（旋转）。旋转器。在世界空间中放置效果的旋转。

Scale（比例）。向量。创建效果的比例。

Auto Destroy（自动销毁）：布尔值。当粒子系统完成播放时，该组件是否会自动销毁，或者是否可以重新激活它。

Pooling Method（汇集方法）。EPSCPoolMethod Enum。用于池化该组件的方法。默认为无。

Auto Activate System（自动激活系统）。Boolean（布尔）。

## Outputs

输出。执行。

返回值。粒子系统组件对象参考。
Plays the specified effect at the given location and rotation, fire and forget. The system will go away when the effect is complete. Does not replicate.

Target is Gameplay Statics

## 图示

![]($-20221218-18551207.png)

## Inputs

In: Exec.

Emitter Template: Particle System Object Reference. particle system to create.

Location: Vector. location to place the effect in world space.

Rotation: Rotator. rotation to place the effect in world space.

Scale: Vector. scale to create the effect at.

Auto Destroy: Boolean. Whether the component will automatically be destroyed when the particle system completes playing or whether it can be reactivated.

Pooling Method: EPSCPoolMethod Enum. Method used for pooling this component. Defaults to none..

Auto Activate System: Boolean.  

## Outputs

Out: Exec.

Return Value: Particle System Component Object Reference.

