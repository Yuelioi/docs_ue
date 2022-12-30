# FindMIDIDevices

Enumerates all of the connected MIDI devices and reports back with the IDs and names of those devices. This operation is a little expensive. so only do it once at startup, or if you think that a new device may have been connected.

Target is MIDIDevice Manager

## 图示

![]($-20221218-20054254.png)

## Inputs

In: Exec.  

## Outputs

Out: Exec.

Out MIDIDevices: Array of Found MIDIDevice Structures. A list of available MIDI devices.

