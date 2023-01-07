# ForceLayoutPrepass

强制进行预传递。预传递会缓存该小组件所拥有的小组件层次结构的预期大小。在 Tick 发生之前，每个小组件已经发生了一次预处理。如果你在这个框架中添加子部件，并希望它们在这个框架中立即可见，你只需要执行另一次预处理。

目标是小工具

## 图示

![](/uploads/projects/ue-bluprint/20221218-21340796.png)

## Inputs

在。执行。

目标。小工具对象参考。

## Outputs

出：执行。

<hr>

Forces a pre-pass. A pre-pass caches the desired size of the widget hierarchy owned by this widget.. One pre-pass already happens for every widget before Tick occurs. You only need to perform another. pre-pass if you are adding child widgets this frame and want them to immediately be visible this frame.

Target is Widget

## 图示

![](/uploads/projects/ue-bluprint/20221218-21340796.png)

## Inputs

In: Exec.

Target: Widget Object Reference.

## Outputs

Out: Exec.
