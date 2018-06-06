import { shallow } from 'enzyme';
import sinon from 'sinon';
import AppContainer from '../../components/app-container';

describe('AppContainer component', () => {
    const props = {
        userDetails: { id: '1' },
        getUserDetails: sinon.spy(),
    };
    const state = {
        countries: [],
        states: [],
        cities: [],
        areas: [],
        selectedCountry: '',
        selectedState: '',
        selectedCity: '',
        selectedAreas: [],
        tableData: [],
    }
    const component = shallow(<AppContainer {...props}{...state} />);

    describe('render', () => {
        it('should render DropDownComponent', () => {
            const dropDownComponent = component.find('DropDownComponent');
            expect(dropDownComponent.exists).toBe(true);
            expect(dropDownComponent.props().countries).toBe(state.countries);
            expect(dropDownComponent.props().selectedCountry).toBe(state.selectedCountry);
            expect(dropDownComponent.props().onCountryChange).toBeDefined;
            expect(dropDownComponent.props().states).toBe(state.states);
            expect(dropDownComponent.props().selectedState).toBe(state.selectedState);
            expect(dropDownComponent.props().onStateChange).toBeDefined;
            expect(dropDownComponent.props().cities).toBe(state.cities);
            expect(dropDownComponent.props().selectedCity).toBe(state.selectedCity);
            expect(dropDownComponent.props().onCityChange).toBeDefined;
            expect(dropDownComponent.props().areas).toBe(state.areas);
            expect(dropDownComponent.props().selectedAreas).toBe(state.selectedAreas);
            expect(dropDownComponent.props().onAreaChange).toBeDefined;
        });

        it('should render ButtonComponent', () => {
            const buttonComponent = component.find('ButtonComponent');
            expect(buttonComponent.exists).toBe(true);
            expect(buttonComponent.props().writeToTable).toBeDefined;
            expect(buttonComponent.props().resetTable).toBeDefined;
            expect(buttonComponent.props().resetDropDowns).toBeDefined;
        });

        it('should render TableComponent', () => {
            const tableComponent = component.find('TableComponent');
            expect(tableComponent.exists).toBe(true);
            expect(tableComponent.props().tableData).toBe(state.tableData);
        });

        it('should render UserComponent', () => {
            const userComponent = component.find('UserComponent');
            expect(userComponent.exists).toBe(true);
            expect(userComponent.props().getUserDetails).toBeDefined;
            expect(userComponent.props().userDetails).toBe(props.userDetails);
        });
    });
});