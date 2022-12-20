# BreakProgressBarStyle

Adds a node that breaks a 'ProgressBarStyle' into its member fields

## 图示

![]($-20221218-14412756.png)

## Inputs

Progress Bar Style: Progress Bar Style Structure (by ref).  

## Outputs

Background Image: Slate Brush Structure. Background Image:. Background image to use for the progress bar.

Fill Image: Slate Brush Structure. Fill Image:. Foreground image to use for the progress bar.

Marquee Image: Slate Brush Structure. Marquee Image:. Image to use for marquee mode.

Enable Fill Animation: Boolean. Enable Fill Animation:. Enables a simple animation on the fill image to give the appearance that progress has not stalled. Disable this if you have a custom material which animates itself.. This requires a pattern in your material or texture to give the appearance of movement. A solid color will show no movement..

