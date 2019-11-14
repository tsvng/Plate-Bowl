import { checkUser } from './app.js';

if (checkUser() == 'not authenticated') {
	window.location.replace("https://master.d1artn8nksk20o.amplifyapp.com/index.html");
}
