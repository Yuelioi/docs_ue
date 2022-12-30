# MakeSoundModulationLFOParams

添加一个节点，从其成员中创建一个'SoundModulationLFOParams'。

## 图示

![]($-20221218-15014977.png)

## Inputs

形状。ESoundModulationLFOShape Enum.形状：。振荡波形的形状。

振幅。浮点数（单精度）。振幅：。振荡器的振幅。

频率。Float (single-precision).频率：。振荡器的频率。

偏移量。Float（单精度）。偏移量：。振荡器的偏移。

循环。布尔型。循环：。是否循环震荡一次以上。

旁路。布尔型。旁路：。如果为真，则绕过LFO总线，不受参数、补丁或混合调制的影响（LFO仍处于活动状态并进行计算）。

## Outputs

声音调制的LFOParams。声音调制LFOParams结构。
