import {UserInterface , Controller} from 'thoriumjs';

interface TemplateInitOptions{
  prop?:Record<string,string|number|boolean>;
  childrens?:UserInterface.ElementUI<Controller>[];
  proto?:Record<string,any>;
}

export class FluentTabs extends UserInterface.ElementUI<Controller>{
  constructor(options?:TemplateInitOptions){
      super({
          type : 'fluent-tabs',
          prop : (options && options.prop ? options.prop : {}),
          childrens : (options && options.childrens ? options.childrens : []),
          proto : (options && options.proto ? options.proto : {})
      })
  }
}

export class FluentTab extends UserInterface.ElementUI<Controller>{
  constructor(options?:TemplateInitOptions){
      super({
          type : 'fluent-tab',
          prop : (options && options.prop ? options.prop : {}),
          childrens : (options && options.childrens ? options.childrens : []),
          proto : (options && options.proto ? options.proto : {})
      })
  }
}

export class FluentTabPanel extends UserInterface.ElementUI<Controller>{
  constructor(options?:TemplateInitOptions){
      super({
          type : 'fluent-tab-panel',
          prop : (options && options.prop ? options.prop : {}),
          childrens : (options && options.childrens ? options.childrens : []),
          proto : (options && options.proto ? options.proto : {})
      })
  }
}