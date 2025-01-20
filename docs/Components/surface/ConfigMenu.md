---
id: config-menu
title: Menú de configuración
---

# Menú de configuración

Este componente renderiza un menú de configuración con múltiples opciones de botones. Cada opción del menú puede tener un ícono que se muestra a la izquierda o derecha del texto. Además, se permite que el usuario defina qué acción o ruta debe realizarse al hacer clic en cada botón. La función de navegación es proporcionada por la aplicación que usa este componente.

### Propiedades

| Prop         | Tipo       | Descripción                                                                                                                                                                     | Requerido | Valor Predeterminado |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------- |
| `options`    | `Array`    | Un arreglo de objetos que contienen las opciones del menú. Cada opción debe tener:                                                                                              | Sí        | -                    |
|              |            | - `label`: El texto que se mostrará en el botón.                                                                                                                                |           | -                    |
|              |            | - `onClick`: Una ruta o acción que el usuario debe proporcionar. Esta ruta o acción es pasada a la función `onNavigate` al hacer clic.                                          |           | -                    |
|              |            | - `icon` (opcional): Un ícono JSX que se mostrará al lado del texto del botón.                                                                                                  |           | `undefined`          |
|              |            | - `iconPosition` (opcional): Una cadena que puede ser "left" o "right", indicando la posición del ícono con respecto al texto.                                                  |           | `undefined`          |
| `onNavigate` | `Function` | Una función proporcionada por la aplicación que usará este componente. Esta función debe aceptar un parámetro (una ruta o acción) y será responsable de realizar la navegación. | Sí        | -                    |

### Ejemplo de uso

```tsx
<ConfigMenu
  options={[
    {
      label: "Configuración cuenta",
      onClick: "/settings",
      icon: <SettingsIcon />,
      iconPosition: "left",
    },
  ]}
  onNavigate={navigateFunction}
/>
```
