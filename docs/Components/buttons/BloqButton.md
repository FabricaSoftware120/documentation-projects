---
id: bloq-button
title: Botón de bloqueo
---

# Botón de bloqueo

El componente `BloqButton` representa un botón que permite realizar la acción de bloquear a un usuario en la aplicación. Es un componente reutilizable que puede adaptarse a diferentes escenarios, según la lógica proporcionada.

---

## Propiedades

A continuación, se describen las propiedades que acepta el componente:

| Prop         | Tipo           | Descripción                                                                 | Requerido | Default  |
| ------------ | -------------- | --------------------------------------------------------------------------- | --------- | -------- |
| `nameButton` | `string`       | Texto que se mostrará dentro del botón.                                    | ✅        | -        |
| `icon`       | `ReactElement` | Componente opcional que representa un ícono para acompañar el texto.       | ❌        | `null`   |
| `onClick`    | `() => void`   | Función que se ejecuta al presionar el botón.                              | ❌        | `null`   |
| `isActive`   | `boolean`      | Controla si el botón está activo (`true`) o inactivo (`false`).            | ❌        | `false`  |
| `isDisabled` | `boolean`      | Si es `true`, el botón estará deshabilitado y no se podrá interactuar con él. | ❌        | `false`  |

---

## **Uso**

A continuación, un ejemplo de cómo implementar el componente `BloqButton`:

### **Ejemplo básico**

```tsx
import BloqButton from "./BloqButton";
import { LockIcon } from "@mui/icons-material"; 

const App = () => {
  const handleBlockUser = () => {
    console.log("Usuario bloqueado");
  };

  return (
    <BloqButton
      nameButton="Bloquear Usuario"
      icon={<LockIcon />}
      onClick={handleBlockUser}
      isActive={true}
    />
  );
};

export default App;
```

