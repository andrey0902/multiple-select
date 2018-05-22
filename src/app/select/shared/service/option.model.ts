export class OptionModel {
 public id: any;
  public  name: string;
  public  isChecked: boolean;
  public disabled?: boolean;
  public isLabel?: boolean;
  public parentId?: any;
  public  params?: any;
  public  classes?: string;
  public  image?: string;
  public  value?: any;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.value = data.value;
    this.isChecked = false;
  }

}
