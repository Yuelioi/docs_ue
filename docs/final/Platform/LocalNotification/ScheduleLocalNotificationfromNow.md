# ScheduleLocalNotificationfromNow

安排一个本地通知，从现在开始在 SecondsFromNow 发射。

目标是蓝图平台库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20294213.png)

## Inputs

在。执行。

在从现在开始的几秒钟内。整数。距离通知发出的时间的秒数。

标题。文本（按编号）。通知的标题。

主体：文本（按编号）。对通知的更详细描述。

行动。文本（通过参考）。要在滑块控制器上显示的文本。

激活事件。字符串。当应用程序从用户激活通知进入前台时，在委托回调中传递的一个字符串。

## Outputs

出：执行。

返回值。整数。

<hr>

Schedule a local notification to fire inSecondsFromNow from now

Target is Blueprint Platform Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20294213.png)

## Inputs

In: Exec.

In Seconds from Now: Integer. The seconds until the notification should fire.

Title: Text (by ref). The title of the notification.

Body: Text (by ref). The more detailed description of the notification.

Action: Text (by ref). The text to be displayed on the slider controller.

Activation Event: String. A string that is passed in the delegate callback when the app is brought into the foreground from the user activating the notification.

## Outputs

Out: Exec.

Return Value: Integer.
