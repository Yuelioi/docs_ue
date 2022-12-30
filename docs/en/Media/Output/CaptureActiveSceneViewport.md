# CaptureActiveSceneViewport

Stop the current capture if there is one.. Then find and capture every frame from active SceneViewport.. It can only find a SceneViewport when you play in Standalone or in "New Editor Window PIE".. If the active SceneViewport is destroyed, the capture will stop.. The SceneViewport needs to be of the same size and have the same pixel format as requested by the media output.

Target is Media Capture

## 图示

![]($-20221218-20023687.png)

## Inputs

In: Exec.

Target: Media Capture Object Reference.

Capture Options: Media Capture Options Structure.  

## Outputs

Out: Exec.

Return Value: Boolean. True if the capture was successfully started.

