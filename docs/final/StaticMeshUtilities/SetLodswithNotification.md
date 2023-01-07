# SetLodswithNotification

在一个静态网格上删除然后增加 LOD。静态网格必须至少有 LOD 0。静态网格的 LOD 0 在移除后会被保留。LOD 0 的建立设定会应用到所有后续的 LOD。

目标是静态网格编辑器子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21041231.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

静态网格。静态网格对象参考。网格的处理。

裁减选项。静态网格还原选项结构（按参考）。关于如何在网格上生成 LOD 的选项。

应用变化。布尔值。表示是否必须通知更改。

## Outputs

出：执行。

返回值。整数，在输入网格上产生的 LOD 数量。负值表示无法进行还原。解释见日志。如果 ReductionOptions.ReductionSettings 为空，则不会执行任何动作。

<hr>

Remove then add LODs on a static mesh.. The static mesh must have at least LOD 0.. The LOD 0 of the static mesh is kept after removal.. The build settings of LOD 0 will be applied to all subsequent LODs.

Target is Static Mesh Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21041231.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Static Mesh: Static Mesh Object Reference. Mesh to process..

Reduction Options: Static Mesh Reduction Options Structure (by ref). Options on how to generate LODs on the mesh..

Apply Changes: Boolean. Indicates if change must be notified..

## Outputs

Out: Exec.

Return Value: Integer. the number of LODs generated on the input mesh. An negative value indicates that the reduction could not be performed. See log for explanation. No action will be performed if ReductionOptions.ReductionSettings is empty.
