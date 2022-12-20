# PlaySlotAnimationasDynamicMontag-_1

Play normal animation asset on the slot node by creating a dynamic UAnimMontage with blend in arguments. You can only play one asset (whether montage or animsequence) at a time per SlotGroup.

Target is Anim Instance

## 图示

![]($-20221218-17502544.png)

## Inputs

In: Exec.

Target: Anim Instance Object Reference.

Asset: Anim Sequence Base Object Reference.

Slot Node Name: Name.

Blend In: Alpha Blend Args Structure (by ref).

Blend Out: Alpha Blend Args Structure (by ref).

In Play Rate: Float (single-precision).

Loop Count: Integer.

Blend Out Trigger Time: Float (single-precision).

In Time to Start Montage At: Float (single-precision).  

## Outputs

Out: Exec.

Return Value: Anim Montage Object Reference. Play normal animation asset on the slot node by creating a dynamic UAnimMontage with blend in arguments. You can only play one asset (whether montage or animsequence) at a time per SlotGroup..

