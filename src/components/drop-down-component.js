import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

class DropDownComponent extends Component {
    render() {
        return (
            <div className="dropdown-container">
                <Dropdown
                    ref={(el) => { this.countryDropDown = el; } }
                    label="Country"
                    placeHolder="Select"
                    options={this.props.countries}
                    selectedKey={this.props.selectedCountry}
                    onChanged={this.props.onCountryChange}
                    />
                <Dropdown
                    ref={(el) => { this.stateDropDown = el; } }
                    label="State"
                    placeHolder="Select"
                    options={this.props.states}
                    selectedKey={this.props.selectedState}
                    onChanged={this.props.onStateChange}
                    />
                <Dropdown
                    ref={(el) => { this.cityDropDown = el; } }
                    label="City"
                    placeHolder="Select"
                    options={this.props.cities}
                    selectedKey={this.props.selectedCity}
                    onChanged={this.props.onCityChange}
                    />
                <Dropdown
                    ref={(el) => { this.areaDropDown = el; } }
                    label="Areas"
                    placeHolder="Select"
                    multiSelect
                    options={this.props.areas}
                    selectedKeys={this.props.selectedAreas}
                    onChanged={this.props.onAreaChange}
                    />
            </div>
        );
    }
}

DropDownComponent.propTypes = {
    countries: PropTypes.array,
    selectedCountry: PropTypes.string,
    onCountryChange: PropTypes.func.isRequired,
    states: PropTypes.array,
    selectedState: PropTypes.string,
    onStateChange: PropTypes.func.isRequired,
    cities: PropTypes.array,
    selectedCity: PropTypes.string,
    onCityChange: PropTypes.func.isRequired,
    areas: PropTypes.array,
    selectedAreas: PropTypes.array,
    onAreaChange: PropTypes.func.isRequired,
};

DropDownComponent.defaultProps = {
    countries: [],
    selectedCountry: '',
    states: [],
    selectedState: '',
    cities: [],
    selectedCity: '',
    areas: [],
    selectedAreas: [],
}

export default DropDownComponent;