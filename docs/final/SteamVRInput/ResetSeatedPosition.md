# ResetSeatedPosition

将坐姿跟踪器坐标系的零姿态设置为 HMD 的当前位置和偏航。在这个调用之后，以 TrackingUniverseSeated 为原点的调用将相对于这个新的零点姿态。

注意：这个函数会覆盖用户之前保存的坐姿零度，并且只能作为用户动作的结果被调用。用户也可以通过 SteamVR 仪表板来设置他们的坐姿零度。

目标是 Steam VRInput 设备功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-21044651.png)

## Inputs

In: Exec.

## Outputs

出：执行。

返回值。布尔值。将坐姿跟踪器坐标系的零姿态设置为 HMD 的当前位置和偏航。在此调用后，将 TrackingUniverseSeated 作为原点的调用将相对于这个新的零点姿势。注意：这个函数覆盖了用户先前保存的坐姿零点，只应在用户操作的结果中调用。用户也可以通过 SteamVR 仪表板来设置他们的坐姿零点。

<hr>

Sets the zero pose for the seated tracker coordinate system to the current position and yaw of the HMD.. After this call, calls that pass TrackingUniverseSeated as the origin will be relative to this new zero pose.

NOTE: This function overrides the user's previously saved seated zero pose and should only be called as the result of a user action.. Users are also able to set their seated zero pose via the SteamVR Dashboard.

Target is Steam VRInput Device Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21044651.png)

## Inputs

In: Exec.

## Outputs

Out: Exec.

Return Value: Boolean. Sets the zero pose for the seated tracker coordinate system to the current position and yaw of the HMD.. After this call, calls that pass TrackingUniverseSeated as the origin will be relative to this new zero pose.: NOTE: This function overrides the user's previously saved seated zero pose and should only be called as the result of a user action.. Users are also able to set their seated zero pose via the SteamVR Dashboard..
