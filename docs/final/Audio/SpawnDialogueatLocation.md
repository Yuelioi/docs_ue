# SpawnDialogueatLocation

生成一个对话波（DialogueWave），这是一种特殊类型的资产，需要上下文数据以解决特定的 SoundBase，然后将其传递给新的音频组件。这个功能允许用户在一个特定的世界位置和旋转中创建和播放音频组件。对空间化和/或距离衰减的对话很有用。

目标是游戏的静力学

## 图示

![](/uploads/projects/ue-bluprint/20221218-18075852.png)

## Inputs

在。执行。

对话。Dialogue Wave Object Reference。要播放的对话。

语境。对话语境结构（通过参考）。对话要播放的上下文。

位置。矢量。播放对话的世界位置。

Rotation（旋转）。旋转器。播放对话的世界旋转。

Volume Multiplier（音量乘数）。Float（单精度）。一个与音量相乘的线性标量，以使声音更响亮或更柔和。

音高乘数。浮点数（单精度）。一个与音高相乘的线性标量。

开始时间。Float（单精度）。从对话的多远开始播放。

衰减设置。声音衰减对象参考。覆盖衰减设置包，用它来播放声音。

Auto Destroy: 布尔值。当声音结束时（完成或停止），返回的音频组件是否会被自动清理，或者是否可以重新激活。

## Outputs

输出。执行。

返回值。音频组件对象参考。用来操作播放对话的音频组件。

<hr>

Spawns a DialogueWave, a special type of Asset that requires Context data in order to resolve a specific SoundBase,. which is then passed on to the new Audio Component. This function allows users to create and play Audio Components at a. specific World Location and Rotation. Useful for spatialized and/or distance-attenuated dialogue.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18075852.png)

## Inputs

In: Exec.

Dialogue: Dialogue Wave Object Reference. Dialogue to play.

Context: Dialogue Context Structure (by ref). Context the dialogue is to play in.

Location: Vector. World position to play dialogue at.

Rotation: Rotator. World rotation to play dialogue at.

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far into the dialogue to begin playback at.

Attenuation Settings: Sound Attenuation Object Reference. Override attenuation settings package to play sound with.

Auto Destroy: Boolean. Whether the returned audio component will be automatically cleaned up when the sound finishes (by completing or stopping) or whether it can be reactivated.

## Outputs

Out: Exec.

Return Value: Audio Component Object Reference. Audio Component to manipulate the playing dialogue with.
