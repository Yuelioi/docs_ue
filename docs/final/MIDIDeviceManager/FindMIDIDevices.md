# FindMIDIDevices

枚举所有连接的 MIDI 设备并报告这些设备的 ID 和名称。这个操作有点贵，所以只在启动时做一次，或者在你认为可能有新设备被连接时做。

目标是 MIDID 设备管理器

## 图示

![](/uploads/projects/ue-bluprint/20221218-20054254.png)

## Inputs

In: Exec.

## Outputs

出：执行。

Out MIDIDevices:找到的 MIDIDevice 结构的数组。一个可用的 MIDI 设备的列表。

<hr>

Enumerates all of the connected MIDI devices and reports back with the IDs and names of those devices. This operation is a little expensive. so only do it once at startup, or if you think that a new device may have been connected.

Target is MIDIDevice Manager

## 图示

![](/uploads/projects/ue-bluprint/20221218-20054254.png)

## Inputs

In: Exec.

## Outputs

Out: Exec.

Out MIDIDevices: Array of Found MIDIDevice Structures. A list of available MIDI devices.
