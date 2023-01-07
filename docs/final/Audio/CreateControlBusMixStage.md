# CreateControlBusMixStage

创建一个用于混合控制总线的舞台。

目标是音频调制静态

## 图示

![](/uploads/projects/ue-bluprint/20221218-18032683.png)

## Inputs

在。Exec.

Bus: Sound Control Bus 对象参考。总线阶段负责将混合值应用到。

值。Float（单精度）。当混合开始时，用于增加总线阶段的目标值。

攻击时间。Float (single-precision). 混合阶段的时间，以秒为单位。

释放时间。Float (single-precision). 舞台混入的时间，单位为秒。

## Outputs

输出。执行。

返回值。声音控制总线混合阶段结构。

<hr>

Creates a stage used to mix a control bus.

Target is Audio Modulation Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18032683.png)

## Inputs

In: Exec.

Bus: Sound Control Bus Object Reference. Bus stage is in charge of applying mix value to..

Value: Float (single-precision). Value for added bus stage to target when mix is active..

Attack Time: Float (single-precision). Time in seconds for stage to mix in..

Release Time: Float (single-precision). Time in seconds for stage to mix out..

## Outputs

Out: Exec.

Return Value: Sound Control Bus Mix Stage Structure.
