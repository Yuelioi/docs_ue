# PlayDialogueatLocation

在给定的位置播放一段对话。这是一个火灾和遗忘的声音，不与任何演员一起移动。在这一点上，复制也没有被处理。

目标是游戏的静力学

## 图示

![]($-20221218-18072450.png)

## Inputs

在。执行。

对话。Dialogue Wave Object Reference.对话要播放。

Context（上下文）。Dialogue Context Structure（对话上下文结构），对话要播放的上下文。

Location（位置）。向量。播放对话的世界位置。

Rotation（旋转）。旋转器。播放对话的世界旋转。

Volume Multiplier（音量乘数）。Float（单精度）。一个与音量相乘的线性标量，以使声音更响亮或更柔和。

音高乘法器。浮点数（单精度）。一个与音高相乘的线性标量。

开始时间。Float（单精度）。从对话的多远开始播放。

衰减设置。声音衰减对象参考。覆盖衰减设置包，用它来播放声音。 

## Outputs

输出。执行。

Plays a dialogue at the given location. This is a fire and forget sound and does not travel with any actor.. Replication is also not handled at this point.

Target is Gameplay Statics

## 图示

![]($-20221218-18072450.png)

## Inputs

In: Exec.

Dialogue: Dialogue Wave Object Reference. dialogue to play.

Context: Dialogue Context Structure (by ref). context the dialogue is to play in.

Location: Vector. World position to play dialogue at.

Rotation: Rotator. World rotation to play dialogue at.

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the dialogue to begin playback at.

Attenuation Settings: Sound Attenuation Object Reference. Override attenuation settings package to play sound with.  

## Outputs

Out: Exec.

