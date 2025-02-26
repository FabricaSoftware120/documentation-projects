---
id: simple-button
title: Input simple
---

# Input simple

El componente `SimpleInputs` es un campo de entrada de texto flexible que admite validaciones opcionales y personalización de tipo de entrada. Permite validar correos electrónicos, restringir la entrada a solo números, admitir contraseñas y proporcionar retroalimentación visual en caso de error.

## Propiedades

| Prop           | Tipo       | Descripción                                                               | Requerido | Valor Predeterminado  |
| -------------- | ---------- | ------------------------------------------------------------------------- | --------- | --------------------- |
| `labelName`    | `string`   | Texto que se mostrará como etiqueta del input.                           | Sí        | -                     |
| `errorMessage` | `string`   | Mensaje de error cuando el campo es obligatorio y está vacío.            | No        | `"Diligenciar campo"` |
| `isError`      | `boolean`  | Indica si el campo tiene un error (por ejemplo, si es obligatorio y está vacío). | No        | `false`               |
| `isEmail`      | `boolean`  | Si es `true`, valida que el valor ingresado sea un correo electrónico.   | No        | `false`               |
| `isNumber`     | `boolean`  | Si es `true`, solo permite ingresar números en el input.                 | No        | `false`               |
| `isPass`       | `boolean`  | Si es `true`, el campo se muestra como tipo "password".                  | No        | `false`               |
| `isDesabled`   | `boolean`  | Si es `true`, el input estará deshabilitado.                             | No        | `false`               |
| `value`        | `string`   | Valor actual del input.                                                  | Sí        | -                     |
| `onChange`     | `function` | Función que se ejecuta cuando el valor del input cambia.                 | Sí        | -                     |

## Funcionamiento

- **Validación de entrada:**  
  - Si `isEmail` es `true`, el valor ingresado debe cumplir con el formato de correo electrónico válido.  
  - Si `isNumber` es `true`, solo se permitirán caracteres numéricos en el input.  
  - **⚠ Advertencia:** No se puede combinar `isEmail` con `isNumber`. Si ambos son `true`, se lanzará un error.  

- **Mensajes de error:**  
  - Si `isError` es `true` y el campo está vacío, se mostrará `errorMessage` como retroalimentación visual.  
  - Si el valor ingresado no cumple con el formato esperado (correo inválido o caracteres no numéricos), aparecerá un mensaje de validación.  

- **Interactividad:**  
  - Si `isPass` es `true`, el input se renderiza como un campo de contraseña.  
  - Si `isDesabled` es `true`, el input estará deshabilitado, pero su etiqueta y mensaje de error seguirán visibles.  

## Ejemplo de uso

```tsx
import SimpleInputs from "./components/SimpleInputs";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <SimpleInputs
        labelName="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isEmail={true}
        isError={!email}
        errorMessage="El correo es obligatorio"
      />

      <SimpleInputs
        labelName="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isPass={true}
        isError={!password}
        errorMessage="La contraseña es obligatoria"
      />
    </form>
  );
}