import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserComponent from '../../components/user-component';

describe('UserComponent component', () => {
    const props = {
        getUserDetails: sinon.spy(),
        userDetails: {},
    };

    const component = shallow(<UserComponent {...props} />);

    describe('render', () => {
        it('should render TextField', () => {
            const textField = component.find('TextField');
            expect(textField.length).toBe(1);
            expect(textField.props().getUserDetails).toBeDefined;
        });

        it('should render Persona of unknown user', () => {
            const persona = component.find('Persona');
            expect(persona.length).toBe(1);
            expect(persona.props().showUnknownPersonaCoin).toBe(true);
            expect(persona.props().text).toBe('Unknown User');
        });

        it('should render Persona of known user', () => {
            component.setProps({
                userDetails: {
                    id: '2',
                },
            });
            const persona = component.find('Persona');
            expect(persona.length).toBe(1);
            expect(persona.props().secondaryText).toBe(`ID: ${props.userDetails.id}`);
        });
    });
});