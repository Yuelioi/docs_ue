# CaptureActiveSceneViewport

如果有的话，停止当前的捕获。然后从活动的 SceneViewport 中找到并捕获每一帧。只有当你在单机或 "新编辑窗口 PIE "中播放时，它才能找到一个 SceneViewport。 如果活动的 SceneViewport 被破坏，捕获将停止。SceneViewport 的大小和像素格式必须与媒体输出的要求相同。

目标是媒体捕获

## 图示

![](/uploads/projects/ue-bluprint/20221218-20023687.png)

## Inputs

在。执行。

目标。媒体捕获对象参考。

捕获选项。媒体捕获选项结构。

## Outputs

出：执行。

返回值。布尔值。如果捕获成功开始，则为真。

<hr>

Stop the current capture if there is one.. Then find and capture every frame from active SceneViewport.. It can only find a SceneViewport when you play in Standalone or in "New Editor Window PIE".. If the active SceneViewport is destroyed, the capture will stop.. The SceneViewport needs to be of the same size and have the same pixel format as requested by the media output.

Target is Media Capture

## 图示

![](/uploads/projects/ue-bluprint/20221218-20023687.png)

## Inputs

In: Exec.

Target: Media Capture Object Reference.

Capture Options: Media Capture Options Structure.

## Outputs

Out: Exec.

Return Value: Boolean. True if the capture was successfully started.
