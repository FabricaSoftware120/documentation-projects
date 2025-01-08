---
title: Notificación
---

# Notificación

El componente `Notification` se encarga de mostrar una lista de notificaciones, con opciones para filtrarlas entre todas y las no leídas. También incluye un campo de búsqueda y un enlace para ver todas las notificaciones.

## Propiedades

| Propiedad         | Tipo                 | Descripción                                                                                                     |
|-------------------|----------------------|-----------------------------------------------------------------------------------------------------------------|
| `isNotification`  | `boolean`            | **Opcional**: Determina si se está viendo la página de notificaciones completas (`true`) o un resumen de ellas (`false`). <br /> **Valor predeterminado:** `false` |
| `notification`    | `Array<Object>`      | Lista de notificaciones que se pasarán al componente. Cada notificación debe tener las siguientes propiedades:    |
|                   |                      | - `nameCase` (`string`): Nombre o descripción del caso.                                                        |
|                   |                      | - `timeCase` (`string`): Tiempo transcurrido desde que la notificación fue creada.                             |
|                   |                      | - `isNotification` (`boolean`): Indica si la notificación está leída o no.                                      |
|                   |                      | - `linkCase` (`string`): Enlace al que se dirige cuando se hace clic en la notificación.                       |
|                   |                      | - `isExternalLink` (`boolean`): Indica si el enlace es externo o no.                                           |
| `link`            | `string`             | Un enlace para redirigir al usuario a una página donde se pueden ver todas las notificaciones.                  |

## Comportamiento

El componente tiene las siguientes características:

- **Filtrar notificaciones:** Puedes filtrar las notificaciones entre "todas" y "no leídas".
- **Buscar notificaciones:** Permite buscar notificaciones por nombre o tiempo.
- **Ver todas las notificaciones:** Incluye un enlace para ver todas las notificaciones en una página separada.
- **Visualización en página completa o resumen:** La visualización cambia dependiendo de si `isNotification` es `true` o `false`.

## Ejemplo de uso

```tsx
const notifications = [
  { nameCase: "Caso 1", timeCase: "Hace 2 horas", isNotification: true, linkCase: "/caso/1", isExternalLink: false },
  { nameCase: "Caso 2", timeCase: "Hace 5 horas", isNotification: false, linkCase: "/caso/2", isExternalLink: true }
];

<Notification
  isNotification={true}
  notification={notifications}
  link="/notificaciones"
/>