import { ComponentDecorator as Component, ViewDecorator as View, componentAsModule } from '../../helpers/tugboat';

@Component({ 
	selector: 'addCardButton',
	properties: { onAdd: "&" },
  controllerAs: 'button'
})
@View({ templateUrl: 'app/components/add-card-button/add-card-button.html' })
class AddButtonController {
  addTask(task) {
    this.onAdd({'task': this.task});
    this.reset();
  }
  
  flip() {
    this.flipped = true;
  }
  
  reset() {
    this.task = "";
    this.flipped = false;
  }
}

export default componentAsModule(AddButtonController);