# BreakDMXInputPortConfig

Adds a node that breaks a 'DMXInputPortConfig' into its member fields

## 图示

![]($-20221218-14352541.png)

## Inputs

DMXInput Port Config: DMXInput Port Config Structure (by ref).  

## Outputs

Port Name: String. Port Name:. The name displayed wherever the port can be displayed.

Protocol Name: Name. Protocol Name:. DMX Protocol.

Communication Type: EDMXCommunicationType Enum. Communication Type:. The type of communication used with this port.

Network Interface Card IP Address: String. Device Address:. The Network Interface Card's IP Adress, over which DMX is received.

Local Universe Start: Integer. Local Universe Start:. Local Start Universe.

Amount Of Universes: Integer. Num Universes:. Number of Universes.

Extern Universe Start: Integer. Extern Universe Start:. The start address this being transposed to.. E.g. if LocalUniverseStart is 1 and this is 100, Local Universe 1 is sent/received as Universe 100..

Priority Strategy: EDMXPortPriorityStrategy Enum. Priority Strategy:. How to deal with the priority value.

Priority: Integer. Priority:. Priority value, can act as a filter or a threshold.

Port Guid: Guid Structure. Port Guid:. Unique identifier, shared with the port instance.. Note: This needs be BlueprintReadWrite to be accessible to property type customization, but is hidden by customization..

