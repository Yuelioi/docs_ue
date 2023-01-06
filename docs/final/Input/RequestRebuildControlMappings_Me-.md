# RequestRebuildControlMappings_Me-

标记播放器，用于在该帧结束时重新应用所有映射上下文。在添加或删除映射上下文时，会自动调用这个功能。

目标是增强型输入子系统接口

## 图示

![]($-20221218-19292458.png)

## Inputs

在。执行。

目标。对象参考。

选项。修改上下文选项结构（通过引用）。移除该输入映射上下文时需要考虑的选项。

重建类型。EInputMappingRebuildType枚举。  

## Outputs

出：执行。

Flag player for reapplication of all mapping contexts at the end of this frame.. This is called automatically when adding or removing mappings contexts.

Target is Enhanced Input Subsystem Interface

## 图示

![]($-20221218-19292458.png)

## Inputs

In: Exec.

Target: Object Reference.

Options: Modify Context Options Structure (by ref). Options to consider when removing this input mapping context.

Rebuild Type: EInputMappingRebuildType Enum.  

## Outputs

Out: Exec.

