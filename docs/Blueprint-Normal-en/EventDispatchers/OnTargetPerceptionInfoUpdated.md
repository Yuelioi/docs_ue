# OnTargetPerceptionInfoUpdated

On Target Perception Info Updated:. Notifies all bound objects that perception info has been updated for a given target.. The notification is broadcasted for any received stimulus or on change of state. according to the stimulus configuration.

Note - This delegate will be called even if source actor is no longer valid. by the time a stimulus gets processed so it is better to use source id for bookkeeping.

@param UpdateInfo Data structure providing information related to the updated perceptual data

