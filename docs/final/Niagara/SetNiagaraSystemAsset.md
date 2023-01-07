# SetNiagaraSystemAsset

切换该组件正在使用的资产。这需要 Niagara 等待并发执行和覆盖参数存储与新资产同步。默认情况下，当我们调用 SetAsset 时，现有的参数被重置，修改 bResetExistingOverrideParameters 以保持现有的参数数据不变。

目标是 Niagara 粒子系统组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20134163.png)

## Inputs

在。执行。

目标。尼亚加拉粒子系统组件对象参考。

在资产：Niagara 系统对象参考。

重置现有的覆盖参数。布尔值。

## Outputs

出：执行。

<hr>

Switch which asset the component is using.. This requires Niagara to wait for concurrent execution and the override parameter store to be synchronized with the new asset.. By default existing parameters are reset when we call SetAsset, modify bResetExistingOverrideParameters to leave existing parameter data as is.

Target is Niagara Particle System Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20134163.png)

## Inputs

In: Exec.

Target: Niagara Particle System Component Object Reference.

In Asset: Niagara System Object Reference.

Reset Existing Override Parameters: Boolean.

## Outputs

Out: Exec.
