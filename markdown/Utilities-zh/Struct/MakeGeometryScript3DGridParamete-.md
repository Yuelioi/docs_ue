# MakeGeometryScript3DGridParamete-

Adds a node that create a 'GeometryScript3DGridParameters' from its members

## 图示

![]($-20221218-14534932.png)

## Inputs

Size Method: EGeometryScriptGridSizingMethod Enum. Size Method:. SizeMethod determines how the parameters below will be interpreted to define the size of a 3D sampling/voxel grid.

Grid Cell Size: Float (single-precision). Grid Cell Size:. Use a specific grid cell size, and construct a grid with dimensions large enough to contain the target object.

Grid Resolution: Integer. Grid Resolution:. Use a specific grid resolution, with the grid cell size derived form the target object bounds such that this is the number of cells along the longest box dimension.  

## Outputs

Geometry Script 3DGrid Parameters: Geometry Script 3DGrid Parameters Structure.

