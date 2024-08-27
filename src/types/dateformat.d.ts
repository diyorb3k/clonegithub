declare module 'dateformat' {
    const dateFormat: any;
    export default dateFormat;
  }
  // src/types/dateformat.d.ts yoki types/dateformat.d.ts
declare module 'dateformat' {
    const dateFormat: (date: Date | string | number, mask?: string, utc?: boolean, gmt?: boolean) => string;
    export default dateFormat;
  }
  