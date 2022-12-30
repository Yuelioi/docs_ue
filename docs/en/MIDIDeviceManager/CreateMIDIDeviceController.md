# CreateMIDIDeviceController

Creates an instance of a MIDI device controller that can be used to interact with a connected MIDI device

Target is MIDIDevice Manager

## 图示

![]($-20221218-20053791.png)

## Inputs

In: Exec.

Device ID: Integer. The ID of the MIDI device you want to talk to. Call "Find MIDI Devices" to enumerate the available devices..

MIDIBuffer Size: Integer. How large the buffer size (in number of MIDI events) should be for incoming MIDI data. Larger values can incur higher latency costs for incoming events, but don't set it too low or you'll miss events and your stuff will sound bad..  

## Outputs

Out: Exec.

Return Value: MIDIDevice Controller Object Reference. If everything goes okay, a valid MIDI device controller object will be returned. If anything goes wrong, a null reference will be returned..

