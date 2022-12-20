# BreakGuardianTestResult

Adds a node that breaks a 'GuardianTestResult' into its member fields

## 图示

![]($-20221218-14375301.png)

## Inputs

Guardian Test Result: Guardian Test Result Structure (by ref).  

## Outputs

Is Triggering: Boolean. Is Triggering:. Is there a triggering interaction between the device/point and specified boundary?.

Device Type: ETrackedDeviceType Enum. Device Type:. Device type triggering boundary (ETrackedDeviceType::None if BoundaryTestResult corresponds to a point rather than a device).

Closest Distance: Float (single-precision). Closest Distance:. Distance of device/point to surface of boundary specified by BoundaryType.

Closest Point: Vector. Closest Point:. Closest point on surface corresponding to specified boundary.

Closest Point Normal: Vector. Closest Point Normal:. Normal of closest point.

