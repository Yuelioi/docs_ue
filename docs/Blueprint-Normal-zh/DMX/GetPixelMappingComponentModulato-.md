# GetPixelMappingComponentModulato-

返回对应于指定补丁的组件的调制器。注意，这个节点会对所有正在使用的夹具补丁进行查找，因此可能会很慢，不应该在打勾时调用。

目标是DMXPixel Mapping Renderer组件

## 图示

![]($-20221218-18442786.png)

## Inputs

在。执行。

目标。DMXPixel Mapping Renderer组件对象参考。

灯具补丁参考：DMX灯具补丁参考结构。  

## Outputs

出：执行。

DMXModulators。DMXModulator对象参考数组。

返回值。布尔值。返回对应于指定补丁的组件的调制器。注意，这个节点对所有正在使用的夹具补丁进行查找，因此可能很慢，不应该在嘀嗒声中调用。
