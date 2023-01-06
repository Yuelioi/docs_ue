# AddKey_String

给这个通道添加一个键。这将初始化一个新的键，并返回一个对它的引用。

目标是电影场景脚本字符串通道

## 图示

![]($-20221218-20484387.png)

## Inputs

在。执行。

目标。电影场景脚本字符串通道对象参考。

在时间上。帧号结构（通过参考）。这个键应该在哪个帧上。尊重TimeUnit，以确定它是一个显示速率帧还是一个tick分辨率帧。

新值。字符串。这个键应该被创建的值。

子帧。Float（单精度）。可选的[0-1]钳制的子帧，将此键放在上面。如果时间单位被设置为Tick Resolution，则忽略。

时间单位。ESequenceTimeUnit枚举。指定的InTime是以显示速率帧还是以Tick Resolution为单位。  

## Outputs

出：执行。

返回值。电影场景脚本字符串密钥对象参考。在指定时间用指定的值创建的键。

Add a key to this channel. This initializes a new key and returns a reference to it.

Target is Movie Scene Scripting String Channel

## 图示

![]($-20221218-20484387.png)

## Inputs

In: Exec.

Target: Movie Scene Scripting String Channel Object Reference.

In Time: Frame Number Structure (by ref). The frame this key should go on. Respects TimeUnit to determine if it is a display rate frame or a tick resolution frame..

New Value: String. The value that this key should be created with..

Sub Frame: Float (single-precision). Optional [0-1) clamped sub-frame to put this key on. Ignored if TimeUnit is set to Tick Resolution..

Time Unit: ESequenceTimeUnit Enum. Is the specified InTime in Display Rate frames or Tick Resolution..  

## Outputs

Out: Exec.

Return Value: Movie Scene Scripting String Key Object Reference. The key that was created with the specified values at the specified time..

