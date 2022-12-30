# BreakAudioOutputDeviceInfo

添加一个节点，将'AudioOutputDeviceInfo'分解成其成员字段

## 图示

![]($-20221218-14313169.png)

## Inputs

音频输出设备信息。音频输出设备信息结构（通过引用）。 

## Outputs

名称。字符串。名称：。音频设备的名称。

Device Id: 字符串。设备ID:. 设备的ID。

Num Channels: 整数。Num Channels:. 音频设备支持的通道数。

采样率。整数。采样率：。音频设备的采样率。

格式。EAudioMixerStreamDataFormatType枚举。格式:. 音频流的数据格式。

Output Channel Array: EAudioMixerChannelType枚举的数组。输出通道数组:. 音频设备的输出通道数组。

是系统默认的。布尔值。是系统默认值：。这个设备是否是系统默认的。

是当前设备。布尔值。是当前设备：。该设备是否是当前使用的设备。
