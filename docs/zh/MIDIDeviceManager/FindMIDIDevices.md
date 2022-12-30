# FindMIDIDevices

枚举所有连接的MIDI设备并报告这些设备的ID和名称。这个操作有点贵，所以只在启动时做一次，或者在你认为可能有新设备被连接时做。

目标是MIDID设备管理器

## 图示

![]($-20221218-20054254.png)

## Inputs

In: Exec.  

## Outputs

出：执行。

Out MIDIDevices:找到的MIDIDevice结构的数组。一个可用的MIDI设备的列表。
