# BreakDisplayClus-_26

添加一个打破'DisplayClusterConfigurationViewport_PerViewportColorGrading'的节点到其成员字段中

## 图示

![]($-20221218-14341520.png)

## Inputs

Display Cluster Configuration Viewport Per Viewport Color Grading（显示集群配置视口每视口颜色分级）。Display Cluster Configuration Viewport Per Viewport Color Grading 结构（通过参考）。 

## Outputs

Enable Per- Viewport Color Grading: 布尔值。是启用的：。启用指定视口的调色设置，并将其添加到 nDisplay 的调色栈中。这不会影响到内部地壳。

包括整个群组的调色。Boolean（布尔）。Is Entire Cluster Enabled（启用整个群集）：. 可选择将上面指定的整个群组调色设置包含在这些视口的 nDisplay 调色栈中。

Color Grading（色彩分级）。Display Cluster Configuration Viewport Color Grading Rendering Settings Structure. 颜色分级设置：. Color Grading.

将颜色分级应用于视口。Array of Strings. 将后期处理应用于对象：. 指定要应用这些调色设置的视口。
