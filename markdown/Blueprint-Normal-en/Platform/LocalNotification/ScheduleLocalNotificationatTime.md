# ScheduleLocalNotificationatTime

Schedule a local notification at a specific time, inLocalTime specifies the current local time or if UTC time should be used

Target is Blueprint Platform Library

## 图示

![]($-20221218-20293858.png)

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

