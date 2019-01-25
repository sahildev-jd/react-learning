import React from 'react';
import axios from 'axios';
// import User from './User';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Users extends React.Component {
	constructor() {
		super();
		this.state = {
			userData: [],
			columnDefs: [{
				headerName: 'Personal Details',
				children: [{
					headerName: 'First Name',
					field: 'details.personal.firstname',
					width: 150,
				}, {
					headerName: 'Last Name',
					field: 'details.personal.lastname',
					width: 150
				}, {
					headerName: 'Gender',
					field: 'details.personal.gender',
					width: 100
				}, {
					headerName: 'Age',
					field: 'details.personal.age',
					width: 100
				},{
					headerName: 'ID',
					field: 'id',
					hide: true,
					rowGroup: true
				}]
			}, {
				headerName: 'Professional Details',
				children: [{
					headerName: 'Company',
					field: 'company',
					width: 100
				}, {
					headerName: 'Experience',
					field: 'exp',
					width: 100
				}, {
					headerName: 'Role',
					field: 'role',
					width: 100
				}]
			}]
		};
		axios.get('https://my.api.mockaroo.com/user.json?key=f84bcd60').then(response => {
			response.data.forEach((element) => {
				element.details.personal = element.details.personal[0];
				element.details.professional = {companies: element.details.professional[0].company};

			});
			console.log(response.data);
			this.setState({
				columnDefs: this.state.columnDefs,
				rowData: response.data
			});
		});
	}

	// updateData = (fieldToUpdate) => {
	//
	// };

	render() {
		return (
			<div className="ag-theme-balham"
				 style={{
					 height: '80%',
					 width: '80%'
				 }}>
				<AgGridReact
					columnDefs={this.state.columnDefs}
					rowData={this.state.rowData}>
				</AgGridReact>
			</div>
		)
	}
}

export default Users;




