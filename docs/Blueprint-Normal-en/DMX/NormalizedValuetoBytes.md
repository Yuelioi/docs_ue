# NormalizedValuetoBytes

Return the Bytes format of Value in the desired Signal Format.

Target is DMXSubsystem

## 图示

![]($-20221218-18443858.png)

## Inputs

Target: DMXSubsystem Object Reference.

In Value: Float (single-precision).

In Signal Format: EDMXFixtureSignalFormat Enum.

Use LSB: Boolean. Least Significant Byte mode makes the individual bytes (channels) of the function be interpreted with the first bytes being the lowest part of the number. Most Fixtures use MSB (Most Significant Byte)..  

## Outputs

Bytes: Array of Bytes.

