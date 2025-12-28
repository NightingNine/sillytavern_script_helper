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
>>>>>>> 8e20d44d7e490475212a598e881689fe70010e4c
declare module '*.html' {
  const content: string;
  export default content;
}
<<<<<<< HEAD
=======
declare module '*.md' {
  const content: string;
  export default content;
}
>>>>>>> 8e20d44d7e490475212a598e881689fe70010e4c
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
>>>>>>> 8e20d44d7e490475212a598e881689fe70010e4c

declare const YAML: typeof import('yaml');

declare const z: typeof import('zod');
declare namespace z {
  export type infer<T> = import('zod').infer<T>;
  export type input<T> = import('zod').input<T>;
  export type output<T> = import('zod').output<T>;
}
<<<<<<< HEAD
=======

declare module 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js' {
  export function registerMvuSchema(schema: z.ZodObject | (() => z.ZodObject)): void;
}
>>>>>>> 8e20d44d7e490475212a598e881689fe70010e4c
