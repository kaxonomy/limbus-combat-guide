declare module 'bootstrap/dist/js/bootstrap.bundle.min.js' {
  export class Collapse {
    constructor(element: Element, options?: {
      toggle?: boolean;
    });
  }
  
  export class Modal {
    constructor(element: Element, options?: object);
  }
}
