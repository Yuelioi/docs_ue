# PrintText

Prints text to the log, and optionally, to the screen. If Print To Log is true, it will be visible in the Output Log window. Otherwise it will be logged only as 'Verbose', so it generally won't show up.

Target is Kismet System Library

## 图示

![]($-20221218-18424939.png)

## Inputs

In: Exec.

In Text: Text. The text to log out.

Print to Screen: Boolean. Whether or not to print the output to the screen.

Print to Log: Boolean. Whether or not to print the output to the log.

Text Color: Linear Color Structure. The color of the text to display.

Duration: Float (single-precision). The display duration (if Print to Screen is True). Using negative number will result in loading the duration time from the config..

Key: Name. If a non-empty key is provided, the message will replace any existing on-screen messages with the same key..  

## Outputs

Out: Exec.

