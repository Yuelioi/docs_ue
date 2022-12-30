# ApplyTextureSharePostprocess_Mes-

Send from Input[], wait and receive result to Output[] from the remote process

Target is Texture Share Blueprint API

## 图示

![]($-20221218-21115394.png)

## Inputs

In: Exec.

Target: Object Reference.

Share Name: String. Unique share name (case insensitive).

Postprocess: Texture Share BPPostprocess Structure (by ref). Textures to exchange.  

## Outputs

Out: Exec.

Return Value: Boolean. True if the success.

