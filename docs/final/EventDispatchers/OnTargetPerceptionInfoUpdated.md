# OnTargetPerceptionInfoUpdated

在目标感知信息更新时：。通知所有被绑定的对象，感知信息已被更新到一个特定的目标。根据刺激的配置，对任何收到的刺激或状态的改变，都会广播通知。

注意 - 即使源演员不再有效，这个委托也会被调用，当一个刺激被处理时，最好使用源 ID 来记账。

@param UpdateInfo 数据结构，提供与更新的感知数据有关的信息。

<hr>

On Target Perception Info Updated:. Notifies all bound objects that perception info has been updated for a given target.. The notification is broadcasted for any received stimulus or on change of state. according to the stimulus configuration.

Note - This delegate will be called even if source actor is no longer valid. by the time a stimulus gets processed so it is better to use source id for bookkeeping.

@param UpdateInfo Data structure providing information related to the updated perceptual data
