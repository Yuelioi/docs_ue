# SpawnDialogueAttached

生成DialogueWave，这是一种特殊类型的资产，需要Context数据以解决特定的SoundBase，然后将其传递给新的音频组件。这个功能允许用户创建和播放附在特定场景组件上的音频组件。对于需要在空间中跟随另一个物体的空间化和/或距离衰减的对话很有用。

目标是游戏静态

## 图示

![]($-20221218-18075983.png)

## Inputs

在。执行。

对话。Dialogue Wave Object Reference. 对话播放。

Context（上下文）。对话上下文结构（通过引用）。对话要播放的上下文。

Attach to Component: Scene Component Object Reference.

附加点名称。名称。在AttachComponent中可选的命名点，以播放声音。

位置。矢量。根据Location Type的值，这是一个从附件组件/点开始的相对偏移，或者是一个将被翻译成相对偏移的绝对世界位置。

Rotation（旋转）。旋转器。取决于位置类型的值，这是从附加组件/点开始的相对偏移，或者是一个绝对的世界旋转，它将被翻译成一个相对偏移。

Location Type（位置类型）。EAttachLocation枚举。指定Location是一个相对偏移还是一个绝对的世界位置。

Stop when Attached to Destroyed（附着时停止）。布尔值。指定当它所连接的所有者被摧毁时，声音是否应该停止播放。

Volume Multiplier（音量乘数）。Float（单精度）。一个与音量相乘的线性标量，以使声音更响亮或更柔和。

音高乘法器。浮点数（单精度）。一个与音高相乘的线性标量。

开始时间。Float（单精度）。从对话的多远开始播放。

衰减设置。声音衰减对象参考。覆盖衰减设置包，用它来播放声音。

Auto Destroy: 布尔值。当声音结束时（通过完成或停止），返回的音频组件是否会被自动清理，或者是否可以重新激活。 

## Outputs

输出。执行。

返回值。音频组件对象参考。用来操作播放对话的音频组件。

Spawns a DialogueWave, a special type of Asset that requires Context data in order to resolve a specific SoundBase,. which is then passed on to the new Audio Component. This function allows users to create and play Audio Components. attached to a specific Scene Component. Useful for spatialized and/or distance-attenuated dialogue that needs to. follow another object in space.

Target is Gameplay Statics

## 图示

![]($-20221218-18075983.png)

## Inputs

In: Exec.

Dialogue: Dialogue Wave Object Reference. dialogue to play.

Context: Dialogue Context Structure (by ref). context the dialogue is to play in.

Attach to Component: Scene Component Object Reference.

Attach Point Name: Name. Optional named point within the AttachComponent to play the sound at.

Location: Vector. Depending on the value of Location Type this is either a relative offset from the attach component/point or an absolute world position that will be translated to a relative offset.

Rotation: Rotator. Depending on the value of Location Type this is either a relative offset from the attach component/point or an absolute world rotation that will be translated to a relative offset.

Location Type: EAttachLocation Enum. Specifies whether Location is a relative offset or an absolute world position.

Stop when Attached to Destroyed: Boolean. Specifies whether the sound should stop playing when the owner its attached to is destroyed..

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the dialogue to begin playback at.

Attenuation Settings: Sound Attenuation Object Reference. Override attenuation settings package to play sound with.

Auto Destroy: Boolean. Whether the returned audio component will be automatically cleaned up when the sound finishes (by completing or stopping) or whether it can be reactivated.  

## Outputs

Out: Exec.

Return Value: Audio Component Object Reference. Audio Component to manipulate the playing dialogue with.

