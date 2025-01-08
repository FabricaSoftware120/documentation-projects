---
title: Tarjeta de notificación
---

# Tarjeta de notificación

El componente `NotificationCard` representa una tarjeta de notificación que muestra el nombre de un caso, la marca de tiempo y un indicador visual que informa si hay nuevas notificaciones. Cada tarjeta es un enlace clicable que redirige a un enlace proporcionado.

## Propiedades

| Propiedad        | Tipo       | Descripción                                                                                                                                                               |
| ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nameCase`       | `string`   | El nombre o título del caso que se mostrará en la tarjeta.                                                                                                                |
| `timeCase`       | `string`   | La marca de tiempo que indica cuándo ocurrió el caso.                                                                                                                     |
| `isNotification` | `boolean`  | **Opcional**: Indica si hay una notificación activa para este caso. Si es `true`, se muestra un indicador visual de notificación. <br /> **Valor predeterminado:** `false` |
| `linkCase`       | `string`   | El enlace al que se redirige cuando se hace clic en la tarjeta.                                                                                                           |
| `isExternalLink` | `boolean`  | **Opcional**: Determina si el enlace es externo. Si es `true`, se redirige a la URL proporcionada. <br /> **Valor predeterminado:** `false`                                |
| `onClick`        | `Function` | **Opcional**: Una función de callback que se ejecuta cuando se hace clic en la tarjeta.                                                                                   |

## Comportamiento

El componente muestra una tarjeta con la siguiente información:

- **Nombre del caso** (`nameCase`).
- **Marca de tiempo** (`timeCase`).
- Un **indicador visual de notificación** si `isNotification` es `true`.
- La tarjeta es un enlace clicable que redirige a la URL proporcionada en `linkCase`. Si `isExternalLink` es `true`, se abrirá un enlace externo.

Si se proporciona una función `onClick`, esta se ejecutará cuando el usuario haga clic en la tarjeta. Si no se proporciona, el componente redirige al enlace de `linkCase`.

## Ejemplo de uso

```tsx
<NotificationCard
  nameCase="Caso de prueba #123"
  timeCase="Hace 2 horas"
  isNotification={true}
  linkCase="https://miapp.com/caso/123"
/>
```
