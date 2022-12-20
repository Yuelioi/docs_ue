# BreakDMXFixtureCellAttribute

Adds a node that breaks a 'DMXFixtureCellAttribute' into its member fields

## 图示

![]($-20221218-14345383.png)

## Inputs

DMXFixture Cell Attribute: DMXFixture Cell Attribute Structure (by ref).  

## Outputs

Attribute Mapping: DMXAttribute Name Structure. Attribute:. The Attribute name to map this Function to.. This is used to easily find the Function in Blueprints, using an Attribute. list instead of typing the Function name directly.. The list of Attributes can be edited on. Project Settings->Plugins->DMX Protocol->Fixture Settings->Fixture Function Attributes.

Description: String. Description.

Default Value: Integer64. Default Value:. Initial value for this function when no value is set.

Data Type: EDMXFixtureSignalFormat Enum. Data Type:. This function's data type. Defines the used number of channels (bytes).

Use LSB Mode: Boolean. Use LSBMode:. The Endianess of the Attribute:. Least Significant Byte mode makes the individual bytes (channels) of the function be. interpreted with the first bytes being the lowest part of the number.: E.g., given a 16 bit function with two channel values set to [0, 1],. they would be interpreted as the binary number 00000001 00000000, which means 256.. The first byte (0) became the lowest part in binary form and the following byte (1), the highest.: Most Fixtures use MSB (Most Significant Byte) mode, which interprets bytes as highest first.. In MSB mode, the example above would be interpreted in binary as 00000000 00000001, which means 1.. The first byte (0) became the highest part in binary form and the following byte (1), the lowest..

