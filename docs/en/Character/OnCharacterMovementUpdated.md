# OnCharacterMovementUpdated

On Character Movement Updated:. Event triggered at the end of a CharacterMovementComponent movement update.. This is the preferred event to use rather than the Tick event when performing custom updates to CharacterMovement properties based on the current state.. This is mainly due to the nature of network updates, where client corrections in position from the server can cause multiple iterations of a movement update,. which allows this event to update as well, while a Tick event would not.

@param DeltaSeconds Delta time in seconds for this update. @param InitialLocation Location at the start of the update. May be different than the current location if movement occurred.. @param InitialVelocity Velocity at the start of the update. May be different than the current velocity.

