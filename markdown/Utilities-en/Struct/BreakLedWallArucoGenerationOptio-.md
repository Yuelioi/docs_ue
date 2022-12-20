# BreakLedWallArucoGenerationOptio-

Adds a node that breaks a 'LedWallArucoGenerationOptions' into its member fields

## 图示

![]($-20221218-14385639.png)

## Inputs

Led Wall Aruco Generation Options: Led Wall Aruco Generation Options Structure (by ref).  

## Outputs

Texture Width: Integer. Texture Width:. Width of the texture that will contain the Aruco markers.

Texture Height: Integer. Texture Height:. Height of the texture that will contain the Aruco markers.

Aruco Dictionary: EArucoDictionary Enum. Aruco Dictionary:. Aruco dictionary to use when generating the markers.

Marker Id: Integer. Marker Id:. Starting marker Id. Arucos will be generated with consecutive Marker Ids, starting from this one.

Place Modulus: Integer. Place Modulus:. Used to avoid using up the symbols in the dictionary as quickly.. Will place the next marker id when [(row + column) mod PlaceModulus] is zero..

