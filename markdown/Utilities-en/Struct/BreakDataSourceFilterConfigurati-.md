# BreakDataSourceFilterConfigurati-

Adds a node that breaks a 'DataSourceFilterConfiguration' into its member fields

## 图示

![]($-20221218-14334595.png)

## Inputs

Data Source Filter Configuration: Data Source Filter Configuration Structure (by ref).  

## Outputs

Only Apply During Actor Spawn: Boolean. Only Apply During Actor Spawn:. Flag whether or not this filter should only applied once, whenever an actor is spawned.

Can Run Asynchronously: Boolean. Can Run Asynchronously:. Flag whether or not this filter does not rely on gamethread only data, and therefore can work on a differen thread.

Filter Applying Tick Interval: Byte. Filter Applying Tick Interval:. Interval, in frames, between applying the filter. The resulting value is cached for intermediate frames..

