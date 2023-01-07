# AddKey_ActorReference

给这个通道添加一个键。这将初始化一个新的键，并返回一个对它的引用。

目标是电影场景脚本的演员参考通道

## 图示

![](/uploads/projects/ue-bluprint/20221218-20483318.png)

## Inputs

在。执行。

目标。电影场景脚本演员参考通道对象参考。

在时间上。帧号结构。这个键应该在哪个帧上。尊重 TimeUnit，以确定它是一个显示速率帧还是一个 tick 分辨率帧。

新值。电影场景对象的绑定 ID 结构。此键应创建的值。

子帧。Float（单精度）。可选的[0-1]钳制的子帧，将此键放在上面。如果 TimeUnit 被设置为 Tick Resolution，则忽略。

时间单位。ESequenceTimeUnit 枚举。指定的 InTime 是以显示速率帧还是以 Tick Resolution 为单位。

## Outputs

出：执行。

返回值。电影场景脚本演员参考键对象参考。在指定时间用指定的值创建的钥匙。

<hr>

Add a key to this channel. This initializes a new key and returns a reference to it.

Target is Movie Scene Scripting Actor Reference Channel

## 图示

![](/uploads/projects/ue-bluprint/20221218-20483318.png)

## Inputs

In: Exec.

Target: Movie Scene Scripting Actor Reference Channel Object Reference.

In Time: Frame Number Structure. The frame this key should go on. Respects TimeUnit to determine if it is a display rate frame or a tick resolution frame..

New Value: Movie Scene Object Binding ID Structure. The value that this key should be created with..

Sub Frame: Float (single-precision). Optional [0-1) clamped sub-frame to put this key on. Ignored if TimeUnit is set to Tick Resolution..

Time Unit: ESequenceTimeUnit Enum. Is the specified InTime in Display Rate frames or Tick Resolution..

## Outputs

Out: Exec.

Return Value: Movie Scene Scripting Actor Reference Key Object Reference. The key that was created with the specified values at the specified time..
