# OnTargetPerceptionUpdated

在目标感知更新时：。通知所有被绑定的对象，感知信息已经被更新到一个特定的目标。根据刺激物的配置，对任何收到的刺激物或状态改变时，都会广播通知。

注意 - 如果源演员不再有效，这个委托将不会被调用，当刺激被处理时。使用OnTargetPerceptionInfoUpdated提供一个源ID来处理这些情况。

@param SourceActor 与刺激物相关的演员（不能为空）。@param Stimulus 更新的刺激物
