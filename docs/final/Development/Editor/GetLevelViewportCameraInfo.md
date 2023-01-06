# GetLevelViewportCameraInfo

获取关于主关卡编辑器视口的相机位置的信息。在非编辑器的构建中，这些将被清零。在UnrealEd模块中，而不是在关卡编辑器中，因为它使用了FLevelEditorViewportClient，它在这个模块中。

目标是虚幻编辑器子系统

## 图示

![]($-20221218-18421720.png)

## Inputs

目标。虚幻编辑器子系统对象参考。  

## Outputs

相机位置。矢量。(out）关卡编辑视口摄像机的当前位置，如果没有找到，则为0。

相机的旋转。旋转器。(输出) 关卡编辑视口摄像机的当前旋转，如果没有找到，则为0。

返回值。布尔值。是否能够获得关卡编辑视口的相机。

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

