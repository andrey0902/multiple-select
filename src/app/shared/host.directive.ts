import { ComponentFactory, ComponentFactoryResolver, Directive, Input, ViewContainerRef } from '@angular/core';
import { TestModalComponent } from '../test-modal/test-modal.component';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {
  @Input() public data: any;
  constructor(private viewContainer: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public insert() {
    const component: ComponentFactory<TestModalComponent> = this.componentFactoryResolver.resolveComponentFactory(TestModalComponent);
    console.log('component', component);
    this.patchData(component);
    const done = this.viewContainer.createComponent(component);
    done.instance.viewContainer = this.viewContainer;
    done.instance.data = this.data;
    console.log('viewContainer', this.viewContainer);
    console.log('this.data', this.data);
  }

  public patchData(component: ComponentFactory<TestModalComponent>) {
    for (const key in component.inputs) {
      console.log('key', component.inputs[key].propName);
    }
  }

  public clear() {
    this.viewContainer.clear();
  }

}
