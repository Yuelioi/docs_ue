# OnCharacterMovementUpdated

角色运动更新时：。在CharacterMovementComponent运动更新结束时触发的事件。当根据当前状态对CharacterMovement属性进行自定义更新时，这是首选事件，而不是Tick事件。这主要是由于网络更新的性质，客户端对服务器位置的修正可能会导致运动更新的多次迭代，这使得这个事件也可以更新，而Tick事件则不会。

@param DeltaSeconds 这次更新的Delta时间（秒）。@param InitialLocation 更新开始时的位置。如果发生了移动，可能与当前位置不同。@param InitialVelocity 更新开始时的速度。可能与当前速度不同。