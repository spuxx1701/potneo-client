// export interface IService {
// 	get instance(): IService;
// }

export function ServiceMixin<TService>() {
	class Service {
		private static _instance?: TService;

		// We protect the constructor to prevent `Service` from being instantiated
		protected constructor() {}

		/**
		 * Returns the current instance of the service or creates a new one if needed.
		 */
		public static get instance(): TService {
			if (!Service._instance) {
				Service._instance = new this() as TService;
			}
			return Service._instance as TService;
		}

		/**
		 * Destroy the current instance of the service.
		 */
		public static destroy() {
			Service._instance = undefined;
		}
	}

	return Service;
}
