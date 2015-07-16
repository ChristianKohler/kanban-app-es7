import angular from 'angular';
import router from 'angular/router';

import config from './app.config';

import Main from './components/main/main';
import Navbar from './components/navbar/navbar';
import Overview from './components/overview/overview';
import Board from './components/board/board';
import List from './components/list/list';
import AddCardButton from './components/add-card-button/add-card-button';

router.name = 'ngNewRouter';

let modules = [
	router,
	Main,
	Navbar,
	Overview,
	Board,
	List,
	AddCardButton
];

export default angular
	.module('kanban-app', modules.map(m => m.name))
	.config(config);