# SetNiagaraSystemAsset

切换该组件正在使用的资产。这需要Niagara等待并发执行和覆盖参数存储与新资产同步。默认情况下，当我们调用SetAsset时，现有的参数被重置，修改bResetExistingOverrideParameters以保持现有的参数数据不变。

目标是Niagara粒子系统组件

## 图示

![]($-20221218-20134163.png)

## Inputs

在。执行。

目标。尼亚加拉粒子系统组件对象参考。

在资产：Niagara系统对象参考。

重置现有的覆盖参数。布尔值。  

## Outputs

出：执行。
