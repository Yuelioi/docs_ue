# BreakFoundMIDIDevice

添加一个节点，将'FoundMIDIDevice'分解成其成员字段。

## 图示

![]($-20221218-14361377.png)

## 输入

发现的MIDIDevice。Found MIDIDevice Structure (by ref).  

##输出

Device ID: 整数。设备ID:。这个MIDI设备的唯一ID。

设备名称。字符串。设备名称:. 此设备的名称。这个名称来自于MIDI硬件，可能不是唯一的。

Can Receive From: 布尔值。可以接收来自：。如果该设备支持向我们发送事件，则为真。

Can Send To: 布尔值。可以发送至：。如果该设备支持从我们这里接收事件，则为真。

Is Already In Use: 布尔值。已经在使用中：。设备是否已经在使用中。你可能不想为正在使用的设备创建一个控制器。别人可能正在使用它。

是默认输入设备。布尔值。是默认输入设备：。如果这是这个系统上默认的输入MIDI设备，则为真。

是默认的输出设备。布尔值。是默认输出设备：。如果这是本系统的默认输出MIDI设备，则为真。
