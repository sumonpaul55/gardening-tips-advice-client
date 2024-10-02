/* eslint-disable @typescript-eslint/no-explicit-any */
// src/types/redux-persist.d.ts or src/redux-persist.d.ts
declare module "redux-persist/lib/storage" {
  const storage: any;
  export default storage;
}
