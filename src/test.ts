import Thorium , { Components , Controller } from 'thoriumjs';
import { FluentButton , FluentDataGrid } from './';

export class DetailsListHeader extends Components.Nav<Controller>{
  constructor(){
    super({
      childrens : [
        new FluentButton({

        })
      ]
    })
  }
}

export default class EditableDetailsList extends Components.Div<Controller>{
  constructor(){
    super({
      childrens : [
        new DetailsListHeader(),
        new FluentDataGrid({
          prop : {},
          proto : {
          }
        } , [
          {
            name : 'benoit',
            age : '29'
          },
          {
            name : 'guillaume',
            age : '28'
          },

        ])
      ]
    })
  }
}


