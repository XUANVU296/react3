import React, { Component } from 'react';

class StudentInfoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newId: '',
            newName: '',
            newAge: '',
            newAddress: '',
            students: [
                { id: 1, name: 'Xuân Vũ', age: 20, address: 'Gio Linh' },
                { id: 2, name: 'Lếu Láo', age: 22, address: 'Cồn Cỏ' },
                // Thêm thông tin sinh viên khác nếu cần
            ],
        };
    }

    handleIdChange = (e) => {
        this.setState({ newId: e.target.value });
    };

    handleNameChange = (e) => {
        this.setState({ newName: e.target.value });
    };

    handleAgeChange = (e) => {
        this.setState({ newAge: e.target.value });
    };

    handleAddressChange = (e) => {
        this.setState({ newAddress: e.target.value });
    };

    newAdd = () => {
        // Sử dụng this.state.newItem và this.setState để cập nhật state
        // Đảm bảo rằng hàm này đã được bind đúng cách khi sử dụng nó trong sự kiện onClick
        const newItem = {
            id: this.state.newId,
            name: this.state.newName,
            age: this.state.newAge,
            address: this.state.newAddress,
        };

        // Thêm newItem vào danh sách students
        this.setState({ students: [...this.state.students, newItem] });

        // Đặt giá trị của các trường về trống
        this.setState({ newId: '' });
        this.setState({ newName: '' });
        this.setState({ newAge: '' });
        this.setState({ newAddress: '' });
    };

    render() {
        return (
            <div>
                ID: <input type="text" name="newid" value={this.state.newId} onChange={this.handleIdChange} /><br /><br />
                NAME: <input type="text" name="newname" value={this.state.newName} onChange={this.handleNameChange} /><br /><br />
                AGE: <input type="text" name="newage" value={this.state.newAge} onChange={this.handleAgeChange} /><br /><br />
                ADDRESS: <input type="text" name="newaddress" value={this.state.newAddress} onChange={this.handleAddressChange} /><br /><br />
                <input type="submit" onClick={this.newAdd} value="Submit" />
                <h1>Student Information</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentInfoComponent;