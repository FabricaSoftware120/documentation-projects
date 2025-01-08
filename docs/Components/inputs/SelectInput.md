---
title: Input selección
---

# Input selección

El componente `SelectInput` es un campo de selección (select) reutilizable y personalizable que permite al usuario elegir una opción de una lista desplegable. Incluye una flecha para indicar el estado del desplegable y maneja errores si no se selecciona ninguna opción cuando es requerido.

---

## Propiedades

| Prop         | Tipo                                    | Descripción                                                                       | Requerido | Valor Predeterminado |
| ------------ | --------------------------------------- | --------------------------------------------------------------------------------- | --------- | -------------------- |
| `label`      | `string`                                | El texto que se mostrará como etiqueta para el campo select.                      | Sí        | -                    |
| `option`     | `Array<{label: string, value: string}>` | Lista de opciones disponibles para el select.                                     | Sí        | -                    |
| `value`      | `string`                                | Valor actual seleccionado.                                                        | Sí        | -                    |
| `isDisabled` | `boolean`                               | Indica si el select está deshabilitado.                                           | No        | `false`              |
| `onChange`   | `(value: string) => void`               | Función que se ejecuta cuando se selecciona una opción.                           | Sí        | -                    |
| `isError`    | `boolean`                               | Indica si se debe mostrar un mensaje de error si no se selecciona ninguna opción. | No        | `false`              |

---

## **Uso**

### **Ejemplo básico**

```tsx
import SelectInput from "./SelectInput";

function App() {
  const options = [
    { label: "Opción 1", value: "1" },
    { label: "Opción 2", value: "2" },
    { label: "Opción 3", value: "3" },
  ];

  const handleChange = (value: string) => {
    console.log("Valor seleccionado:", value);
  };

  return (
    <SelectInput
      label="Selecciona una opción"
      option={options}
      value=""
      onChange={handleChange}
    />
  );
}
```
