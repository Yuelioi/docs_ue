# CreateControlBus

用提供的默认值创建一个调制总线。

目标是音频调制静态

## 图示

![](/uploads/projects/ue-bluprint/20221218-18032459.png)

## Inputs

在。执行。

名称。名称。总线的名称。

Parameter（参数）。Sound Modulation Parameter（声音调制参数）对象参考。创建总线的默认值。

激活。布尔值。是否在创建时激活总线。如果为真，只有在返回的总线被手动停用且未被引用或销毁的情况下才会发生停用（即在所有引用变得不活跃时不会停用）。

## Outputs

出。执行。

返回值。声音控制总线对象参考。

<hr>

Creates a modulation bus with the provided default value.

Target is Audio Modulation Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18032459.png)

## Inputs

In: Exec.

Name: Name. Name of bus.

Parameter: Sound Modulation Parameter Object Reference. Default value for created bus.

Activate: Boolean. Whether or not to activate bus on creation. If true, deactivation will only occur if returned bus is manually deactivated and not referenced or destroyed (i.e. will not deactivate when all references become inactive)..

## Outputs

Out: Exec.

Return Value: Sound Control Bus Object Reference.
