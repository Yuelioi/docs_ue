# AddJsonStringValue

Helper function to add a string field to a JSON descriptor. This produces. a new descriptor which may then be chained to add further string fields.

Target is Pixel Streaming Input

## 图示

![]($-20221218-20292603.png)

## Inputs

Target: Pixel Streaming Input Object Reference.

Descriptor: String. The initial JSON descriptor which may be blank initially..

Field Name: String. The name of the field to add to the JSON..

String Value: String. The string value associated with the field name..  

## Outputs

New Descriptor: String. The JSON descriptor with the string field added..

Success: Boolean. True if the string field could be added successfully..

