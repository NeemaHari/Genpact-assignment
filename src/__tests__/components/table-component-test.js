import { shallow } from 'enzyme';
import sinon from 'sinon';
import TableComponent from '../../components/table-component';

describe('TableComponent component', () => {
    const props = {
        tableData: [],
    };

    const component = shallow(<TableComponent {...props} />);

    describe('render', () => {
        it('should render TablePagination', () => {
            const tablePagination = component.find('TablePagination');
            expect(tablePagination.length).toBe(1);
            expect(tablePagination.props().data).toBe(props.tableData);
            expect(tablePagination.props().totalCount).toBe(props.tableData.length);
        });
    });
});