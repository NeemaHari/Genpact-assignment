import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import dropDownList from '../constants/drop-down-list';
import DropDownComponent from './drop-down-component';
import ButtonComponent from './button-component';
import TableComponent from './table-component';
import UserComponent from './user-component';
import { getUserDetails as getUserDetailsAction} from '../actions/action';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.getCountries = this.getCountries.bind(this);
        this.onCountryChange = this.onCountryChange.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.onAreaChange = this.onAreaChange.bind(this);
        this.writeToTable = this.writeToTable.bind(this);
        this.resetTable = this.resetTable.bind(this);
        this.resetDropDowns = this.resetDropDowns.bind(this);
        this.getUserDetails = this.getUserDetails.bind(this);
        this.state = {
            countries: this.getCountries(),
            states: [],
            cities: [],
            areas: [],
            selectedCountry: '',
            selectedState: '',
            selectedCity: '',
            selectedAreas: [],
            tableData: [],
        }
    }

    getCountries() {
        const countries = _.keys(dropDownList);
        return _.map(countries, (value, index) => {
            return { key: value, text: value }
        });
    }

    onCountryChange(option) {
        if (_.isEmpty(option)) {
            this.setState({
                selectedCountry: '',
            });
            return;
        }
        const states = _.keys(dropDownList[option.key]);
        this.setState({
            states: _.map(states, (value, index) => {
                return { key: value, text: value }
            }),
            cities: [],
            areas: [],
            selectedCountry: option.key,
        });
        this.dropDownComponent.stateDropDown.props.onChanged({});
        this.dropDownComponent.cityDropDown.props.onChanged({});
        this.dropDownComponent.areaDropDown.props.onChanged({});
    }

    onStateChange(option) {
        if (_.isEmpty(option)) {
            this.setState({
                selectedState: '',
            });
            return;
        }
        const cities = _.keys(dropDownList[this.state.selectedCountry][option.key]);
        this.setState({
            cities: _.map(cities, (value, index) => {
                return { key: value, text: value }
            }),
            areas: [],
            selectedState: option.key,
        });
        this.dropDownComponent.cityDropDown.props.onChanged({});
        this.dropDownComponent.areaDropDown.props.onChanged({});
    }

    onCityChange(option) {
        if (_.isEmpty(option)) {
            this.setState({
                selectedCity: '',
            });
            return;
        }
        const areas = dropDownList[this.state.selectedCountry][this.state.selectedState][option.key];
        this.setState({
            areas: _.map(areas, (value, index) => {
                return { key: value, text: value }
            }),
            selectedCity: option.key,
        });
        this.dropDownComponent.areaDropDown.props.onChanged({});
    }

    onAreaChange(option) {
        if (_.isEmpty(option)) {
            this.setState({
                selectedAreas: [],
            });
            return;
        }
        let selectedAreas = _.assign([], this.state.selectedAreas);
        if (option.selected) {
            selectedAreas.push(option.key);
        } else {
            _.remove(selectedAreas, (value) => value === option.key);
        }
        this.setState({
            selectedAreas,
        });
    }

    writeToTable() {
        let tableData = _.assign([], this.state.tableData);
        tableData.push({
            country: this.state.selectedCountry, state: this.state.selectedState,
            city: this.state.selectedCity, areas: this.state.selectedAreas,
        });
        this.setState({
            tableData,
        });
    }

    resetTable() {
        this.setState({
            tableData: [],
        });
    }

    resetDropDowns() {
        this.setState({
            states: [],
            cities: [],
            areas: [],
        });
        this.dropDownComponent.countryDropDown.props.onChanged({});
        this.dropDownComponent.stateDropDown.props.onChanged({});
        this.dropDownComponent.cityDropDown.props.onChanged({});
        this.dropDownComponent.areaDropDown.props.onChanged({});
    }

    getUserDetails(event) {
        if(event.charCode === 13) {
            this.props.getUserDetails(event.target.value);
        }
    }

    render() {
        return (
            <div>
                <DropDownComponent
                    ref={(el) => { this.dropDownComponent = el; } }
                    countries={this.state.countries}
                    selectedCountry={this.state.selectedCountry}
                    onCountryChange={this.onCountryChange}
                    states={this.state.states}
                    selectedState={this.state.selectedState}
                    onStateChange={this.onStateChange}
                    cities={this.state.cities}
                    selectedCity={this.state.selectedCity}
                    onCityChange={this.onCityChange}
                    areas={this.state.areas}
                    selectedAreas={this.state.selectedAreas}
                    onAreaChange={this.onAreaChange}
                    />
                <ButtonComponent 
                    writeToTable={this.writeToTable}
                    resetTable={this.resetTable}
                    resetDropDowns={this.resetDropDowns}
                    />
                <TableComponent 
                    tableData={this.state.tableData}
                    />
                <div className="border"> </div>
                <UserComponent 
                    getUserDetails={this.getUserDetails}
                    userDetails={this.props.userDetails}
                    />
            </div>
        );
    }
}

function mapStateToProps(state) {
  return ({
    userDetails: _.get(state, 'user.userDetails'),
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUserDetails: getUserDetailsAction,
  }, dispatch);
}

AppContainer.propTypes = {
    userDetails: PropTypes.object,
    getUserDetails: PropTypes.func.isRequired,
};

AppContainer.defaultProps = {
    userDetails: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);