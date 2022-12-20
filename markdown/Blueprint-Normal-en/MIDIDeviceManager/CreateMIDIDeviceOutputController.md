# CreateMIDIDeviceOutputController

Creates an instance of a MIDI output device controller that can be used to interact with a connected MIDI device

Target is MIDIDevice Manager

## 图示

![]($-20221218-20054020.png)

## Inputs

In: Exec.

Device ID: Integer. The ID of the MIDI device you want to talk to. Call "Find MIDI Devices" to enumerate the available devices..  

## Outputs

Out: Exec.

Return Value: MIDIDevice Output Controller Object Reference. If everything goes okay, a valid MIDI device controller object will be returned. If anything goes wrong, a null reference will be returned..

