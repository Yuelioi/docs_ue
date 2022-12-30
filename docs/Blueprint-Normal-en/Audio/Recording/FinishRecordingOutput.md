# FinishRecordingOutput

Stop recording audio. Path can be absolute, or relative (to the /Saved/BouncedWavFiles folder). By leaving the Submix To Record field blank, you can record the master output of the game.

Target is Audio Mixer Blueprint Library

## 图示

![]($-20221218-18073389.png)

## Inputs

In: Exec.

Export Type: EAudioRecordingExportType Enum.

Name: String.

Path: String.

Submix to Record: Sound Submix Object Reference.

Existing Sound Wave to Overwrite: Sound Wave Object Reference.  

## Outputs

Out: Exec.

Return Value: Sound Wave Object Reference. Stop recording audio. Path can be absolute, or relative (to the /Saved/BouncedWavFiles folder). By leaving the Submix To Record field blank, you can record the master output of the game..

