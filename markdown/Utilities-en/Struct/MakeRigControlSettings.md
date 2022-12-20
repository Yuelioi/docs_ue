# MakeRigControlSettings

Adds a node that create a 'RigControlSettings' from its members

## 图示

![]($-20221218-15001468.png)

## Inputs

Control Type: ERigControlType Enum. Control Type.

Display Name: Name. Display Name.

Primary Axis: ERigControlAxis Enum. Primary Axis:. the primary axis to use for float controls.

Animatable: Boolean. Animatable:. If the control is animatable in sequencer.

Limit Enabled: Array of Rig Control Limit Enabled Structures. Limit Enabled:. True if the control has limits..

Draw Limits: Boolean. Draw Limits:. True if the limits should be drawn in debug.. For this to be enabled you need to have at least one min and max limit turned on..

Minimum Value: Rig Control Value Structure. Minimum Value:. The minimum limit of the control's value.

Maximum Value: Rig Control Value Structure. Maximum Value:. The maximum limit of the control's value.

Shape Enabled: Boolean. Shape Enabled:. Set to true if the shape is enabled in 3d.

Shape Visible: Boolean. Shape Visible:. Set to true if the shape is currently visible in 3d.

Shape Name: Name. Shape Name:. This is optional UI setting - this doesn't mean this is always used, but it is optional for manipulation layer to use this.

Shape Color: Linear Color Structure. Shape Color.

Is Transient Control: Boolean. Is Transient Control:. If the control is transient and only visible in the control rig editor.  

## Outputs

Rig Control Settings: Rig Control Settings Structure.

