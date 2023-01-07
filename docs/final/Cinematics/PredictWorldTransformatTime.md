# PredictWorldTransformatTime

在一个序列中的特定时间为指定组件的世界变换启动一个异步预测。序列的当前时间和预测时间之间的附件变化不被考虑在内。在一个停止的序列播放器上调用这个函数是不确定的。

目标是电影场景的异步动作序列预测

## 图示

![](/uploads/projects/ue-bluprint/20221218-18165248.png)

## Inputs

在。执行。

播放器。电影场景序列播放器对象参考。一个活动的、当前播放的序列播放器，用于预测变换。

Target Component（目标组件）。Scene Component 对象参考。用于预测世界变换的组件。

Time in Seconds（时间）。Float（单精度）。在序列中预测变换的时间。

## Outputs

输出。执行。

返回值。电影场景非同步动作序列预测对象参考。一个异步预测对象，包含结果和失败委托。

<hr>

Initiate an asynchronous prediction for the specified component's world transform at a specific time in a sequence. Changes in attachment between the sequence's current time, and the predicted time are not accounted for. Calling this function on a stopped sequence player is undefined.

Target is Movie Scene Async Action Sequence Prediction

## 图示

![](/uploads/projects/ue-bluprint/20221218-18165248.png)

## Inputs

In: Exec.

Player: Movie Scene Sequence Player Object Reference. An active, currently playing sequence player to use for predicting the transform.

Target Component: Scene Component Object Reference. The component to predict a world transform for.

Time in Seconds: Float (single-precision). The time within the sequence to predict the transform at.

## Outputs

Out: Exec.

Return Value: Movie Scene Async Action Sequence Prediction Object Reference. An asynchronous prediction object that contains Result and Failure delegates.
