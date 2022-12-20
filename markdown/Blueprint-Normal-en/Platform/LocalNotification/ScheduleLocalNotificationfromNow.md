# ScheduleLocalNotificationfromNow

Schedule a local notification to fire inSecondsFromNow from now

Target is Blueprint Platform Library

## 图示

![]($-20221218-20294213.png)

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

