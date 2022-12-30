# BreakGameplayCueNotify_SpawnResu-

添加一个打破'GameplayCueNotify_SpawnResult'的节点到其成员字段中。

## 图示

![]($-20221218-14363763.png)

## Inputs

Gameplay Cue Notify Spawn Result。Gameplay Cue Notify Spawn Result 结构（通过引用）。 

## Outputs

Fx系统组件。FXSystem组件对象参考数组。Fx System Components:。生成的FX组件的列表。这里可能有空指针，因为它符合定义的顺序。

音频组件。音频组件对象参考数组。音频组件：。生成的音频组件的列表。这里可能有空指针，因为它符合定义的顺序。

Camera Shakes（摄像机摇动）。相机抖动基本对象参考数组。Camera Shakes:. 播放的摄像机抖动的列表。如果在世界范围内进行摇动，每个本地玩家控制器将有一个相机摇动。

Camera Anim: 摄像机动画实例对象参考。Camera Anim:.摄像机动画。播放的摄像机动画.

Camera Lens Effects:摄像机镜头效果。Array of Camera Lens Effect Interface Interfaces. Camera Lens Effects:.相机镜头效果。生成的相机镜头效果列表。如果在世界范围内播放效果，每个本地玩家控制器会有一个相机镜头效果。

力反馈组件。力反馈组件对象参考。Force Feedback Component:.力反馈组件。生成的力反馈组件。这只有在力反馈被设置为在世界中播放时才有效。

Decal Component: Decal Component对象参考。Decal Component:. 生成的贴花组件。这可能是空的。