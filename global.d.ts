declare module '*?raw' {
  const content: string;
  export default content;
}
<<<<<<< HEAD
=======
declare module '*?url' {
  const content: string;
  export default content;
}
>>>>>>> ef0d36f0a911e43abf34c35574acbc1c056fd912
declare module '*.html' {
  const content: string;
  export default content;
}
declare module '*.css' {
  const content: unknown;
  export default content;
}
<<<<<<< HEAD
=======
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}
>>>>>>> ef0d36f0a911e43abf34c35574acbc1c056fd912

declare const YAML: typeof import('yaml');

declare const z: typeof import('zod');
declare namespace z {
  export type infer<T> = import('zod').infer<T>;
  export type input<T> = import('zod').input<T>;
  export type output<T> = import('zod').output<T>;
}
