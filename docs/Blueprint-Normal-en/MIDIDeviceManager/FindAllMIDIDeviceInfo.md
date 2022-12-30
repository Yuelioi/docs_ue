# FindAllMIDIDeviceInfo

Enumerates all of the MIDI input and output devices and reports back useful infos such as IDs and names of those devices. This operation is a little expensive. so only do it once at startup, or if you think that a new device may have been connected.

Target is MIDIDevice Manager

## 图示

![]($-20221218-20054138.png)

## Inputs

In: Exec.  

## Outputs

Out: Exec.

Out MIDIInput Devices: Array of MIDIDevice Info Structures. A list of available MIDI Input devices.

Out MIDIOutput Devices: Array of MIDIDevice Info Structures. A list of available MIDI Output devices.

