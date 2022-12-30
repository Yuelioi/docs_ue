# CreateMIDIDeviceOutputController

创建一个MIDI输出设备控制器的实例，可用于与连接的MIDI设备进行交互。

目标是MIDID设备管理器

## 图示

![]($-20221218-20054020.png)

## Inputs

在。执行。

设备ID：整数。你想与之对话的MIDI设备的ID。调用 "查找MIDI设备 "来列举可用的设备。  

## Outputs

出：执行。

返回值。MIDIDevice输出控制器对象参考。如果一切顺利，将返回一个有效的MIDI设备控制器对象。如果出了问题，将返回一个空引用。
