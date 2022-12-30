# GetOSCMessageAddressAtIndex

Sets Value to address at provided Index in OSCMessage if in bounds and OSC type matches 'String' (Does NOT return address of message, rather. string packed in message and casts to OSC address). Returns if string found at index and is valid OSC address path.

Target is OSCManager

## 图示

![]($-20221218-18054201.png)

## Inputs

In: Exec.

Message: OSCMessage Structure (by ref).

Index: Integer.  

## Outputs

Out: Exec.

Value: OSCAddress Structure.

Succeeded: Boolean. Sets Value to address at provided Index in OSCMessage if in bounds and OSC type matches 'String' (Does NOT return address of message, rather. string packed in message and casts to OSC address). Returns if string found at index and is valid OSC address path..

