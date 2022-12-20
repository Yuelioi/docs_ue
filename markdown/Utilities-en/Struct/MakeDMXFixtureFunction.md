# MakeDMXFixtureFunction

Adds a node that create a 'DMXFixtureFunction' from its members

## 图示

![]($-20221218-14512872.png)

## Inputs

Attribute Mapping: DMXAttribute Name Structure. Attribute:. The Attribute name to map this Function to.. This is used to easily find the Function in Blueprints, using an Attribute. list instead of typing the Function name directly.. The list of Attributes can be edited on. Project Settings->Plugins->DMX Protocol->Fixture Settings->Fixture Function Attributes.

Function Name: String. Function Name.

Description: String. Description.

Default Value: Integer64. Default Value:. The Default Value of the function, imported from GDTF. The plugin doesn't make use of this value, but it can be used in blueprints.

Channel Assignment: Integer. Channel:. This function's starting channel (use editor above to make changes).

Data Type: EDMXFixtureSignalFormat Enum. Data Type:. This function's data type. Defines the used number of channels (bytes).

Use LSB Mode: Boolean. Use LSBMode:. Least Significant Byte mode makes the individual bytes (channels) of the function be. interpreted with the first bytes being the lowest part of the number (endianness).: E.g., given a 16 bit function with two channel values set to [0, 1],. they would be interpreted as the binary number 0x01 0x00, which means 256.. The first byte (0) became the lowest part in binary form and the following byte (1), the highest.: Most Fixtures use MSB (Most Significant Byte) mode, which interprets bytes as highest first.. In MSB mode, the example above would be interpreted in binary as 0x00 0x01, which means 1.. The first byte (0) became the highest part in binary form and the following byte (1), the lowest..  

## Outputs

DMXFixture Function: DMXFixture Function Structure.

