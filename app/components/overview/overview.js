import { controllerAsModule } from '../../helpers/tugboat';
import boardService from '../../services/boardService';

class OverviewController {
	constructor() {
		console.log("overview controller init");
		this.boards = boardService.all();
	}
}

export default controllerAsModule(OverviewController);