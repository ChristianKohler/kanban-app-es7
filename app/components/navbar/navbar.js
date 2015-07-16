import { ComponentDecorator as Component, ViewDecorator as View, componentAsModule } from '../../helpers/tugboat';
import boardService from '../../services/boardService';

@Component({ selector: 'navbar' })
@View({ templateUrl: 'app/components/navbar/navbar.html' })
class NavbarController {
	constructor() {
		this.boards = boardService.all();
	}
}

export default componentAsModule(NavbarController);