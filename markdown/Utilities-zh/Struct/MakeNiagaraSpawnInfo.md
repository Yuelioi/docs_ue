# MakeNiagaraSpawnInfo

添加一个节点，从其成员中创建一个 "NiagaraSpawnInfo"。

## 图示

![]($-20221218-14584244.png)

## Inputs

计数。整数。Count:.要产生多少个粒子。

Interp Start Dt: Float (single-precision).Interp Start Dt:.催生第一个粒子的子帧延迟时间。

区间Dt：浮点数（单精度）。间隔Dt:。每个粒子之间的子帧delta时间。

产卵组。整数。产卵组：。一个整数，用于识别这个产卵信息。通常情况下，这是不使用的。一个例子是当使用多个产卵模块从多个不同的位置产卵时。  

## Outputs

尼亚加拉的产卵信息。产卵信息结构。
