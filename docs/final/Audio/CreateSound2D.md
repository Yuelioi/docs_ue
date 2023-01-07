# CreateSound2D

这个功能允许用户在播放前创建音频组件，并专门为非空间化、非距离衰减的声音进行设置。使用此功能创建的音频组件，默认情况下不会应用空间化。

目标是游戏静态

## 图示

![](/uploads/projects/ue-bluprint/20221218-18032798.png)

## Inputs

在。执行。

声音。声音基本对象参考。声音创建.

Volume Multiplier（音量乘数）。Float（单精度）。一个与音量相乘的线性标量，以使声音变大或变小。

音高乘法器。浮点数（单精度）。一个与音高相乘的线性标量。

开始时间。Float（单精度）。在声音的多远处开始播放。

并发设置。声音并发对象参考。覆盖并发设置包，用它来播放声音。

Persist Across Level Transition: 布尔值。

Auto Destroy（自动销毁）：布尔值。当声音结束（完成或停止）时，返回的音频组件是否会被自动清理，或者是否可以重新激活。

## Outputs

输出。执行。

返回值。音频组件对象参考。一个操作创建的声音的音频组件。

<hr>

This function allows users to create Audio Components in advance of playback with settings specifically for non-spatialized,. non-distance-attenuated sounds. Audio Components created using this function by default will not have Spatialization applied.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18032798.png)

## Inputs

In: Exec.

Sound: Sound Base Object Reference. Sound to create..

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far into the sound to begin playback at.

Concurrency Settings: Sound Concurrency Object Reference. Override concurrency settings package to play sound with.

Persist Across Level Transition: Boolean.

Auto Destroy: Boolean. Whether the returned audio component will be automatically cleaned up when the sound finishes (by completing or stopping), or whether it can be reactivated.

## Outputs

Out: Exec.

Return Value: Audio Component Object Reference. An audio component to manipulate the created sound.
