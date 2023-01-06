# SliceProceduralMesh

使用平面对ProceduralMeshComponent进行切片（包括简单的凸面碰撞）。可以选择创建 "帽子 "几何体。

目标是Kismet程序网格库

## 图示

![]($-20221218-18255075.png)

## Inputs

在。执行。

在Proc Mesh中。程序网格组件对象参考。ProceduralMeshComponent to slice.

Plane Position（平面位置）。矢量。在世界空间中用于切片的平面上的点。

Plane Normal（平面法线）。向量。用于切分的平面的法线。平面正侧的几何体将被保留。

创建另一半。布尔值。如果为true，将使用切片几何体的另一半创建一个额外的程序网格组件（OutOtherHalfProcMesh）。

上限选项。EProcMeshSliceCapOption枚举。是否以及如何在切片平面上创建 "上限 "几何体。

帽状材料。材料界面对象参考。如果为盖子创建一个新的部分，将此材料分配给该部分。 

## Outputs

输出。Exec.

Out Other Half Proc Mesh。程序网格组件对象参考。如果设置了bCreateOtherHalf，这就是创建的新组件。它的所有者将与提供的InProcMesh相同。

Slice the ProceduralMeshComponent (including simple convex collision) using a plane. Optionally create 'cap' geometry.

Target is Kismet Procedural Mesh Library

## 图示

![]($-20221218-18255075.png)

## Inputs

In: Exec.

In Proc Mesh: Procedural Mesh Component Object Reference. ProceduralMeshComponent to slice.

Plane Position: Vector. Point on the plane to use for slicing, in world space.

Plane Normal: Vector. Normal of plane used for slicing. Geometry on the positive side of the plane will be kept..

Create Other Half: Boolean. If true, an additional ProceduralMeshComponent (OutOtherHalfProcMesh) will be created using the other half of the sliced geometry.

Cap Option: EProcMeshSliceCapOption Enum. If and how to create 'cap' geometry on the slicing plane.

Cap Material: Material Interface Object Reference. If creating a new section for the cap, assign this material to that section.  

## Outputs

Out: Exec.

Out Other Half Proc Mesh: Procedural Mesh Component Object Reference. If bCreateOtherHalf is set, this is the new component created. Its owner will be the same as the supplied InProcMesh..

