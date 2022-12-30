# BreakMIDIDeviceInfo

添加一个节点，将'MIDIDeviceInfo'分解成其成员字段

## 图示

![]($-20221218-14400392.png)

## Inputs

MIDIDevice Info:MIDIDevice Info结构（通过参考）。  

## Outputs

设备ID：整数。设备ID:。这个MIDI设备的唯一ID。

设备名称。字符串。设备名称：。这个设备的名称。这个名字来自于MIDI硬件，任何可能不是唯一的。

是否已在使用：布尔值。已经在使用中：。设备是否已经在使用中。你可能不想为正在使用的设备创建一个控制器。别人可能正在使用它。

是默认设备。布尔值。是默认设备：。如果这是本系统的默认输入MIDI设备，则为真。
