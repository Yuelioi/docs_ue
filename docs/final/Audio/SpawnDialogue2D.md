# SpawnDialogue2D

生成DialogueWave，这是一种特殊类型的资产，需要Context数据以解决特定的SoundBase，然后将其传递给新的音频组件。使用此函数创建的音频组件默认不会应用空间化。声音实例将在催生这个音频组件时开始播放。

  * 不复现。





目标是游戏状态

## 图示

![]($-20221218-18075723.png)

## Inputs

在。执行。

对话。对话波段对象参考。对话播放。

Context（上下文）。Dialogue Context Structure（对话上下文结构）（通过引用）。对话要播放的上下文。

Volume Multiplier（音量乘数）。Float（单精度）。一个与音量相乘的线性标量，以使声音变大或变小。

音高乘数。浮点数（单精度）。一个与音高相乘的线性标量。

开始时间。Float（单精度）。从对话的多远开始播放。

Auto Destroy：布尔值。当声音结束（完成或停止）时，返回的音频组件是否会被自动清理，或者是否可以重新激活它。 

## Outputs

输出。执行。

返回值。音频组件对象参考。一个操作生成的声音的音频组件。

Spawns a DialogueWave, a special type of Asset that requires Context data in order to resolve a specific SoundBase,. which is then passed on to the new Audio Component. Audio Components created using this function by default will not. have Spatialization applied. Sound instances will begin playing upon spawning this Audio Component.

  * Not Replicated.





Target is Gameplay Statics

## 图示

![]($-20221218-18075723.png)

## Inputs

In: Exec.

Dialogue: Dialogue Wave Object Reference. dialogue to play.

Context: Dialogue Context Structure (by ref). context the dialogue is to play in.

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the dialogue to begin playback at.

Auto Destroy: Boolean. Whether the returned audio component will be automatically cleaned up when the sound finishes (by completing or stopping) or whether it can be reactivated.  

## Outputs

Out: Exec.

Return Value: Audio Component Object Reference. An audio component to manipulate the spawned sound.

