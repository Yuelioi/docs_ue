# BreakQuartzTransportTimeStamp

Adds a node that breaks a 'QuartzTransportTimeStamp' into its member fields

## 图示

![]($-20221218-14413638.png)

## Inputs

Quartz Transport Time Stamp: Quartz Transport Time Stamp Structure (by ref).  

## Outputs

Bars: Integer. Bars:. The current bar this clock is on.

Beat: Integer. Beat:. The current beat this clock is on.

Beat Fraction: Float (single-precision). Beat Fraction:. A fractional representation of the time that's played since the last bear.

Seconds: Float (single-precision). Seconds:. The time in seconds that this TimeStamp occured at.

