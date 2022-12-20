# WaitTargetDataUsingActor

Uses specified target actor and waits for it to return valid data or to be canceled.

Target is Ability Task Wait Target Data

## 图示

![]($-20221218-17335982.png)

## Inputs

In: Exec.

Task Instance Name: Name.

Confirmation Type: EGameplayTargetingConfirmation Enum.

Target Actor: Gameplay Ability Target Actor Object Reference.  

## Outputs

Out: Exec.

Async Task: Ability Task Wait Target Data Object Reference.

Valid Data: Exec. Valid Data.

Cancelled: Exec. Cancelled.

Data: Gameplay Ability Target Data Handle Structure (by ref).

