# InsertPoints

Inserts group of points into the Octree structure, multi-threaded.. If bRefreshPointsBounds is set to false, make sure you call RefreshBounds() manually or cloud centering may not work correctly.

Target is Lidar Point Cloud

## 图示

![]($-20221218-19432401.png)

## Inputs

In: Exec.

Target: Lidar Point Cloud Object Reference.

Points: Array of Lidar Point Cloud Point Structures.

Duplicate Handling: ELidarPointCloudDuplicateHandling Enum.

Refresh Points Bounds: Boolean.

Translation: Vector (by ref).  

## Outputs

Out: Exec.

