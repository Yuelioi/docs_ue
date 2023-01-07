# RequestRebuildControlMappingsUsi-

标记所有利用映射上下文的增强型输入子系统，以便在该帧结束时重新应用所有控制映射。

目标是增强型输入库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19292346.png)

## Inputs

在。执行。

语境。输入映射语境对象参考。将为所有利用该上下文的子系统重建映射。

立即强制。布尔值。映射变化将被同步应用，而不是在帧的末尾，使它们在同一帧上对输入系统可用。

## Outputs

出：执行。

<hr>

Flag all enhanced input subsystems making use of the mapping context for reapplication of all control mappings at the end of this frame.

Target is Enhanced Input Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19292346.png)

## Inputs

In: Exec.

Context: Input Mapping Context Object Reference. Mappings will be rebuilt for all subsystems utilizing this context..

Force Immediately: Boolean. The mapping changes will be applied synchronously, rather than at the end of the frame, making them available to the input system on the same frame..

## Outputs

Out: Exec.
