# GetLevelViewportCameraInfo

Gets information about the camera position for the primary level editor viewport. In non-editor builds, these will be zeroed. In the UnrealEd module instead of Level Editor as it uses FLevelEditorViewportClient which is in this module

Target is Unreal Editor Subsystem

## 图示

![]($-20221218-18421720.png)

## Inputs

Target: Unreal Editor Subsystem Object Reference.  

## Outputs

Camera Location: Vector. (out) Current location of the level editing viewport camera, or zero if none found.

Camera Rotation: Rotator. (out) Current rotation of the level editing viewport camera, or zero if none found.

Return Value: Boolean. Whether or not we were able to get a camera for a level editing viewport.

