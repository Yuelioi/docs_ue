# MakeTakeRecorderProjectParameter-

Adds a node that create a 'TakeRecorderProjectParameters' from its members

## 图示

![]($-20221218-15030431.png)

## Inputs

Root Take Save Dir: Directory Path Structure. Root Take Save Dir:. The root of the directory in which to save recorded takes..

Take Save Dir: String. Take Save Dir:. The name of the directory in which to save recorded takes. Supports any of the following format specifiers that will be substituted when a take is recorded:. {day} - The day of the timestamp for the start of the recording.. {month} - The month of the timestamp for the start of the recording.. {year} - The year of the timestamp for the start of the recording.. {hour} - The hour of the timestamp for the start of the recording.. {minute} - The minute of the timestamp for the start of the recording.. {second} - The second of the timestamp for the start of the recording.. {take} - The take number.. {slate} - The slate string..

Default Slate: String. Default Slate:. The default name to use for the Slate information.

Recording Clock Source: EUpdateClockSource Enum. Recording Clock Source:. The clock source to use when recording.

Start At Current Timecode: Boolean. Start at Current Timecode:. If enabled, track sections will start at the current timecode. Otherwise, 0..

Record Timecode: Boolean. Record Timecode:. If enabled, timecode will be recorded into each actor track.

Record Sources Into Sub Sequences: Boolean. Record Sources Into Sub Sequences:. If enabled, each Source will be recorded into a separate Sequence and embedded in the Master Sequence will link to them via Subscenes track.. If disabled, all Sources will be recorded into the Master Sequence, and you will not be able to swap between various takes of specific source. using the Sequencer Take ui. This can still be done via copying and pasting between sequences if needed..

Record To Possessable: Boolean. Record to Possessable:: If enabled, all recorded actors will be recorded to possessable object bindings in Sequencer. If disabled, all recorded actors will be: recorded to spawnable object bindings in Sequencer. This can be overridden per actor source..

Show Notifications: Boolean. Show Notifications:. Whether to show notification windows or not when recording.  

## Outputs

Take Recorder Project Parameters: Take Recorder Project Parameters Structure.

