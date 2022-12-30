# GetAttenuationSettingsToApply

检索目标音频组件的衰减设置数据。如果没有找到设置，返回FALSE。因为衰减设置数据结构是复制的，FALSE返回将返回默认值。

目标是音频组件

## 图示

![]($-20221218-18025291.png)

## Inputs

在。执行。

目标。音频组件对象参考。 

## Outputs

输出。Exec.

Out Attenuation Settings（输出衰减设置）。声音衰减设置结构。

返回值。布尔值。检索目标音频组件的衰减设置数据。如果没有找到设置，返回FALSE。因为衰减设置数据结构是复制的，FALSE返回将返回默认值。
