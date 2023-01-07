# ScheduleLocalNotificationatTime

在一个特定的时间安排一个本地通知，inLocalTime 指定当前的本地时间或是否应该使用 UTC 时间。

目标是蓝图平台库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20293858.png)

## Inputs

在。执行。

火灾日期时间。日期时间结构（按参考）。发射本地通知的时间。

本地时间：布尔值。如果为真，则提供的时间为本地时区，如果为假，则为 UTC。

标题。文本（按编号）。通知的标题。

主体：文本（按编号）。对通知的更详细描述。

行动。文本（通过参考）。要在滑块控制器上显示的文本。

激活事件。字符串。当应用程序从用户激活通知进入前台时，在委托回调中传递的一个字符串。

## Outputs

出：执行。

返回值。整数。

<hr>

Schedule a local notification at a specific time, inLocalTime specifies the current local time or if UTC time should be used

Target is Blueprint Platform Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20293858.png)

## Inputs

In: Exec.

Fire Date Time: Date Time Structure (by ref). The time at which to fire the local notification.

Local Time: Boolean. If true the provided time is in the local timezone, if false it is in UTC.

Title: Text (by ref). The title of the notification.

Body: Text (by ref). The more detailed description of the notification.

Action: Text (by ref). The text to be displayed on the slider controller.

Activation Event: String. A string that is passed in the delegate callback when the app is brought into the foreground from the user activating the notification.

## Outputs

Out: Exec.

Return Value: Integer.
