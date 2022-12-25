# AddKey_Bool

给这个通道添加一个键。这将初始化一个新的键，并返回一个对它的引用。

目标是电影场景脚本 Bool Channel

## 图示

![]($-20221218-20483450.png)

## Inputs

在。执行。

目标。电影场景脚本 Bool Channel对象参考。

在时间上。帧号结构（通过参考）。这个键应该在哪个帧上。尊重TimeUnit，以确定它是一个显示速率帧还是一个tick分辨率帧。

新值。布尔值。这个键应该被创建的值。

子帧。Float（单精度）。可选的[0-1]钳制的子帧，将此键放在上面。如果TimeUnit被设置为Tick Resolution，则忽略。

时间单位。ESequenceTimeUnit枚举。指定的InTime是以显示速率帧还是以Tick Resolution为单位。  

## Outputs

出：执行。

返回值。电影场景脚本 Bool Key 对象参考。在指定时间用指定的值创建的钥匙。
