# BreakDMXOutputPortConfig

Adds a node that breaks a 'DMXOutputPortConfig' into its member fields

## 图示

![]($-20221218-14352890.png)

## Inputs

DMXOutput Port Config: DMXOutput Port Config Structure (by ref).  

## Outputs

Port Name: String. Port Name:. The name displayed wherever the port can be displayed.

Protocol Name: Name. Protocol Name:. DMX Protocol.

Communication Type: EDMXCommunicationType Enum. Communication Type:. The type of communication used with this port.

Network Interface Card IP Address: String. Device Address:. The IP address of the network interface card over which outbound DMX is sent.

Destination IP Address: Array of DMXOutput Port Destination Address Structures. Destination Addresses:. For Unicast, the IP addresses outbound DMX is sent to.

Input Into Engine: Boolean. Loopback to Engine:. If true, the signals output from this port are input into to the engine. Note, signals input into the engine this way will not be visible in Monitors when monitoring ## Inputs..

Local Universe Start: Integer. Local Universe Start:. Local Start Universe.

Amount Of Universes: Integer. Num Universes:. Number of Universes.

Extern Universe Start: Integer. Extern Universe Start:. The start address this being transposed to.. E.g. if LocalUniverseStart is 1 and this is 100, Local Universe 1 is sent/received as Universe 100..

Priority: Integer. Priority:. Priority on which packets are being sent.

Delay: Float (double-precision). Delay:. The amout by which sending of packets is delayed.

Delay Frame Rate: Frame Rate Structure. Delay Frame Rate:. Framerate of the delay.

Port Guid: Guid Structure. Port Guid:. Unique identifier, shared with the port instance.. Note: This needs be BlueprintReadWrite to be accessible to property type customization, but is hidden by customization..

