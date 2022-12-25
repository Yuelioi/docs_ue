# CaptureActiveSceneViewport

如果有的话，停止当前的捕获。然后从活动的SceneViewport中找到并捕获每一帧。只有当你在单机或 "新编辑窗口PIE "中播放时，它才能找到一个SceneViewport。 如果活动的SceneViewport被破坏，捕获将停止。SceneViewport的大小和像素格式必须与媒体输出的要求相同。

目标是媒体捕获

## 图示

![]($-20221218-20023687.png)

## Inputs

在。执行。

目标。媒体捕获对象参考。

捕获选项。媒体捕获选项结构。  

## Outputs

出：执行。

返回值。布尔值。如果捕获成功开始，则为真。
