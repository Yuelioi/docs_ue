# MakeHairCardsGeometrySettings

Adds a node that create a 'HairCardsGeometrySettings' from its members

## 图示

![]($-20221218-14550151.png)

## Inputs

Generation Type: EHairCardsGenerationType Enum. Generation Type:. Define how cards should be generated. Cards count: define a targeted number of cards. Use guides: use simulation guide as cards..

Cards Count: Integer. Cards Count:. Define how many cards should be generated. The generated number can be lower, as some cards can be discarded by other options..

Cluster Type: EHairCardsClusterType Enum. Cluster Type:. Quality of clustering when group hair to belong to a similar cards. This does not change the number cards, but only how cards are shaped (size/shape).

Min Segment Length: Float (single-precision). Min Segment Length:. Minimum size of a card segment.  

## Outputs

Hair Cards Geometry Settings: Hair Cards Geometry Settings Structure.

