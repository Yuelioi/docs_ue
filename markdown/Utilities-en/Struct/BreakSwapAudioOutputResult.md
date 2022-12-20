# BreakSwapAudioOutputResult

Adds a node that breaks a 'SwapAudioOutputResult' into its member fields

## 图示

![]($-20221218-14441194.png)

## Inputs

Swap Audio Output Result: Swap Audio Output Result Structure (by ref).  

## Outputs

Current Device Id: String. Current Device Id:. ID of the currently set device. This is the device at the time of the call, NOT the resulting deviceId.

Requested Device Id: String. Requested Device Id:. ID of the requested device..

Result: ESwapAudioOutputDeviceResultState Enum. Result:. Result of the call.

