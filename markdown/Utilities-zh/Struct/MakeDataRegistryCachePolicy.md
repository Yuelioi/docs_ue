# MakeDataRegistryCachePolicy

Adds a node that create a 'DataRegistryCachePolicy' from its members

## 图示

![]($-20221218-14500153.png)

## Inputs

Cache Is Always Volatile: Boolean. Cache Is Always Volatile:. If this is true, the cache is always considered volatile when returning EDataRegistryCacheResult.

Use Curve Table Cache Version: Boolean. Use Curve Table Cache Version:. If this is true, the cache version is synchronized with the global CurveTable cache version.

Min Number Kept: Integer. Min Number Kept:. Will not release items if fewer then this number loaded, 0 means infinite.

Max Number Kept: Integer. Max Number Kept:. Maximum number of items to keep loaded, 0 means infinite.

Force Keep Seconds: Float (single-precision). Force Keep Seconds:. Any item accessed within this amount of seconds is never unloaded.

Force Release Seconds: Float (single-precision). Force Release Seconds:. Any item not accessed within this amount of seconds is always unloaded.  

## Outputs

Data Registry Cache Policy: Data Registry Cache Policy Structure.

