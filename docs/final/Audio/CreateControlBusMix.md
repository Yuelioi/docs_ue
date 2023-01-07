# CreateControlBusMix

创建一个调制总线混合，总线阶段设置为提供的目标值。

目标是音频调制静态

## 图示

![](/uploads/projects/ue-bluprint/20221218-18032574.png)

## Inputs

在。Exec.

名称。名称。混合的名称.

阶段。Array of Sound Control Bus Mix Stage Structures. 舞台混音负责...

激活。布尔值。是否在创建时激活混音。如果为真，只有在返回的混音被手动停用且未被引用或销毁时，才会发生停用（即在所有引用变得不活跃时不会停用）。

## Outputs

输出。执行：执行。

返回值。声音控制总线混合对象参考。

<hr>

Creates a modulation bus mix, with a bus stage set to the provided target value.

Target is Audio Modulation Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18032574.png)

## Inputs

In: Exec.

Name: Name. Name of mix..

Stages: Array of Sound Control Bus Mix Stage Structures. Stages mix is responsible for..

Activate: Boolean. Whether or not to activate mix on creation. If true, deactivation will only occur if returned mix is manually deactivated and not referenced or destroyed (i.e. will not deactivate when all references become inactive)..

## Outputs

Out: Exec.

Return Value: Sound Control Bus Mix Object Reference.
