# UpdateResource

更新画布渲染目标纹理的资源。渲染目标将在这里创建或寻找一个画布对象来使用。它还会调用 UpdateResourceImmediate()来从延迟渲染列表中清除渲染目标纹理，以阻止该纹理在下一帧被清除。从那里，它将要求渲染线程设置 RHI 视口。然后，画布被设置为渲染，然后用户的更新委托被调用。然后画布会被刷新，RHI 会解析纹理，使其可用于渲染。

目标是 Canvas Render Target 2D

## 图示

![](/uploads/projects/ue-bluprint/20221218-18145709.png)

## Inputs

在。执行。

目标。Canvas Render Target 2D Object Reference。

## Outputs

输出。Exec.

<hr>

Updates the the canvas render target texture's resource. This is where the render target will create or. find a canvas object to use. It also calls UpdateResourceImmediate() to clear the render target texture. from the deferred rendering list, to stop the texture from being cleared the next frame. From there it. will ask the rendering thread to set up the RHI viewport. The canvas is then set up for rendering and. then the user's update delegate is called. The canvas is then flushed and the RHI resolves the. texture to make it available for rendering.

Target is Canvas Render Target 2D

## 图示

![](/uploads/projects/ue-bluprint/20221218-18145709.png)

## Inputs

In: Exec.

Target: Canvas Render Target 2D Object Reference.

## Outputs

Out: Exec.
