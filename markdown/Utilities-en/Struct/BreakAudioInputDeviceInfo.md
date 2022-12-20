# BreakAudioInputDeviceInfo

Adds a node that breaks a 'AudioInputDeviceInfo' into its member fields

## 图示

![]($-20221218-14312994.png)

## Inputs

Audio Input Device Info: Audio Input Device Info Structure (by ref).  

## Outputs

Device Name: String. Device Name:. The name of the audio device.

Device Id: String. Device Id:. ID of the device..

Input Channels: Integer. Input Channels:. The number of channels supported by the audio device.

Preferred Sample Rate: Integer. Preferred Sample Rate:. The preferred sample rate of the audio device.

Supports Hardware AEC: Boolean. Supports Hardware AEC:. Whether or not the device supports Acoustic Echo Canceling.

