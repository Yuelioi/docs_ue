# ResetSeatedPosition

Sets the zero pose for the seated tracker coordinate system to the current position and yaw of the HMD.. After this call, calls that pass TrackingUniverseSeated as the origin will be relative to this new zero pose.

NOTE: This function overrides the user's previously saved seated zero pose and should only be called as the result of a user action.. Users are also able to set their seated zero pose via the SteamVR Dashboard.

Target is Steam VRInput Device Function Library

## 图示

![]($-20221218-21044651.png)

## Inputs

In: Exec.  

## Outputs

Out: Exec.

Return Value: Boolean. Sets the zero pose for the seated tracker coordinate system to the current position and yaw of the HMD.. After this call, calls that pass TrackingUniverseSeated as the origin will be relative to this new zero pose.: NOTE: This function overrides the user's previously saved seated zero pose and should only be called as the result of a user action.. Users are also able to set their seated zero pose via the SteamVR Dashboard..

