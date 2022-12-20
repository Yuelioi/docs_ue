# StartRecording

Start a new recording using the specified parameters. Will fail if a recording is currently in progress

Target is Take Recorder Blueprint Library

## 图示

![]($-20221218-21105490.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. The base level sequence to use for the recording. Will be played back during the recording and duplicated to create the starting point for the resulting asset..

Sources: Take Recorder Sources Object Reference. The sources to use for the recording.

Meta Data: Take Meta Data Object Reference. Meta-data pertaining to this recording, duplicated into the resulting recorded sequence.

Parameters: Take Recorder Parameters Structure (by ref). Configurable parameters for this recorder instance.  

## Outputs

Out: Exec.

Return Value: Take Recorder Object Reference. The recorder responsible for the recording, or None if a a recording could not be started.

