# BreakDMXOutputPortReference

Adds a node that breaks a 'DMXOutputPortReference' into its member fields

## 图示

![]($-20221218-14353065.png)

## Inputs

DMXOutput Port Reference: DMXOutput Port Reference Structure (by ref).  

## Outputs

Port Guid: Guid Structure. Port Guid:. Unique identifier shared with port config and port instance.. Note: This needs be BlueprintReadWrite to be accessible to property type customization, but is hidden by customization..

Enabled Flag: Boolean. Enabled Flag:. Optional flag for port references that can be enabled or disabled.

