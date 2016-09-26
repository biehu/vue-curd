import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import App from './components/App';
import Curd from './components/Curd';

Vue.use(Router);

Vue.use(VueResource);
Vue.http.options.root = '/root';

var router = new Router();
router.map({
	'/curd': {
		component: Curd
	}
});

router.redirect({
	'*': '/curd'
});

router.start(App, '#app');
