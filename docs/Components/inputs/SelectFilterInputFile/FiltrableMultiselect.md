# FilterableMultiSelect

## Descripción

El componente `FilterableMultiSelect` proporciona un selector de opciones filtrables con múltiples selecciones. Permite a los usuarios buscar y seleccionar varias opciones de una lista desplegable. La selección se notifica a través de la función `onChange`.

## Props

| Prop        | Tipo                                 | Descripción                                           | Opcional | Valor por defecto |
|------------|--------------------------------------|------------------------------------------------------|----------|------------------|
| `options`  | `{ id: string; label: string; }[]`  | Lista de opciones disponibles para seleccionar.      | ❌       | `[]`              |
| `onChange` | `(selectedValues: string[]) => void` | Función que recibe el array de valores seleccionados. | ❌       | -                 |
| `isDisabled` | `boolean` | Indica si el selector debe estar deshabilitado. | ✅ | `false` |

## Ejemplo de uso

```tsx
import FilterableMultiSelect from "./components/FilterableMultiSelect";

function App() {
  const options = [
    { id: "1", label: "Opción 1" },
    { id: "2", label: "Opción 2" },
    { id: "3", label: "Opción 3" },
  ];

  const handleSelectionChange = (selectedValues: string[]) => {
    console.log("Opciones seleccionadas:", selectedValues);
  };

  return (
    <div>
      <h1>Ejemplo de FilterableMultiSelect</h1>
      <FilterableMultiSelect
        options={options}
        onChange={handleSelectionChange}
        isDisabled={false}
      />
    </div>
  );
}
```