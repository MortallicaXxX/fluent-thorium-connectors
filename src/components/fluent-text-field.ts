import {UserInterface , Controller} from 'thoriumjs';

interface TemplateInitOptions{
  prop?:Record<string,string|number|boolean>;
  childrens?:UserInterface.ElementUI<Controller>[];
  proto?:Record<string,any>;
}

export class FluentTextField extends UserInterface.ElementUI<Controller>{
  constructor(options?:TemplateInitOptions){
      super({
          type : 'fluent-text-field',
          prop : (options && options.prop ? options.prop : {}),
          childrens : (options && options.childrens ? options.childrens : []),
          proto : (options && options.proto ? options.proto : {})
      })
  }
}