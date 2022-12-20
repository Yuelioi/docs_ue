# MakeStreamingSourceShape

Adds a node that create a 'StreamingSourceShape' from its members

## 图示

![]($-20221218-15023808.png)

## Inputs

Use Grid Loading Range: Boolean. Use Grid Loading Range:. If True, streaming source shape radius is bound to loading range radius..

Radius: Float (single-precision). Radius:. Custom streaming source shape radius (not used if bUseGridLoadingRange is True)..

Is Sector: Boolean. Is Sector:. Whether the source shape is a spherical sector instead of a regular sphere source..

Sector Angle: Float (single-precision). Sector Angle:. Shape's spherical sector angle in degree (not used if bIsSector is False)..

Location: Vector. Location:. Streaming source shape location (local to streaming source)..

Rotation: Rotator. Rotation:. Streaming source shape rotation (local to streaming source)..  

## Outputs

Streaming Source Shape: Streaming Source Shape Structure.

