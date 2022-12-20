# SwapAudioOutputDevice

Hotswaps to the requested audio output device

Target is Audio Mixer Blueprint Library

## 图示

![]($-20221218-18081037.png)

## Inputs

In: Exec.

New Device Id: String. the device Id to swap to.

On Completed Device Swap: Delegate (by ref). the event to fire when the audio endpoint devices have been retrieved.  

## Outputs

Out: Exec.

