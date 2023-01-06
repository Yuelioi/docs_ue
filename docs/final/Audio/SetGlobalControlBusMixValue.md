# SetGlobalControlBusMixValue

将全局控制总线混合与所提供的总线相关的单一阶段设置为给定的浮点值。这个调用应该保留给那些总是处于活动状态的总线。不建议用于瞬时总线，因为不调用清除可以使总线无限期地保持活动。

目标是音频调制静态

## 图示

![]($-20221218-18074426.png)

## Inputs

在。Exec.

总线：声音控制总线对象参考。与混音相关的总线要更新。

值。Float（单精度）。将全局舞台设置为的值。

淡出时间。Float（单精度）。在当前值和新值之间插值时给用户的淡出时间。如果是负数，则返回到舞台上设置的最后一个淡出时间。如果舞台上从未设置过淡出时间，默认为100ms。 

## Outputs

输出。执行：执行。

Sets a Global Control Bus Mix with a single stage associated with the provided Bus to the given float value. This call should. be reserved for buses that are to be always active. It is NOT recommended for transient buses, as not calling clear can keep. buses active indefinitely.

Target is Audio Modulation Statics

## 图示

![]($-20221218-18074426.png)

## Inputs

In: Exec.

Bus: Sound Control Bus Object Reference. Bus associated with mix to update.

Value: Float (single-precision). Value to set global stage to..

Fade Time: Float (single-precision). Fade time to user when interpolating between current value and new value. If negative, falls back to last fade time set on stage. If fade time never set on stage, defaults to 100ms..  

## Outputs

Out: Exec.

