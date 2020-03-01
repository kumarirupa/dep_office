import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serchFilter'
})
export class SerchFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, flag: string): any {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText;
    if(flag == 'filtermenu'){
      return items.filter( it => {
        return (
            ((it.ParentId).toString()).toLowerCase()==searchText
        )
      });
    }
  }
  
}
