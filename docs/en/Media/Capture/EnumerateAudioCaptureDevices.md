# EnumerateAudioCaptureDevices

Enumerate available audio capture devices.

To filter for a specific subset of devices, use the MakeBitmask node. with EMediaAudioCaptureDeviceFilter as the Bitmask Enum.

Target is Media Blueprint Function Library

## 图示

![]($-20221218-20000533.png)

## Inputs

In: Exec.

Filter: Integer. The types of capture devices to return (-1 = all)..  

## Outputs

Out: Exec.

Out Devices: Array of Media Capture Device Structures. Will contain the available capture devices..

