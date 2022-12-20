# PredictWorldTransformatTime

Initiate an asynchronous prediction for the specified component's world transform at a specific time in a sequence. Changes in attachment between the sequence's current time, and the predicted time are not accounted for. Calling this function on a stopped sequence player is undefined.

Target is Movie Scene Async Action Sequence Prediction

## 图示

![]($-20221218-18165248.png)

## Inputs

In: Exec.

Player: Movie Scene Sequence Player Object Reference. An active, currently playing sequence player to use for predicting the transform.

Target Component: Scene Component Object Reference. The component to predict a world transform for.

Time in Seconds: Float (single-precision). The time within the sequence to predict the transform at.  

## Outputs

Out: Exec.

Return Value: Movie Scene Async Action Sequence Prediction Object Reference. An asynchronous prediction object that contains Result and Failure delegates.

