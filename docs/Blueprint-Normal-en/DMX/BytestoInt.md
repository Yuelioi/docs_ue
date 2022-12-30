# BytestoInt

Return integer given an array of bytes. Up to the first 4 bytes in the array will be used for the conversion.

Target is DMXSubsystem

## 图示

![]($-20221218-18432296.png)

## Inputs

Target: DMXSubsystem Object Reference.

Bytes: Array of Bytes.

Use LSB: Boolean. Least Significant Byte mode makes the individual bytes (channels) of the function be interpreted with the first bytes being the lowest part of the number. Most Fixtures use MSB (Most Significant Byte)..  

## Outputs

Return Value: Integer.

