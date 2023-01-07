# GetPixelMappingComponentModulato-

返回对应于指定补丁的组件的调制器。注意，这个节点会对所有正在使用的夹具补丁进行查找，因此可能会很慢，不应该在打勾时调用。

目标是 DMXPixel Mapping Renderer 组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18442786.png)

## Inputs

在。执行。

目标。DMXPixel Mapping Renderer 组件对象参考。

灯具补丁参考：DMX 灯具补丁参考结构。

## Outputs

出：执行。

DMXModulators。DMXModulator 对象参考数组。

返回值。布尔值。返回对应于指定补丁的组件的调制器。注意，这个节点对所有正在使用的夹具补丁进行查找，因此可能很慢，不应该在嘀嗒声中调用。

<hr>

Returns the Modulators of the component corresponding to the patch specified.. Note, this node does a lookup on all fixture patches in use, hence may be slow and shouldn't be called on tick.

Target is DMXPixel Mapping Renderer Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18442786.png)

## Inputs

In: Exec.

Target: DMXPixel Mapping Renderer Component Object Reference.

Fixture Patch Ref: DMX Fixture Patch Ref Structure.

## Outputs

Out: Exec.

DMXModulators: Array of DMXModulator Object References.

Return Value: Boolean. Returns the Modulators of the component corresponding to the patch specified.. Note, this node does a lookup on all fixture patches in use, hence may be slow and shouldn't be called on tick..
