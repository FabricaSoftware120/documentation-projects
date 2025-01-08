---
title: Descripción de archivo
---

# Descripción de archivo

El componente `FileDescription` permite mostrar la información de un archivo junto con un botón para eliminarlo. Es útil para listas de archivos seleccionados o cargados.

---

## **Props**

| Prop       | Tipo         | Descripción                                       | Requerido | Valor Predeterminado |
| ---------- | ------------ | ------------------------------------------------- | --------- | -------------------- |
| `nameFile` | `string`     | Nombre del archivo que se mostrará.               | Sí        | -                    |
| `onClick`  | `() => void` | Función que se ejecuta al hacer clic en el botón. | Sí        | -                    |

---

## **Uso**

### **Ejemplo básico**

```tsx
import FileDescription from "./FileDescription";

function App() {
  return (
    <FileDescription
      nameFile="ejemplo.txt"
      onClick={() => alert("Archivo eliminado")}
    />
  );
}
```
