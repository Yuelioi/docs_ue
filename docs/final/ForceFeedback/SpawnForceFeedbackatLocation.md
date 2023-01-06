# SpawnForceFeedbackatLocation

在给定的位置播放一个力反馈效果。这是一个火烧眉毛的效果，并不随任何行为者一起移动。在这一点上，复制也不被处理。

目标是游戏性的统计学

## 图示

![]($-20221218-19005329.png)

## Inputs

在。执行。

力反馈效果。力反馈效果的对象参考。要播放的效果。

地点：向量。矢量。世界位置，以效果为中心。

旋转。旋转器。以世界为中心的旋转效果。

循环。布尔型。

强度乘法器。浮点数（单精度）。强度乘法器。

开始时间。浮点数（单精度）。从反馈效果的多远开始播放。

衰减设置。力反馈衰减对象参考。覆盖衰减设置包，发挥效果。

自动销毁：布尔值。当反馈模式结束时（完成或停止），返回的力反馈组件是否会被自动清理，或者是否可以重新激活。  

## Outputs

出：执行。

返回值。强制反馈组件对象参考。用来操纵播放反馈效果的强制反馈组件。

Plays a force feedback effect at the given location. This is a fire and forget effect and does not travel with any actor. Replication is also not handled at this point.

Target is Gameplay Statics

## 图示

![]($-20221218-19005329.png)

## Inputs

In: Exec.

Force Feedback Effect: Force Feedback Effect Object Reference. effect to play.

Location: Vector. World position to center the effect at.

Rotation: Rotator. World rotation to center the effect at.

Looping: Boolean.

Intensity Multiplier: Float (single-precision). Intensity multiplier.

Start Time: Float (single-precision). How far in to the feedback effect to begin playback at.

Attenuation Settings: Force Feedback Attenuation Object Reference. Override attenuation settings package to play effect with.

Auto Destroy: Boolean. Whether the returned force feedback component will be automatically cleaned up when the feedback pattern finishes (by completing or stopping) or whether it can be reactivated.  

## Outputs

Out: Exec.

Return Value: Force Feedback Component Object Reference. Force Feedback Component to manipulate the playing feedback effect with.

