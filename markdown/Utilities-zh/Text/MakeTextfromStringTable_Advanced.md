# MakeTextfromStringTable_Advanced

Attempts to create a text instance from a string table ID and key.. Note: This exists to allow programmatic ?look-up of a string table entry from dynamic content - you should favor setting your string table reference on a text property or pin wherever possible as it is significantly more robust (see "Make Literal Text").

Target is Kismet Text Library

## 图示

![]($-20221218-15241276.png)

## Inputs

Table Id: Name.

Key: String.  

## Outputs

Return Value: Text. The found text, or a dummy text if the entry could not be found..

