---
title: Cargar foto
---

# Cargar foto

El componente `PhotoUploader` permite al usuario subir y mostrar una imagen. Si el componente es editable, el usuario podrá cambiar la imagen mediante un panel emergente que ofrece opciones para cargar o eliminar la imagen.

### Propiedades

| Prop           | Tipo      | Descripción                                                                                                                | Requerido | Valor Predeterminado |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------- |
| `isEditable`   | `boolean` | Indica si el componente es editable. Si es `true`, el usuario podrá cambiar la imagen. El valor predeterminado es `false`. | No        | `false`              |
| `defaultImage` | `string`  | La imagen predeterminada que se mostrará en el componente. Puede ser una URL de imagen o una cadena base64.                | Sí        | N/A                  |

### Ejemplo de uso

```tsx
<PhotoUploader
  isEditable={true}
  defaultImage="https://example.com/default-image.jpg"
/>
```
