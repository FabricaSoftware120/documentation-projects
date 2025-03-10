---
id: notification
title: Notificación
---

# Notificación

El componente `Notification` se encarga de mostrar una lista de notificaciones, con opciones para filtrarlas entre todas y las no leídas. También incluye un campo de búsqueda y un enlace para ver todas las notificaciones.

## Propiedades

| Propiedad         | Tipo                 | Descripción                                                                                                     |
|-------------------|----------------------|-----------------------------------------------------------------------------------------------------------------|
| `isNotification`  | `boolean`            | **Opcional**: Determina si se está viendo la página de notificaciones completas (`true`) o un resumen de ellas (`false`). <br /> **Valor predeterminado:** `false` |
| `notification`    | `Array<Object>`      | Lista de notificaciones que se pasarán al componente. Si no se proporciona, se usará un array vacío por defecto. Cada notificación debe tener las siguientes propiedades:    |
|                   |                      | - `nameCase` (`string`): Nombre o descripción del caso.                                                        |
|                   |                      | - `timeCase` (`string`): Tiempo transcurrido desde que la notificación fue creada.                             |
|                   |                      | - `isNotification` (`boolean`): Indica si la notificación está leída o no.                                      |
|                   |                      | - `linkCase` (`string`): Enlace al que se dirige cuando se hace clic en la notificación.                       |
|                   |                      | - `isExternalLink` (`boolean`): Indica si el enlace es externo o no.                                           |
| `link`            | `string` (opcional)  | Un enlace para redirigir al usuario a una página donde se pueden ver todas las notificaciones.                  |
| `infoNotification` | `function` (opcional) | Función que se ejecuta al hacer clic en el contenedor de notificaciones.                 |
| `onNavigate`      | `function` (opcional) | Función para manejar la navegación a otras páginas. |
| `showViewAll`     | `boolean` (opcional) | Indica si el botón "Ver todo" debe mostrarse o no. **Valor predeterminado:** `true` |
| `isLoginPage`     | `boolean` (opcional) | **Nuevo**: Indica si el componente se está utilizando en la página de inicio de sesión. <br /> - Si es `true`, se ocultan las notificaciones sin afectar el diseño. <br /> - Si es `false`, se muestran normalmente. **Valor predeterminado:** `false` |

## Comportamiento

El componente tiene las siguientes características:

- **Filtrar notificaciones:** Puedes filtrar las notificaciones entre "todas" y "no leídas".
- **Buscar notificaciones:** Permite buscar notificaciones por nombre o tiempo.
- **Ver todas las notificaciones:** Incluye un enlace para ver todas las notificaciones en una página separada.
- **Visualización en página completa o resumen:** La visualización cambia dependiendo de si `isNotification` es `true` o `false`.
- **Ocultar notificaciones en login:** Si `isLoginPage` es `true`, el componente no mostrará notificaciones pero mantendrá el diseño.
- **Manejo seguro de notificaciones:** Se asegura que `notification` siempre sea un array antes de procesarlo, evitando errores en la ejecución.

## Ejemplo de uso

```tsx
const notifications = [
  { nameCase: "Caso 1", timeCase: "Hace 2 horas", isNotification: true, linkCase: "/caso/1", isExternalLink: false },
  { nameCase: "Caso 2", timeCase: "Hace 5 horas", isNotification: false, linkCase: "/caso/2", isExternalLink: true }
];

// Uso normal
<Notification
  isNotification={true}
  notification={notifications}
  link="/notificaciones"
  onNavigate={(url) => console.log("Navegando a:", url)}
  infoNotification={() => console.log("Notificación clickeada")}
/>

// Uso en la página de inicio de sesión
<Notification
  isNotification={false}
  notification={[]}
  isLoginPage={true}
/>