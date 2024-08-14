export type Pt2 = [number, number];

export type Pt3 = [number, number, number];

export type GuaranteedMap<K, V> = Omit<Map<K, V>, "get"> & {
  get(key: K): V;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MapValue<M extends Map<any, any>> =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  M extends Map<any, infer V> ? V : never;

export type Unsubscribe = () => void;
