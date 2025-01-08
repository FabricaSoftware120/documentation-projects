---
title: Input fecha
---

# Input fecha

El componente `DateInput` es un campo de entrada reutilizable para seleccionar y mostrar fechas. Incluye una etiqueta y permite configuraciones como el valor inicial, habilitación/deshabilitación, y manejo de eventos de cambio.

---

## Propiedades

| Prop         | Tipo                                               | Descripción                                                    | Requerido | Valor Predeterminado |
| ------------ | -------------------------------------------------- | -------------------------------------------------------------- | --------- | -------------------- |
| `labelName`  | `string`                                           | El texto que se mostrará como etiqueta para el campo de fecha. | Sí        | -                    |
| `value`      | `string`                                           | El valor inicial o controlado del campo de entrada.            | No        | `""`                 |
| `isDesabled` | `boolean`                                          | Si el campo de entrada está deshabilitado.                     | No        | `false`              |
| `onChange`   | `(e: React.ChangeEvent<HTMLInputElement>) => void` | Función para manejar cambios en el valor del input.            | No        | `undefined`          |

---

## **Uso**

### **Ejemplo básico**

```tsx
import DateInput from "./DateInput";

function App() {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Nueva fecha seleccionada:", event.target.value);
  };

  return (
    <DateInput
      labelName="Fecha de inicio"
      value="2025-01-01"
      onChange={handleDateChange}
    />
  );
}
```
