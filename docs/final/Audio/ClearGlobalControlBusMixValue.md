# ClearGlobalControlBusMixValue

如果设置了全局控制总线混合，则清除全局控制总线混合，使用应用的淡出时间返回到所提供的总线的参数默认值。

目标是音频调制静态

## 图示

![](/uploads/projects/ue-bluprint/20221218-18024497.png)

## Inputs

在。Exec.

总线：声音控制总线对象参考。与混合相关的总线要更新。

淡出时间。Float（单精度）。在当前值和新值之间插值时给用户的淡化时间。如果不是正数，则变化是立即的。

## Outputs

输出。执行。

<hr>

Clears global control bus mix if set, using the applied fade time to return to the provided bus's parameter default value.

Target is Audio Modulation Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18024497.png)

## Inputs

In: Exec.

Bus: Sound Control Bus Object Reference. Bus associated with mix to update.

Fade Time: Float (single-precision). Fade time to user when interpolating between current value and new values. If non-positive, change is immediate..

## Outputs

Out: Exec.
