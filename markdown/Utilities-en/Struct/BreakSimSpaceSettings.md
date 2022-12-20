# BreakSimSpaceSettings

Adds a node that breaks a 'SimSpaceSettings' into its member fields

## 图示

![]($-20221218-14423694.png)

## Inputs

Sim Space Settings: Sim Space Settings Structure (by ref).  

## Outputs

Master Alpha: Float (single-precision). Master Alpha:. Global multipler on the effects of simulation space movement. Must be in range [0, 1]. If MasterAlpha = 0.0, the system is disabled and the simulation will. be fully local (i.e., world-space actor movement and rotation does not affect the simulation). When MasterAlpha = 1.0 the simulation effectively acts as a. world-space sim, but with the ability to apply limits using the other parameters..

Velocity Scale Z: Float (single-precision). Velocity Scale Z:. Multiplier on the Z-component of velocity and acceleration that is passed to the simulation. Usually from 0.0 to 1.0 to. reduce the effects of jumping and crouching on the simulation, but it can be higher than 1.0 if you need to exaggerate this motion for some reason..

Max Linear Velocity: Float (single-precision). Max Linear Velocity:. A clamp on the effective world-space velocity that is passed to the simulation. Units are cm/s. The default value effectively means "unlimited". It is not usually required to. change this but you would reduce this to limit the effects of drag on the bodies in the simulation (if you have bodies that have LinearDrag set to non-zero in the physics asset).. Expected values in this case would be somewhat less than the usual velocities of your object which is commonly a few hundred for a character..

Max Angular Velocity: Float (single-precision). Max Angular Velocity:. A clamp on the effective world-space angular velocity that is passed to the simulation. Units are radian/s, so a value of about 6.0 is one rotation per second.. The default value effectively means "unlimited". You would reduce this (and MaxAngularAcceleration) to limit how much bodies "fly out" when the actor spins on the spot.. This is especially useful if you have characters than can rotate very quickly and you would probably want values around or less than 10 in this case..

Max Linear Acceleration: Float (single-precision). Max Linear Acceleration:. A clamp on the effective world-space acceleration that is passed to the simulation. Units are cm/s/s. The default value effectively means "unlimited".. This property is used to stop the bodies of the simulation flying out when suddenly changing linear speed. It is useful when you have characters than can. changes from stationary to running very quickly such as in an FPS. A common value for a character might be in the few hundreds..

Max Angular Acceleration: Float (single-precision). Max Angular Acceleration:. A clamp on the effective world-space angular accleration that is passed to the simulation. Units are radian/s/s. The default value effectively means "unlimited".. This has a similar effect to MaxAngularVelocity, except that it is related to the flying out of bodies when the rotation speed suddenly changes. Typical limist for. a character might be around 100..

External Linear Drag V: Vector. External Linear Drag V:. Additional linear drag applied to every body in addition to linear drag specified on them in the physics asset.. When combined with ExternalLinearVelocity, this can be used to add a temporary wind-blown effect without having to tune linear drag on. all the bodies in the physics asset. The result is that each body has a force equal to -ExternalLinearDragV * ExternalLinearVelocity applied to it, in. additional to all other forces. The vector is in simulation local space..

External Linear Velocity: Vector. External Linear Velocity:. Additional velocity that is added to the component velocity so the simulation acts as if the actor is moving at speed, even when stationary.. Vector is in world space. Units are cm/s. Could be used for a wind effects etc. Typical values are similar to the velocity of the object or effect,. and usually around or less than 1000 for characters/wind..

External Angular Velocity: Vector. External Angular Velocity:. Additional angular velocity that is added to the component angular velocity. This can be used to make the simulation act as if the actor is rotating. even when it is not. E.g., to apply physics to a character on a podium as the camera rotates around it, to emulate the podium itself rotating.. Vector is in world space. Units are rad/s..

