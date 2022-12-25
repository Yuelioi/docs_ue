# UpdateResource

更新画布渲染目标纹理的资源。渲染目标将在这里创建或寻找一个画布对象来使用。它还会调用UpdateResourceImmediate()来从延迟渲染列表中清除渲染目标纹理，以阻止该纹理在下一帧被清除。从那里，它将要求渲染线程设置RHI视口。然后，画布被设置为渲染，然后用户的更新委托被调用。然后画布会被刷新，RHI会解析纹理，使其可用于渲染。

目标是Canvas Render Target 2D

## 图示

![]($-20221218-18145709.png)

## Inputs

在。执行。

目标。Canvas Render Target 2D Object Reference。 

## Outputs

输出。Exec.
