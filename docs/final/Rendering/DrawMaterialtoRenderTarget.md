# DrawMaterialtoRenderTarget

渲染一个四边形，并将该材质应用到指定的渲染目标上。这将设置渲染目标，即使它已经被设置，这是一个昂贵的操作。如果向同一渲染目标渲染多个基元，请使用 BeginDrawCanvasToRenderTarget / EndDrawCanvasToRenderTarget。

目标是 Kismet Rendering Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20362342.png)

## Inputs

在。执行。

纹理渲染目标。纹理渲染目标 2D 对象参考。

材料。材料界面对象参考。

## Outputs

出：执行。

<hr>

Renders a quad with the material applied to the specified render target.. This sets the render target even if it is already set, which is an expensive operation.. Use BeginDrawCanvasToRenderTarget / EndDrawCanvasToRenderTarget instead if rendering multiple primitives to the same render target.

Target is Kismet Rendering Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20362342.png)

## Inputs

In: Exec.

Texture Render Target: Texture Render Target 2D Object Reference.

Material: Material Interface Object Reference.

## Outputs

Out: Exec.
