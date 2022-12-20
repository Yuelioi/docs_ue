# MakeGroomCacheImportSettings

Adds a node that create a 'GroomCacheImportSettings' from its members

## 图示

![]($-20221218-14545467.png)

## Inputs

Import Groom Cache: Boolean. Import Groom Cache:. Import the animated groom that was detected in this file.

Frame Start: Integer. Frame Start:. Starting index to start sampling the animation from.

Frame End: Integer. Frame End:. Ending index to stop sampling the animation at.

Skip Empty Frames At Start Of Groom Animation: Boolean. Skip Empty Frames:. Skip empty (pre-roll) frames and start importing at the frame which actually contains data.

Import Groom Asset: Boolean. Import Groom Asset:. Import or re-import the groom asset from this file.

Groom Asset: Soft Object Path Structure. Groom Asset:. The groom asset the groom cache will be built from (must be compatible).  

## Outputs

Groom Cache Import Settings: Groom Cache Import Settings Structure.

