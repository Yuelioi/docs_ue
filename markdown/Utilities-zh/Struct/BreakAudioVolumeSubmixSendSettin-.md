# BreakAudioVolumeSubmixSendSettin-

Adds a node that breaks a 'AudioVolumeSubmixSendSettings' into its member fields

## 图示

![]($-20221218-14313702.png)

## Inputs

Audio Volume Submix Send Settings: Audio Volume Submix Send Settings Structure (by ref).  

## Outputs

Listener Location State: EAudioVolumeLocationState Enum. Listener Location State:. The state the listener needs to be in, relative to the audio volume, for this submix send list to be used for a given sound.

Submix Sends: Array of Sound Submix Send Info Structures. Submix Sends:. Submix send array for sounds that are outside the audio volume when the listener is inside the volume.

