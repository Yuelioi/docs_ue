# BreakMIDIDeviceInfo

Adds a node that breaks a 'MIDIDeviceInfo' into its member fields

## 图示

![]($-20221218-14400392.png)

## Inputs

MIDIDevice Info: MIDIDevice Info Structure (by ref).  

## Outputs

Device ID: Integer. Device ID:. The unique ID of this MIDI device.

Device Name: String. Device Name:. The name of this device. This name comes from the MIDI hardware, any might not be unique.

Is Already In Use: Boolean. Is Already in Use:. Whether the device is already in use. You might not want to create a controller for devices that are busy. Someone else could be using it..

Is Default Device: Boolean. Is Default Device:. True if this is the default MIDI device for input on this system.

