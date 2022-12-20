# PushWidget

Adds a widget of the given class to the container.. Note that all widgets added to the container are pooled, so the caller should not try to cache and re-use the created widget.

It is possible for multiple instances of the same class to be added to the container at once, so any instance created in the past. is not guaranteed to be the one returned this time.

So in practice, you should not trust that any prior state has been retained on the returned widget, and establish all appropriate properties every time.

Target is Common Activatable Widget Container Base

## 图示

![]($-20221218-17341681.png)

## Inputs

In: Exec.

Target: Common Activatable Widget Container Base Object Reference.

Activatable Widget Class: Common Activatable Widget Class Reference.  

## Outputs

Out: Exec.

Return Value: Common Activatable Widget Object Reference. Adds a widget of the given class to the container.. Note that all widgets added to the container are pooled, so the caller should not try to cache and re-use the created widget.: It is possible for multiple instances of the same class to be added to the container at once, so any instance created in the past. is not guaranteed to be the one returned this time.: So in practice, you should not trust that any prior state has been retained on the returned widget, and establish all appropriate properties every time..

