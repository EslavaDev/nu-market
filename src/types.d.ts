interface ButtonModifier {
  width?: number;
  height?: number;
  normal?: boolean;
  error?: boolean;
  background?: string;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
