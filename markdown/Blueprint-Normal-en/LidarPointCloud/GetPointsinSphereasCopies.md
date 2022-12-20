# GetPointsinSphereasCopies

Populates the array with copies of points within the given sphere.. If ReturnWorldSpace is selected, the points' locations will be converted into absolute value, otherwise they will be relative to the center of the cloud.

Target is Lidar Point Cloud Component

## 图示

![]($-20221218-19431411.png)

## Inputs

In: Exec.

Target: Lidar Point Cloud Component Object Reference.

Center: Vector.

Radius: Float (single-precision).

Visible Only: Boolean.

Return World Space: Boolean.  

## Outputs

Out: Exec.

Return Value: Array of Lidar Point Cloud Point Structures. Populates the array with copies of points within the given sphere.. If ReturnWorldSpace is selected, the points' locations will be converted into absolute value, otherwise they will be relative to the center of the cloud..

