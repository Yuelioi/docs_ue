# SetTime_ActorReference

设置该键在所属通道的时间。将取代这个通道中已经存在的该帧数的任何键。

目标是电影场景脚本的演员参考键

## 图示

![]($-20221218-20504198.png)

## Inputs

在。执行。

目标。电影场景脚本演员参考关键对象参考。

新的框架编号。帧号结构（通过参考）。这个键应该被移到哪个帧？这应该是由TimeUnit.指定的时间单位。

子帧。Float（单精度）。如果使用显示率时间，这个子帧应该到什么地方去？钳制[0-1]，当TimeUnit被设置为Tick Resolution时被忽略。

时间单位。ESequenceTimeUnit枚举。NewFrameNumber应该被解释为显示速率帧还是在Tick Resolution？  

## Outputs

出：执行。
