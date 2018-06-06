import { shallow } from 'enzyme';
import sinon from 'sinon';
import DropDownComponent from '../../components/drop-down-component';

describe('DropDownComponent component', () => {
    const props = {
        countries: [],
        selectedCountry: '',
        onCountryChange: sinon.spy(),
        states: [],
        selectedState: '',
        onStateChange: sinon.spy(),
        cities: [],
        selectedCity: '',
        onCityChange: sinon.spy(),
        areas: [],
        selectedAreas: [],
        onAreaChange: sinon.spy(),
    };

    const component = mount(<DropDownComponent {...props} />);

    describe('render', () => {
        it('should render Dropdown', () => {
            const dropDowns = component.find('Dropdown');
            expect(dropDowns.length).toBe(4);
        });
    });
});