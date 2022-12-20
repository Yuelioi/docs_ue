# CreateLidarPointCloudFromData

  * Returns new Point Cloud object created from the data provided.

  * Warning: If using Async, make sure the data does not get invalidated during processing!





Target is Lidar Point Cloud Blueprint Library

## 图示

![]($-20221218-19425895.png)

## Inputs

In: Exec.

Points: Array of Lidar Point Cloud Point Structures.

Use Async: Boolean.  

## Outputs

Success: Exec.

Failure: Exec.

Progress: Float (single-precision).

Point Cloud: Lidar Point Cloud Object Reference.

