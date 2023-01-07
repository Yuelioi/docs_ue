# PushWidget

添加一个给定类别的 widget 到容器中。请注意，所有添加到容器中的 widget 都是集合的，所以调用者不应该试图缓存和重复使用创建的 widget。

同一类的多个实例有可能同时被添加到容器中，所以过去创建的任何实例都不能保证是这次返回的实例。

所以在实践中，你不应该相信任何先前的状态已经被保留在返回的小部件上，每次都要建立所有适当的属性。

目标是普通可激活的小部件容器基础

## 图示

![](/uploads/projects/ue-bluprint/20221218-17341681.png)

## Inputs

在。执行。

目标。普通可激活的 Widget 容器基础 对象参考。

可激活的小工具类。常见的可激活的 Widget 类参考。

## Outputs

输出。执行：执行。

返回值。普通可激活的 Widget 对象参考。将一个给定类的 widget 添加到容器中。注意，所有添加到容器中的 widget 都是集合的，所以调用者不应该试图缓存和重新使用创建的 widget。同一类的多个实例有可能同时被添加到容器中，所以过去创建的任何实例都不能保证是这次返回的实例。：所以在实践中，你不应该相信任何先前的状态已经被保留在返回的 widget 上，并且每次都要建立所有适当的属性。

<hr>

Adds a widget of the given class to the container.. Note that all widgets added to the container are pooled, so the caller should not try to cache and re-use the created widget.

It is possible for multiple instances of the same class to be added to the container at once, so any instance created in the past. is not guaranteed to be the one returned this time.

So in practice, you should not trust that any prior state has been retained on the returned widget, and establish all appropriate properties every time.

Target is Common Activatable Widget Container Base

## 图示

![](/uploads/projects/ue-bluprint/20221218-17341681.png)

## Inputs

In: Exec.

Target: Common Activatable Widget Container Base Object Reference.

Activatable Widget Class: Common Activatable Widget Class Reference.

## Outputs

Out: Exec.

Return Value: Common Activatable Widget Object Reference. Adds a widget of the given class to the container.. Note that all widgets added to the container are pooled, so the caller should not try to cache and re-use the created widget.: It is possible for multiple instances of the same class to be added to the container at once, so any instance created in the past. is not guaranteed to be the one returned this time.: So in practice, you should not trust that any prior state has been retained on the returned widget, and establish all appropriate properties every time..
