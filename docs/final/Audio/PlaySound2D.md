# PlaySound2D

直接播放声音，没有衰减，非常适合用户界面的声音。

  * 火灾和遗忘。

  * 不可复制。





目标是游戏的静力学

## 图示

![]($-20221218-18072582.png)

## Inputs

在。执行：执行。

声音。声音基本对象参考。播放的声音。

Volume Multiplier（音量乘数）。Float（单精度）。一个与音量相乘的线性标量，以使声音更响亮或更柔和。

音高乘法器。浮点数（单精度）。一个与音高相乘的线性标量。

开始时间。Float（单精度）。从声音的多远开始播放。

并发设置。声音并发对象参考。覆盖并发设置包，用它来播放声音。

拥有的角色。Actor对象参考。在并发设置中作为 "所有者 "使用的角色。允许PlaySound调用每个所有者做一个并发限制。

是UISound。布尔值。如果声音是与用户界面相关的，则为真，否则为假。 

## Outputs

输出。执行。

Plays a sound directly with no attenuation, perfect for UI sounds.

  * Fire and Forget.

  * Not Replicated.





Target is Gameplay Statics

## 图示

![]($-20221218-18072582.png)

## Inputs

In: Exec.

Sound: Sound Base Object Reference. Sound to play..

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the sound to begin playback at.

Concurrency Settings: Sound Concurrency Object Reference. Override concurrency settings package to play sound with.

Owning Actor: Actor Object Reference. The actor to use as the "owner" for concurrency settings purposes. Allows PlaySound calls to do a concurrency limit per owner..

Is UISound: Boolean. True if sound is UI related, else false.  

## Outputs

Out: Exec.

