import {model} from './model';
import {Site} from './classes/site';
import {SideBar} from "./classes/sidebar";
import './styles/main.css'

const site = new Site('#site')

site.render(model)

console.log('Test')

const sidebar = new SideBar('#panel')