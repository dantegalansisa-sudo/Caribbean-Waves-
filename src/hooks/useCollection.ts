// Firebase DESCONECTADO en esta copia (Caribbean Waves).
//
// useCollection siempre devuelve una lista vacía, por lo que cada sección
// muestra su contenido integrado (los datos "fallback" definidos dentro de
// cada componente). Así la web funciona de forma estática, sin conectarse
// a ninguna base de datos.
//
// Para volver a usar datos en vivo desde Firestore, restaura la versión
// original de este archivo y configura src/firebase/config.ts.

const EMPTY_DATA: never[] = [];

export function useCollection<T extends { id?: string; order?: number; active?: boolean }>(
  _collectionName: string,
  _activeOnly = true,
) {
  const add = async (_item: Omit<T, 'id'>) => {};
  const update = async (_id: string, _item: Partial<T>) => {};
  const remove = async (_id: string) => {};

  return { data: EMPTY_DATA as T[], loading: false, add, update, remove };
}
