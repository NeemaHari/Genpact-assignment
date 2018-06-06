import React from 'react';
import { TablePagination } from 'react-pagination-table';
import PropTypes from 'prop-types';

const headers = ['Country', 'State', 'City', 'Areas'];

function TableComponent(props) {
    return (
        <div className="table-container">
            <TablePagination
                className="pagination-table"
                headers={headers}
                data={props.tableData}
                columns="country.state.city.areas"
                perPageItemCount={5}
                totalCount={props.tableData.length}
                arrayOption={[['all']]}
                />
        </div>
    );
}

TableComponent.propTypes = {
    tableData: PropTypes.array,
}

TableComponent.defaultProps = {
    tableData: [],
}

export default TableComponent;