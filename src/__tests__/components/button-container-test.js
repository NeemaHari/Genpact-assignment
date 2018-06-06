import { shallow } from 'enzyme';
import sinon from 'sinon';
import ButtonComponent from '../../components/button-component';

describe('AppContainer component', () => {
    const props = {
        writeToTable: sinon.spy(),
        resetTable: sinon.spy(),
        resetDropDowns: sinon.spy(),
    };
   
    const component = shallow(<ButtonComponent {...props} />);

    describe('render', () => {
        it('should render DefaultButton', () => {
            const buttons = component.find('DefaultButton');
            expect(buttons.length).toBe(3);
        });
    });
});