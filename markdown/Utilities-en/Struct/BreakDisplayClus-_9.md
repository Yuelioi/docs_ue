# BreakDisplayClus-_9

Adds a node that breaks a 'DisplayClusterConfigurationICVFX_ChromakeyMarkers' into its member fields

## 图示

![]($-20221218-14342229.png)

## Inputs

Display Cluster Configuration ICVFX Chromakey Markers: Display Cluster Configuration ICVFX Chromakey Markers Structure (by ref).  

## Outputs

Enable Chromakey Markers: Boolean. Enable:. True to display Chromakey Markers within the inner frustum..

Marker Color: Linear Color Structure. Marker Color:. Marker Color.

Marker Tile RGBA: Texture 2D Object Reference. Marker Tile RGBA:. Texture to use as the chromakey marker tile..

Marker Scale: Float (single-precision). Marker Size Scale:. Scale value for the size of each chromakey marker tile..

Marker Tile Distance: Float (single-precision). Marker Tile Distance:. Distance value between each chromakey marker tile..

Marker Tile Offset: Vector 2D Structure. Marker Tile Offset:. Offset value for the chromakey marker tiles, normalized to the tile distance. Adjust placement of the chromakey markers within the composition of the camera framing. Whole numbers will offset chromakey markers by a cyclical amount and have no visual change..

