# CreateMIDIDeviceOutputController

创建一个 MIDI 输出设备控制器的实例，可用于与连接的 MIDI 设备进行交互。

目标是 MIDID 设备管理器

## 图示

![](/uploads/projects/ue-bluprint/20221218-20054020.png)

## Inputs

在。执行。

设备 ID：整数。你想与之对话的 MIDI 设备的 ID。调用 "查找 MIDI 设备 "来列举可用的设备。

## Outputs

出：执行。

返回值。MIDIDevice 输出控制器对象参考。如果一切顺利，将返回一个有效的 MIDI 设备控制器对象。如果出了问题，将返回一个空引用。

<hr>

Creates an instance of a MIDI output device controller that can be used to interact with a connected MIDI device

Target is MIDIDevice Manager

## 图示

![](/uploads/projects/ue-bluprint/20221218-20054020.png)

## Inputs

In: Exec.

Device ID: Integer. The ID of the MIDI device you want to talk to. Call "Find MIDI Devices" to enumerate the available devices..

## Outputs

Out: Exec.

Return Value: MIDIDevice Output Controller Object Reference. If everything goes okay, a valid MIDI device controller object will be returned. If anything goes wrong, a null reference will be returned..
