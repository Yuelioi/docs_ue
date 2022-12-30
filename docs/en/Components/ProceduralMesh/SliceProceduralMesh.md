# SliceProceduralMesh

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

