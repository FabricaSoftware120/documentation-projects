---
id: notification-information
title: Información de notificación
---

# Información de notificación

El componente `NotificationSection` se utiliza para mostrar una sección de notificación con un título, tipo de caso y tiempo asociado. Es ideal para representar detalles de una notificación en una vista más estructurada.

## Propiedades

| Propiedad   | Tipo     | Descripción                                                                         |
| ----------- | -------- | ----------------------------------------------------------------------------------- |
| `titleCase` | `string` | El título de la notificación o el caso específico que representa.                   |
| `typeCase`  | `string` | El tipo de notificación o categoría, como "Mensaje", "Alerta", etc.                 |
| `timeCase`  | `string` | El tiempo o fecha asociado con la notificación, como "Hace 2 horas" o "12/11/2024". |

## Comportamiento

El componente muestra una sección de notificación que contiene:

- **Título del caso** (`titleCase`).
- **Tipo de notificación** (`typeCase`).
- **Tiempo o fecha de la notificación** (`timeCase`).

Este componente organiza la información de manera estructurada, lo que facilita la lectura y comprensión de la notificación.

## Ejemplo de uso

```tsx
<NotificationSection
  titleCase="Nuevo Mensaje"
  typeCase="Mensaje Directo"
  timeCase="Hace 2 horas"
/>
```
