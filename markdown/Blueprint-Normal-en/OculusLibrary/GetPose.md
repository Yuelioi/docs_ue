# GetPose

Grabs the current orientation and position for the HMD. If positional tracking is not available, DevicePosition will be a zero vector

Target is Oculus Function Library

## 图示

![]($-20221218-20150879.png)

## Inputs

Use Orienation for Player Camera: Boolean. (in) Should be set to 'true' if the orientation is going to be used to update orientation of the camera manually..

Use Position for Player Camera: Boolean. (in) Should be set to 'true' if the position is going to be used to update position of the camera manually..

Position Scale: Vector. (in) The 3D scale that will be applied to position..  

## Outputs

Device Rotation: Rotator. (out) The device's current rotation.

Device Position: Vector. (out) The device's current position, in its own tracking space.

Neck Position: Vector. (out) The estimated neck position, calculated using NeckToEye vector from User Profile. Same coordinate space as DevicePosition..

