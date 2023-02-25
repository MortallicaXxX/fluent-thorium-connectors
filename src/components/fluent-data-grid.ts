import {UserInterface , Controller} from 'thoriumjs';

interface TemplateInitOptions{
  prop?:Record<string,string|number|boolean>;
  childrens?:UserInterface.ElementUI<Controller>[];
  proto?:Record<string,any>;
}

export type FluentDataGridRowData = Record<string,string>[]

export class FluentDataGrid extends UserInterface.ElementUI<Controller>{
  constructor(options?:TemplateInitOptions,data?:FluentDataGridRowData){
      super({
          type : 'fluent-data-grid',
          prop : (options && options.prop ? options.prop : {}),
          childrens : (options && options.childrens ? options.childrens : []),
          proto : {
              ...(options && options.proto ? options.proto : {}),
              AfterInitialise(){
                  if(data)this.rowsData = data;
                  if(options && options.proto && options.proto.AfterInitialise){
                      options.proto.AfterInitialise();
                  }
              }
          }
      })
  }
}