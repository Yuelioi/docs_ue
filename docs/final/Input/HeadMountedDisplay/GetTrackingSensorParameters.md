# GetTrackingSensorParameters

如果 HMD 有一个位置传感器，这将返回它在游戏世界中的位置，以及追踪的边界区域的参数。这允许在游戏中表示合法的位置跟踪范围。如果传感器不可用或者 HMD 不支持它，所有的值都将被清零。

目标是头戴式显示器功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19235158.png)

## Inputs

索引。整数。(in) 要查询的跟踪传感器的索引。

## Outputs

原产地。向量。(out) 传感器在世界空间中的原点。

旋转。旋转器。(out) 传感器在世界空间中的旋转。

左边的 FOV。Float（单精度）。(出)视场，从中心向左，单位是度，传感器的有效跟踪区。

右边的 FOV。Float（单精度）。(out) 视野，从中心向右，单位为度，传感器的有效跟踪区。

顶部 FOV。Float（单精度）。(出)视场，从中心开始的顶部，单位是度，传感器的有效跟踪区。

底部 FOV。Float（单精度）。(出)视场，从中心开始的底部，单位为度，传感器的有效跟踪区。

距离。浮点数（单精度）。(输出) 与传感器的名义距离，在世界空间中。

近平面。Float（单精度）。(out) 追踪体的近平面距离，在世界空间中。

远平面。Float（单精度）。(out) 追踪体的远平面距离，在世界空间中。

是活动的。布尔值。 (输出) 真，如果对指定传感器的查询成功。

<hr>

If the HMD has a positional sensor, this will return the game-world location of it, as well as the parameters for the bounding region of tracking.. This allows an in-game representation of the legal positional tracking range. All values will be zeroed if the sensor is not available or the HMD does not support it.

Target is Head Mounted Display Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19235158.png)

## Inputs

Index: Integer. (in) Index of the tracking sensor to query.

## Outputs

Origin: Vector. (out) Origin, in world-space, of the sensor.

Rotation: Rotator. (out) Rotation, in world-space, of the sensor.

Left FOV: Float (single-precision). (out) Field-of-view, left from center, in degrees, of the valid tracking zone of the sensor.

Right FOV: Float (single-precision). (out) Field-of-view, right from center, in degrees, of the valid tracking zone of the sensor.

Top FOV: Float (single-precision). (out) Field-of-view, top from center, in degrees, of the valid tracking zone of the sensor.

Bottom FOV: Float (single-precision). (out) Field-of-view, bottom from center, in degrees, of the valid tracking zone of the sensor.

Distance: Float (single-precision). (out) Nominal distance to sensor, in world-space.

Near Plane: Float (single-precision). (out) Near plane distance of the tracking volume, in world-space.

Far Plane: Float (single-precision). (out) Far plane distance of the tracking volume, in world-space.

Is Active: Boolean. (out) True, if the query for the specified sensor succeeded..
