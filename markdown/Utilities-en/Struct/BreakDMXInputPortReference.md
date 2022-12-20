# BreakDMXInputPortReference

Adds a node that breaks a 'DMXInputPortReference' into its member fields

## 图示

![]($-20221218-14352630.png)

## Inputs

DMXInput Port Reference: DMXInput Port Reference Structure (by ref).  

## Outputs

Port Guid: Guid Structure. Port Guid:. Unique identifier shared with port config and port instance.. Note: This needs be BlueprintReadWrite to be accessible to property type customization, but is hidden by customization..

Enabled Flag: Boolean. Enabled Flag:. Optional flag for port references that can be enabled or disabled.

