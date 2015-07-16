function ComponentDecorator(value) {
  return function decorator(target) {
    target.$config = value;
  };
}

function ViewDecorator(value) {
  return function decorator(target) {
    target.$view = value;
  };
}

function controllerAsModule(controller) {
  return angular.module(`module-for-${controller.name}`, []).controller(controller.name, controller);
}

function componentAsModule(component) {
  let selector = component.$config.selector;
  let scope = component.$config.properties || {};
  let controllerAs = component.$config.controllerAs || 'ctrl';
  let template = component.$view.template;
  let templateUrl = component.$view.templateUrl;
  	
	return angular.module(`module-for-${selector}`, []).directive(selector, function() {
    let ddo = {
			bindToController: true,
      controllerAs: controllerAs,
      scope: scope,
      template: template,
      templateUrl: templateUrl,
      controller: component
		};	  
        
    return ddo;
	});
}

export { ComponentDecorator, ViewDecorator, componentAsModule, controllerAsModule };