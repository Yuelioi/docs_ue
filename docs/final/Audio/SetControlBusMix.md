# SetControlBusMix

用所提供的舞台数据设置控制总线混合，如果舞台在混合的活动实例代理中被提供。不更新混音的UObject定义。

目标是音频调制静态

## 图示

![]($-20221218-18074163.png)

## Inputs

在。执行。

混合。声音控制总线混合对象参考。要更新的混合。

Stages（阶段）。声音控制总线混合阶段结构的数组。要设置的舞台。如果舞台的总线没有被混合对象引用，舞台的更新请求将被忽略。

淡出时间。浮点数（单精度）。在当前值和新值之间插值时给用户的淡出时间。如果是负数，则返回到舞台上设置的最后一次淡出时间。如果舞台上没有设置淡出时间，则使用舞台上设置的混合资产中的攻击时间。 

## Outputs

输出。执行：执行。

Sets a Control Bus Mix with the provided stage data, if the stages. are provided in an active instance proxy of the mix.. Does not update UObject definition of the mix.

Target is Audio Modulation Statics

## 图示

![]($-20221218-18074163.png)

## Inputs

In: Exec.

Mix: Sound Control Bus Mix Object Reference. Mix to update.

Stages: Array of Sound Control Bus Mix Stage Structures. Stages to set. If stage's bus is not referenced by mix, stage's update request is ignored..

Fade Time: Float (single-precision). Fade time to user when interpolating between current value and new values. If negative, falls back to last fade time set on stage. If fade time never set on stage, uses attack time set on stage in mix asset..  

## Outputs

Out: Exec.

