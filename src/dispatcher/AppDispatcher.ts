import Flux = require('flux');
import AppAction from '../interfaces/AppAction';



class AppDispatcher extends Flux.Dispatcher<any>
{
    // Произошло изменение
    handleAction(appAction: AppAction):void {
        let action = {
            source: 'VIEW_ACTION',
            action: appAction
        };
        this.dispatch(action);
    }
}

export default new AppDispatcher;
