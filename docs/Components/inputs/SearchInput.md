---
id: search-input
title: Input busqueda
---

# Input busqueda

El componente `SearchInput` es un campo de entrada reutilizable diseñado para búsquedas. Incluye una etiqueta, un icono de búsqueda y permite ejecutar una función de búsqueda en tiempo real al escribir.

---

## Propiedades

| Prop         | Tipo                      | Descripción                                                                  | Requerido | Valor Predeterminado |
| ------------ | ------------------------- | ---------------------------------------------------------------------------- | --------- | -------------------- |
| `name`       | `string`                  | El texto que se mostrará como etiqueta para el campo de búsqueda.            | Sí        | -                    |
| `isDesabled` | `boolean`                 | Determina si el input está deshabilitado.                                    | No        | `false`              |
| `onSearch`   | `(value: string) => void` | Función que se ejecuta en cada cambio del input, recibiendo el valor actual. | No        | `undefined`          |

---

## **Uso**

### **Ejemplo básico**

```tsx
import SearchInput from "./SearchInput";

function App() {
  const handleSearch = (value: string) => {
    console.log("Texto de búsqueda:", value);
  };

  return <SearchInput name="Buscar" onSearch={handleSearch} />;
}
```
