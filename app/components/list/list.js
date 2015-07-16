import { ComponentDecorator as Component, ViewDecorator as View, componentAsModule } from '../../helpers/tugboat';
import boardService from '../../services/boardService';

@Component({ 
	selector: 'list',
	properties: { id: "=" } 
})
@View({ templateUrl: 'app/components/list/list.html' })
class ListController {
	constructor() {
		this.list = boardService.list(this.id);
	}
	
	addTask(task) {
		this.list.tasks.push(task);
	}
}

export default componentAsModule(ListController);