import { ThemeService } from './services/theme/theme.service';

/**
 * Bootstraps the application client-side.
 */
export function bootstrap() {
	ThemeService.setTheme('default');
}
