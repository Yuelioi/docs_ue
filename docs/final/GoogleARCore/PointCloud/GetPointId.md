# GetPointId

返回给定索引处的点的 Id。

每个点都有一个独特的标识符（在一个会话中），在不同的框架中是持久的。也就是说，如果点云 1 中的一个点与点云 2 中的一个点有相同的标识，那么它就代表了空间中的同一个点。

目标是谷歌 ARCore 点云

## 图示

![](/uploads/projects/ue-bluprint/20221218-19150137.png)

## Inputs

目标。谷歌 ARCore 点云对象参考。

索引：整数。

## Outputs

返回值。整数。返回给定索引的点的标识符：每个点都有一个唯一的标识符（在一个会话中），该标识符是跨帧的。也就是说，如果点云 1 中的一个点与点云 2 中的一个点有相同的 ID，那么它就代表空间中的同一个点。

<hr>

Returns the point Id of the point at the given index.

Each point has a unique identifier (within a session) that is persistent. across frames. That is, if a point from point cloud 1 has the same id as the. point from point cloud 2, then it represents the same point in space.

Target is Google ARCore Point Cloud

## 图示

![](/uploads/projects/ue-bluprint/20221218-19150137.png)

## Inputs

Target: Google ARCore Point Cloud Object Reference.

Index: Integer.

## Outputs

Return Value: Integer. Returns the point Id of the point at the given index.: Each point has a unique identifier (within a session) that is persistent. across frames. That is, if a point from point cloud 1 has the same id as the. point from point cloud 2, then it represents the same point in space..
