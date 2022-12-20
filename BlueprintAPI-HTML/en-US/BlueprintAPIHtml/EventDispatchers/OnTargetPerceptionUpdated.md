# OnTargetPerceptionUpdated

On Target Perception Updated:. Notifies all bound objects that perception info has been updated for a given target.. The notification is broadcasted for any received stimulus or on change of state. according to the stimulus configuration.

Note - This delegate will not be called if source actor is no longer valid. by the time a stimulus gets processed.. Use OnTargetPerceptionInfoUpdated providing a source id to handle those cases.

@param SourceActor Actor associated to the stimulus (can not be null). @param Stimulus Updated stimulus

