# BreakGoogleARCoreCameraConfig

Adds a node that breaks a 'GoogleARCoreCameraConfig' into its member fields

## 图示

![]($-20221218-14374690.png)

## Inputs

Google ARCore Camera Config: Google ARCore Camera Config Structure (by ref).  

## Outputs

Camera Image Resolution: Int Point Structure. Camera Image Resolution:. CPU-accessible camera image resolution..

Camera Texture Resolution: Int Point Structure. Camera Texture Resolution:. Texture resolution for the camera image accessible to the. graphics API and shaders..

Camera ID: String. Camera ID:. The id of the camera will be used in this CameraConfig..

Target FPS: Bitmask Integer. Target FPS:. The target FPS of the camera..

Depth Sensor Usage: Bitmask Integer. Depth Sensor Usage:. The desired depth sensor usage of the camera..

