# PlaySoundatLocation

在给定的位置播放一个声音。这是一个火灾和遗忘的声音，不随任何行为者移动。在这一点上，复制也没有被处理。

目标是游戏的静力学

## 图示

![]($-20221218-18072724.png)

## Inputs

在。执行。

声音。声音基础对象参考。要播放的声音。

位置。矢量。播放声音的世界位置。

Rotation（旋转）。旋转器。播放声音的世界旋转。

Volume Multiplier（音量乘数）。Float（单精度）。一个与音量相乘的线性标量，以使声音更响亮或更柔和。

音高乘法器。浮点数（单精度）。一个与音高相乘的线性标量。

开始时间。Float（单精度）。从声音的多远开始播放。

衰减设置。声音衰减对象参考。覆盖衰减设置包，用它来播放声音。

并发设置。Sound Concurrency Object Reference. 覆盖并发设置包以播放声音。

拥有的角色。Actor对象参考。在并发设置中作为 "所有者 "使用的角色。允许PlaySound调用每个所有者做并发限制。

Initial Params: 初始活动声音参数对象参考。 

## Outputs

输出。Exec.

Plays a sound at the given location. This is a fire and forget sound and does not travel with any actor.. Replication is also not handled at this point.

Target is Gameplay Statics

## 图示

![]($-20221218-18072724.png)

## Inputs

In: Exec.

Sound: Sound Base Object Reference. sound to play.

Location: Vector. World position to play sound at.

Rotation: Rotator. World rotation to play sound at.

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the sound to begin playback at.

Attenuation Settings: Sound Attenuation Object Reference. Override attenuation settings package to play sound with.

Concurrency Settings: Sound Concurrency Object Reference. Override concurrency settings package to play sound with.

Owning Actor: Actor Object Reference. The actor to use as the "owner" for concurrency settings purposes. Allows PlaySound calls to do a concurrency limit per owner..

Initial Params: Initial Active Sound Params Object Reference.  

## Outputs

Out: Exec.

