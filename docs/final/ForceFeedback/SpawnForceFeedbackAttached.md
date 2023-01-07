# SpawnForceFeedbackAttached

播放一个附加在指定组件上的力反馈效果。这是一个火灾和遗忘的效果。在这一点上也不处理复制问题。

目标是游戏性的统计学

## 图示

![](/uploads/projects/ue-bluprint/20221218-19005461.png)

## Inputs

在。执行。

力反馈效果。力反馈效果的对象参考。要播放的效果。

附加到组件。场景组件对象参考。

附加点名称。名称。在 AttachComponent 中可选择的命名点，以便附加到。

地点：向量。矢量。根据 Location Type 的值，这要么是一个与附加组件/点的相对偏移，要么是一个将被转换为相对偏移的绝对世界位置。

旋转。旋转器。根据位置类型的值，这要么是一个从附加组件/点的相对偏移，要么是一个绝对的世界旋转，将被翻译成一个相对偏移。

位置类型。EAttachLocation 枚举。指定 Location 是相对偏移还是绝对世界位置。

附着到销毁时停止。布尔值。指定当附加组件的所有者被销毁时，反馈效果是否应该停止播放。

循环。布尔型。

强度乘法器。浮点数（单精度）。强度乘法器。

开始时间。浮点数（单精度）。从反馈效果的多远开始播放。

衰减设置。力反馈衰减对象参考。覆盖衰减设置包，发挥效果。

自动销毁：布尔值。当反馈程序结束（完成或停止）时，返回的力反馈组件是否会被自动清理，或者是否可以重新激活。

## Outputs

出：执行。

返回值。强制反馈组件对象参考。用来操纵播放反馈效果的强制反馈组件。

<hr>

Plays a force feedback effect attached to and following the specified component. This is a fire and forget effect. Replication is also not handled at this point.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-19005461.png)

## Inputs

In: Exec.

Force Feedback Effect: Force Feedback Effect Object Reference. effect to play.

Attach to Component: Scene Component Object Reference.

Attach Point Name: Name. Optional named point within the AttachComponent to attach to.

Location: Vector. Depending on the value of Location Type this is either a relative offset from the attach component/point or an absolute world position that will be translated to a relative offset.

Rotation: Rotator. Depending on the value of Location Type this is either a relative offset from the attach component/point or an absolute world rotation that will be translated to a relative offset.

Location Type: EAttachLocation Enum. Specifies whether Location is a relative offset or an absolute world position.

Stop when Attached to Destroyed: Boolean. Specifies whether the feedback effect should stop playing when the owner of the attach to component is destroyed..

Looping: Boolean.

Intensity Multiplier: Float (single-precision). Intensity multiplier.

Start Time: Float (single-precision). How far in to the feedback effect to begin playback at.

Attenuation Settings: Force Feedback Attenuation Object Reference. Override attenuation settings package to play effect with.

Auto Destroy: Boolean. Whether the returned force feedback component will be automatically cleaned up when the feedback patern finishes (by completing or stopping) or whether it can be reactivated.

## Outputs

Out: Exec.

Return Value: Force Feedback Component Object Reference. Force Feedback Component to manipulate the playing feedback effect with.
