# BreakLocationServicesData

Adds a node that breaks a 'LocationServicesData' into its member fields

## 图示

![]($-20221218-14393739.png)

## Inputs

Location Services Data: Location Services Data Structure (by ref).  

## Outputs

Timestamp: Float (single-precision). Timestamp:. Timestamp from when this location data was taken (UTC time in milliseconds since 1 January 1970).

Longitude: Float (single-precision). Longitude.

Latitude: Float (single-precision). Latitude.

Horizontal Accuracy: Float (single-precision). Horizontal Accuracy:. Estimated horizontal (Android: overall) accuracy of the result, in meters.

Vertical Accuracy: Float (single-precision). Vertical Accuracy:. Estimated accuracy of the result, in meters (iOS only).

Altitude: Float (single-precision). Altitude:. In meters, if provided with the result.

