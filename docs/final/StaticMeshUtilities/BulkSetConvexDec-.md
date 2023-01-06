# BulkSetConvexDec-

计算一组静态网格的凸形碰撞。任何现有的碰撞将从静态网格中移除。这个方法复制了在网格编辑器中调用菜单项 "Collision > Auto Convex Collision "时的做法。

目标是静态网格编辑器子系统

## 图示

![]($-20221218-21032728.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

静态网格。静态网格对象引用数组。静态网格的集合，用于在其上添加凸形碰撞。

船体计数。整数。将被创建的最大数量的凸面片。必须是正数。

最大的船体顶点。整数。任何生成的凸面体允许的最大顶点数。

船体精度。整数。生成碰撞时要使用的体素数。必须是正数。

应用变化。布尔值。表示是否必须应用更改。

## Outputs

出：执行。

返回值。布尔值。一个布尔值，表示加法是否成功。

Compute convex collisions for a set of static meshes.. Any existing collisions will be removed from the static meshes.. This method replicates what is done when invoking menu entry "Collision > Auto Convex Collision" in the Mesh Editor.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-21032728.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Static Meshes: Array of Static Mesh Object References. Set of Static mesh to add convex collision on..

Hull Count: Integer. Maximum number of convex pieces that will be created. Must be positive..

Max Hull Verts: Integer. Maximum number of vertices allowed for any generated convex hull..

Hull Precision: Integer. Number of voxels to use when generating collision. Must be positive..

Apply Changes: Boolean. Indicates if changes must be apply or not..  

## Outputs

Out: Exec.

Return Value: Boolean. A boolean indicating if the addition was successful or not..

