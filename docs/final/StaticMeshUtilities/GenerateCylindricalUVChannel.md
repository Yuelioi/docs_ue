# GenerateCylindricalUVChannel

在给定的静态网格的LOD上生成指定UV通道的圆柱形UV贴图。

目标是静态网格编辑器子系统

## 图示

![]($-20221218-21033344.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

静态网格。静态网格对象参考。用于生成UV贴图的静止网格。

LODIndex。整数。StaticMesh LOD的索引。

UVChannel索引。整数。保存UV贴图的通道。

位置。矢量（通过参考）。投影仪中心的位置。

方向。旋转器（通过参考）。应用于投影仪的旋转。

打桩。矢量二维结构（通过参考）。用来生成UV贴图的UV平铺。

## Outputs

出：执行。

返回值。布尔值。如果生成了UV贴图，则为true。

Generates cylindrical UV mapping in the specified UV channel on the given LOD of a StaticMesh.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-21033344.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Static Mesh: Static Mesh Object Reference. Static mesh on which to generate the UV mapping..

LODIndex: Integer. Index of the StaticMesh LOD..

UVChannel Index: Integer. Channel where to save the UV mapping..

Position: Vector (by ref). Position of the center of the projection gizmo..

Orientation: Rotator (by ref). Rotation to apply to the projection gizmo..

Tiling: Vector 2D Structure (by ref). The UV tiling to use to generate the UV mapping..  

## Outputs

Out: Exec.

Return Value: Boolean. true if the UV mapping was generated..

