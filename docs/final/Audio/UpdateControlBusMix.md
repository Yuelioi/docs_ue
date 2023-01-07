# UpdateControlBusMix

将总线混音的 UObject 定义的更新提交给音频线程中的活动实例。(如果混音没有被激活，则忽略)。

目标是音频调制静态

## 图示

![](/uploads/projects/ue-bluprint/20221218-18081302.png)

## Inputs

在。执行。

混合。声音控制总线混合对象参考。混合物要更新。

淡出时间。Float（单精度）。在当前值和新值之间插值时给用户的淡出时间。如果是负数，则回到舞台上设置的最后一次淡出时间。如果舞台上从未设置过淡出时间，则使用混合资产中舞台上设置的攻击时间。

## Outputs

输出。执行：执行。

<hr>

Commits updates from a UObject definition of a bus mix to active instance in audio thread. (ignored if mix has not been activated).

Target is Audio Modulation Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18081302.png)

## Inputs

In: Exec.

Mix: Sound Control Bus Mix Object Reference. Mix to update.

Fade Time: Float (single-precision). Fade time to user when interpolating between current value and new values. If negative, falls back to last fade time set on stage. If fade time never set on stage, uses attack time set on stage in mix asset..

## Outputs

Out: Exec.
