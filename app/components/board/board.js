import { controllerAsModule } from '../../helpers/tugboat';
import boardService from '../../services/boardService';

class BoardController {
	constructor($routeParams) {
		this.board = boardService.board(parseInt($routeParams.id, 10));
	}
}

export default controllerAsModule(BoardController);