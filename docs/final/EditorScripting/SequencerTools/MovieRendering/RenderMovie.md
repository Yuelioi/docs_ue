# RenderMovie

试图根据指定的设置将一个序列渲染成电影。如果我们通过一个 PIE 实例或一个新的进程来渲染，这将会自动检测。如果状态无效（即：空或缺少必要的参数，捕获正在进行中，等等），将返回 false，否则返回 true。

目标是 Sequencer Tools 功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18535153.png)

## Inputs

在。执行。

在捕获设置中。电影场景捕捉对象参考。

在完成的回调。代表。

## Outputs

出：执行。

返回值。布尔值。试图根据指定的设置将一个序列渲染成电影。这将自动检测。如果我们通过一个 PIE 实例或一个新的进程，根据传入的设置进行渲染。如果状态无效（即：空或缺少必要的参数，捕获正在进行中，等等），将返回 false，否则返回 true。

<hr>

Attempts to render a sequence to movie based on the specified settings. This will automatically detect. if we're rendering via a PIE instance or a new process based on the passed in settings. Will return false. if the state is not valid (ie: null or missing required parameters, capture in progress, etc.), true otherwise.

Target is Sequencer Tools Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18535153.png)

## Inputs

In: Exec.

In Capture Settings: Movie Scene Capture Object Reference.

On Finished Callback: Delegate.

## Outputs

Out: Exec.

Return Value: Boolean. Attempts to render a sequence to movie based on the specified settings. This will automatically detect. if we're rendering via a PIE instance or a new process based on the passed in settings. Will return false. if the state is not valid (ie: null or missing required parameters, capture in progress, etc.), true otherwise..
