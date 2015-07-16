import { ComponentDecorator as Component, ViewDecorator as View, componentAsModule } from '../../helpers/tugboat';

@Component({ selector: 'kanbanApp' })
@View({ templateUrl: 'app/components/main/main.html' })
class MainController {
	constructor($router) {
		console.log("init kanban app");
		
		$router.config([
	      { path: '/', redirectTo: '/overview' },
	      { path: '/overview', component: 'overview' },
	      { path: '/board/:id', component: 'board' }
	    ]);
	}
}

export default componentAsModule(MainController);