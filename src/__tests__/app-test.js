import { shallow } from 'enzyme';
import App from '../app';

describe('App component', () => {
    const props = {

    };
    const component = shallow(<App {...props} />);

    describe('render', () => {
        it('should render AppContainer', () => {
            expect(component.find('AppContainer').exists).toBe(true);
        });
    });
});