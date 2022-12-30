# MakeMediaCaptureOptions

添加一个节点，从其成员中创建一个 "MediaCaptureOptions"。

## 图示

![]($-20221218-14573096.png)

## Inputs

Crop: EMediaCaptureCroppingType Enum.Crop:.将捕获的SceneViewport或TextureRenderTarget2D裁剪成需要的大小。

自定义捕获点：Int点结构。自定义捕捉点：.将捕获的SceneViewport或TextureRenderTarget2D裁剪成所需的大小。注：只有在Crop被设置为Custom时才有效。

调整源缓冲区的大小。Boolean.调整源缓冲区的大小：。当捕获开始时，将源缓冲区的大小调整为所需的大小。@注意 只有当MediaOutput指定了一个尺寸时才有效。@注意 对于视口，窗口的大小不会改变。只有视口会被调整大小。@注 对于RenderTarget，资产将被修改并调整到所需的大小。

运行昂贵的任务时跳过框架。布尔值。运行昂贵的任务时跳过帧：。当应用程序进入响应模式时，跳过帧捕获。应用程序可以在鼠标下降、视口大小调整时进入响应模式，....这是为了确保在低FPS情况下的响应能力。

转换为所需的像素格式。Boolean.转换为期望的像素格式：。允许在渲染目标不是所需像素格式的情况下，启用/禁用像素格式转换。

转换时强制Alpha为1。Boolean.转换时强制Alpha为一：。在某些情况下，当我们要对包含有限通道数的不规则渲染目标进行流式处理时（例如RG16f），我们希望将Alpha强制为1。

## Outputs

媒体采集选项。媒体捕获选项结构。
