# BreakAudioOutputDeviceInfo

Adds a node that breaks a 'AudioOutputDeviceInfo' into its member fields

## 图示

![]($-20221218-14313169.png)

## Inputs

Audio Output Device Info: Audio Output Device Info Structure (by ref).  

## Outputs

Name: String. Name:. The name of the audio device.

Device Id: String. Device Id:. ID of the device..

Num Channels: Integer. Num Channels:. The number of channels supported by the audio device.

Sample Rate: Integer. Sample Rate:. The sample rate of the audio device.

Format: EAudioMixerStreamDataFormatType Enum. Format:. The data format of the audio stream.

Output Channel Array: Array of EAudioMixerChannelType Enums. Output Channel Array:. The output channel array of the audio device.

Is System Default: Boolean. Is System Default:. Whether or not this device is the system default.

Is Current Device: Boolean. Is Current Device:. Whether or not this device is the device currently in use.

