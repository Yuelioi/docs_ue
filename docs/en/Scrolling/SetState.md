# SetState

Set the offset and size of the track's thumb.. Note that the maximum offset is 1.0-ThumbSizeFraction.. If the user can view 1/3 of the items in a single page, the maximum offset will be ~0.667f

Target is Scroll Bar

## 图示

![]($-20221218-20475735.png)

## Inputs

In: Exec.

Target: Scroll Bar Object Reference.

In Offset Fraction: Float (single-precision). Offset of the thumbnail from the top as a fraction of the total available scroll space..

In Thumb Size Fraction: Float (single-precision). Size of thumbnail as a fraction of the total available scroll space..  

## Outputs

Out: Exec.

