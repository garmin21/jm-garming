---
title: docx-preview
date: 2022-4-23
tags:
  - npm
---

### docx-preview

预览 docx 文件


#### API

```js
renderAsync(
    document: Blob | ArrayBuffer | Uint8Array, // could be any type that supported by JSZip.loadAsync
    bodyContainer: HTMLElement, //element to render document content,
    styleContainer: HTMLElement, //element to render document styles, numbeings, fonts. If null, bodyContainer will be used.
    options: {
        className: string = "docx", //class name/prefix for default and document style classes
        inWrapper: boolean = true, //enables rendering of wrapper around document content
        ignoreWidth: boolean = false, //disables rendering width of page
        ignoreHeight: boolean = false, //disables rendering height of page
        ignoreFonts: boolean = false, //disables fonts rendering
        breakPages: boolean = true, //enables page breaking on page breaks
        ignoreLastRenderedPageBreak: boolean = true, //disables page breaking on lastRenderedPageBreak elements
        experimental: boolean = false, //enables experimental features (tab stops calculation)
        trimXmlDeclaration: boolean = true, //if true, xml declaration will be removed from xml documents before parsing
        useBase64URL: boolean = false, //if true, images, fonts, etc. will be converted to base 64 URL, otherwise URL.createObjectURL is used
        useMathMLPolyfill: boolean = false, //includes MathML polyfills for chrome, edge, etc.
        debug: boolean = false, //enables additional logging
    }
): Promise<any>
```

#### 用法

```vue
  <a-modal v-model:visible="visible" fullscreen :footer="false">
    <template #title> </template>
    <div ref="docxPreview"></div>
  </a-modal>
```

```ts
import { renderAsync } from 'docx-preview';
export function getReportPreview(order_id: string, action : 'preview' | 'down' = 'preview') {
    return axios.post<null, HttpResponse<null>>(`/report/preview`, {
        order_id,
        action
    }, {
        responseType: 'blob'
    })
}


  async function printPreview() {
    props.setLoading(true);
    const res = await getReportPreview(props.order_id);
    props.setLoading(false);
    visible.value = true;
    docxPreview.value && (await renderAsync(res, docxPreview.value));
  }

```
