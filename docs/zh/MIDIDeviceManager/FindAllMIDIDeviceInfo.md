# FindAllMIDIDeviceInfo

枚举所有的MIDI输入和输出设备，并报告有用的信息，如这些设备的ID和名称。这个操作有点贵，所以只在启动时做一次，或者当你认为可能有新设备被连接时才做。

目标是MIDID设备管理器

## 图示

![]($-20221218-20054138.png)

## Inputs

In: Exec.  

## Outputs

出：执行。

输出MIDIInput设备。MIDIDevice信息结构的数组。一个可用的MIDI输入设备的列表。

Out MIDIOutput Devices。MIDIDevice信息结构的数组。一个可用的MIDI输出设备的列表。
