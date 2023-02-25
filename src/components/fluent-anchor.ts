import {UserInterface , Controller} from 'thoriumjs';

interface TemplateInitOptions{
  prop?:Record<string,string|number|boolean>;
  childrens?:UserInterface.ElementUI<Controller>[];
  proto?:Record<string,any>;
}

/**
 * ### fluent-anchor
 * fluent-anchor is a web component implementation of an HTML anchor element. The fluent-components anchor supports the same visual appearances as the button component (accent, lightweight, neutral, outline, stealth) as well as a hypertext appearance for use inline with text.
 */
export class FluentAnchor extends UserInterface.ElementUI<Controller>{
  constructor(options?:TemplateInitOptions){
      super({
          type : 'fluent-anchor',
          prop : (options && options.prop ? options.prop : {}),
          childrens : (options && options.childrens ? options.childrens : []),
          proto : (options && options.proto ? options.proto : {})
      })
  }
}