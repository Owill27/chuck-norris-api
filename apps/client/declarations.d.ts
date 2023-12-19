declare module '*.scss';

// configure for css-modules
declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}