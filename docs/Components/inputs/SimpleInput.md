---
title: Input simple
---

# Input simple

El componente `SimpleInputs` representa un campo de entrada de texto con una etiqueta, un valor y un mensaje de error opcional. Este componente permite al usuario ingresar información con la capacidad de validar correos electrónicos o números, y proporciona retroalimentación visual si el campo tiene errores de validación o está vacío.

## Propiedades

| Prop           | Tipo       | Descripción                                                               | Requerido | Valor Predeterminado  |
| -------------- | ---------- | ------------------------------------------------------------------------- | --------- | --------------------- |
| `labelName`    | `string`   | El texto que se mostrará como etiqueta del input.                         | Sí        | -                     |
| `errorMessage` | `string`   | Mensaje que se mostrará si el campo es obligatorio y no se ha completado. | No        | `"Diligenciar campo"` |
| `isError`      | `boolean`  | Indica si hay un error (el campo es obligatorio y no se ha llenado).      | No        | `false`               |
| `isEmail`      | `boolean`  | Indica si el input debe validar una dirección de correo electrónico.      | No        | `false`               |
| `isNumber`     | `boolean`  | Indica si el input debe aceptar solo números.                             | No        | `false`               |
| `isDesabled`   | `boolean`  | Indica si el input debe estar deshabilitado.                              | No        | `false`               |
| `value`        | `string`   | El valor actual del input.                                                | Sí        | -                     |
| `onChange`     | `function` | Función que se ejecuta cada vez que el valor del input cambia.            | Sí        | -                     |

## Funcionamiento

- El componente valida el valor ingresado según las propiedades `isEmail` y `isNumber`. Si ambas propiedades son `true`, se lanzará un error.
- Si el valor del input no es válido, se mostrará un mensaje de error debajo del campo.
- El componente utiliza un identificador único generado a partir de un número aleatorio para garantizar que no haya colisiones de ID.
- Si el campo está deshabilitado, no se puede interactuar con él, pero su etiqueta y el estado de error siguen siendo visibles.

## Ejemplo de uso

```tsx
import SimpleInputs from "./components/SimpleInputs";

function Form() {
  const [value, setValue] = useState("");

  return (
    <form>
      <SimpleInputs
        labelName="Correo electrónico"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isEmail={true}
        isError={!value}
      />
    </form>
  );
}
```
