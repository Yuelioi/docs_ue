# LineTraceMulti

Performs a raycast test against the point cloud.. Populates OutHits array with the results.. If ReturnWorldSpace is selected, the points' locations will be converted into absolute value, otherwise they will be relative to the center of the cloud.. Returns true it anything has been hit.

Target is Lidar Point Cloud Component

## 图示

![]($-20221218-19432924.png)

## Inputs

Target: Lidar Point Cloud Component Object Reference.

Origin: Vector.

Direction: Vector.

Radius: Float (single-precision).

Visible Only: Boolean.

Return World Space: Boolean.  

## Outputs

Out Hits: Array of Lidar Point Cloud Point Structures.

Return Value: Boolean. Performs a raycast test against the point cloud.. Populates OutHits array with the results.. If ReturnWorldSpace is selected, the points' locations will be converted into absolute value, otherwise they will be relative to the center of the cloud.. Returns true it anything has been hit..

