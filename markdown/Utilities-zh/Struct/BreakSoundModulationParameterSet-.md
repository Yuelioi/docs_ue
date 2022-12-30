# BreakSoundModulationParameterSet-

添加一个节点，将'SoundModulationParameterSettings'分解成其成员字段

## 图示

![]($-20221218-14431028.png)

## Inputs

声音调制参数设置。声音调制参数设置结构（按参考）。  

## Outputs

归一化的值。Float (single-precision).归一化的值：。调制器的归一化、无单位默认值。为了确保混合、修补和调制的旁路功能，应该选择GetMixFunction（见USoundModulationParameter），使其还原为一个同一函数（即函数作为[0.0, 1.0]范围内所有数值的 "直通"）。如果GetMixFunction执行数学运算f(x1, x2)，那么默认的ValueNormalized的结果应该是： f(x1, d) = x1 其中d是ValueNormalized。
