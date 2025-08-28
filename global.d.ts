declare module '*?raw' {
  const content: string;
  export default content;
}
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
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
>>>>>>> c8f3da9ae541a6b83883ab66845fed7d8ce79639

declare const YAML: typeof import('yaml');

declare const z: typeof import('zod');
declare namespace z {
  export type infer<T> = import('zod').infer<T>;
  export type input<T> = import('zod').input<T>;
  export type output<T> = import('zod').output<T>;
}
