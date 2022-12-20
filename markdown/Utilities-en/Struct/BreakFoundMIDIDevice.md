# BreakFoundMIDIDevice

Adds a node that breaks a 'FoundMIDIDevice' into its member fields

## 图示

![]($-20221218-14361377.png)

## Inputs

Found MIDIDevice: Found MIDIDevice Structure (by ref).  

## Outputs

Device ID: Integer. Device ID:. The unique ID of this MIDI device.

Device Name: String. Device Name:. The name of this device. This name comes from the MIDI hardware, and might not be unique.

Can Receive From: Boolean. Can Receive From:. True if the device supports sending events to us.

Can Send To: Boolean. Can Send To:. True if the device supports receiving events from us.

Is Already In Use: Boolean. Is Already in Use:. Whether the device is already in use. You might not want to create a controller for devices that are busy. Someone else could be using it..

Is Default Input Device: Boolean. Is Default Input Device:. True if this is the default MIDI device for input on this system.

Is Default Output Device: Boolean. Is Default Output Device:. True if this is the default MIDI device for output on this system.

