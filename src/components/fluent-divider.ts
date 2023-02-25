import {UserInterface , Controller} from 'thoriumjs';

interface TemplateInitOptions{
  prop?:Record<string,string|number|boolean>;
  childrens?:UserInterface.ElementUI<Controller>[];
  proto?:Record<string,any>;
}

/**
 * As the name implies, it divides one section of content from another with a line. A web component implementation of a horizontal rule.
 */
export class FluentDivider extends UserInterface.ElementUI<Controller>{
  constructor(options?:TemplateInitOptions){
      super({
          type : 'fluent-divider',
          prop : (options && options.prop ? options.prop : {}),
          childrens : (options && options.childrens ? options.childrens : []),
          proto : (options && options.proto ? options.proto : {})
      })
  }
}