# MakeWorldPartitionStreamingQuery-

Adds a node that create a 'WorldPartitionStreamingQuerySource' from its members

## 图示

![]($-20221218-15050033.png)

## Inputs

Location: Vector. Location:. Location to query. (not used if bSpatialQuery is false).

Radius: Float (single-precision). Radius:. Radius to query. (not used if bSpatialQuery is false).

Use Grid Loading Range: Boolean. Use Grid Loading Range:. If True, Instead of providing a query radius, query can be bound to loading range radius..

Data Layers: Array of Names. Data Layers:. Optional list of data layers to specialize the query. If empty only non data layer cells will be returned by the query..

Data Layers Only: Boolean. Data Layers Only:. If True, Only cells that are in a data layer found in DataLayers property will be returned by the query..

Spatial Query: Boolean. Spatial Query:. If False, Location/Radius will not be used to find the cells. Only AlwaysLoaded cells will be returned by the query..  

## Outputs

World Partition Streaming Query Source: World Partition Streaming Query Source Structure.

