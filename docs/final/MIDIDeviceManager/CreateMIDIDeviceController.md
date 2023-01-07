# CreateMIDIDeviceController

创建一个 MIDI 设备控制器的实例，可用于与连接的 MIDI 设备进行交互。

目标是 MIDID 设备管理器

## 图示

![](/uploads/projects/ue-bluprint/20221218-20053791.png)

## Inputs

在。执行。

设备 ID：整数。你想与之对话的 MIDI 设备的 ID。调用 "查找 MIDI 设备 "来列举可用的设备。

MIDIBuffer 大小。整数。对于传入的 MIDI 数据，缓冲区的大小（以 MIDI 事件的数量计）应该有多大。较大的值会使传入的事件产生较高的延迟成本，但不要设置得太低，否则会错过事件，你的东西会听起来很糟糕。

## Outputs

出：执行。

返回值。MIDIDevice 控制器对象参考。如果一切顺利，将返回一个有效的 MIDI 设备控制器对象。如果出了问题，将返回一个空引用。

<hr>

Creates an instance of a MIDI device controller that can be used to interact with a connected MIDI device

Target is MIDIDevice Manager

## 图示

![](/uploads/projects/ue-bluprint/20221218-20053791.png)

## Inputs

In: Exec.

Device ID: Integer. The ID of the MIDI device you want to talk to. Call "Find MIDI Devices" to enumerate the available devices..

MIDIBuffer Size: Integer. How large the buffer size (in number of MIDI events) should be for incoming MIDI data. Larger values can incur higher latency costs for incoming events, but don't set it too low or you'll miss events and your stuff will sound bad..

## Outputs

Out: Exec.

Return Value: MIDIDevice Controller Object Reference. If everything goes okay, a valid MIDI device controller object will be returned. If anything goes wrong, a null reference will be returned..
