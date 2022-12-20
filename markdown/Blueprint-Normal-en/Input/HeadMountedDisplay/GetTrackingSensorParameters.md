# GetTrackingSensorParameters

If the HMD has a positional sensor, this will return the game-world location of it, as well as the parameters for the bounding region of tracking.. This allows an in-game representation of the legal positional tracking range. All values will be zeroed if the sensor is not available or the HMD does not support it.

Target is Head Mounted Display Function Library

## 图示

![]($-20221218-19235158.png)

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

