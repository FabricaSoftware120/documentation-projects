---
id: file-uploader
title: Cargar archivo
---

# Cargar archivo

Este componente permite a los usuarios cargar múltiples archivos, mostrar una lista de los archivos seleccionados y eliminar archivos específicos.

### Propiedades

| Prop            | Tipo                | Descripción                                                                                                                     | Requerido | Valor Predeterminado |
| --------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------- |
| `onFilesSelect` | `Function`          | Función que recibe un array de archivos seleccionados. Esta función es llamada cuando el usuario selecciona o elimina archivos. | Sí        | N/A                  |
| `accept`        | `string` (opcional) | Tipo de archivos aceptados (por ejemplo, `"image/*"`, `".pdf"`, etc.).                                                          | No        | N/A                  |
| `maxFiles`      | `number` (opcional) | Número máximo de archivos permitidos. Si se establece, el usuario no podrá seleccionar más de este número de archivos.          | No        | N/A                  |

### Comportamiento

- El componente permite seleccionar múltiples archivos a la vez.
- Los archivos seleccionados se muestran en una lista, con la opción de eliminar cada archivo individualmente.
- Si se define un valor para `maxFiles`, el componente permitirá solo esa cantidad de archivos como máximo.
- Si ya hay archivos seleccionados, el texto del botón cambia a "Cargar más documentos". Si no hay archivos seleccionados, el texto será "Cargar documentos".

### Ejemplo de uso

```tsx
<FileUploader
  onFilesSelect={(files) => console.log("Archivos seleccionados:", files)}
  accept="image/*"
  maxFiles={5}
/>
```
