# Interpolation

On this page 

  * Actions





## Actions

Is Interpolation Complete. Returns whether interpolation is complete because the target has been reached. True when interpolation is disabled.: Target is Projectile Movement Component.

Move Interpolation Target. Moves the UpdatedComponent, which is also the interpolation target for the interpolated component. If there is not interpolated component, this simply moves UpdatedComponent.. Use this typically from PostNetReceiveLocationAndRotation() or similar from an Actor.: Target is Projectile Movement Component.

Reset Interpolation. Resets interpolation so that interpolated component snaps back to the initial location/rotation without any additional offsets.: Target is Projectile Movement Component.

Set Interpolated Component. Assigns the component that will be used for network interpolation/smoothing. It is expected that this is a component attached somewhere below the UpdatedComponent.. When network updates use MoveInterpolationTarget() to move the UpdatedComponent, the interpolated component's relative offset will be maintained and smoothed over. the course of future component ticks. The current relative location and rotation of the component is saved as the target offset for future interpolation.. See: MoveInterpolationTarget(), bInterpMovement, bInterpRotation: Target is Projectile Movement Component.

