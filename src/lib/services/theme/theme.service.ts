import { ServiceMixin } from '../base.service-mixin';
import type { Theme } from './types';

export class ThemeService extends ServiceMixin<ThemeService>() {
	static setTheme(theme: Theme) {
		document.documentElement.setAttribute('data-theme', theme);
	}
}
