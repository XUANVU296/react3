import React, { Component } from 'react';
import Alert from './Warning';
import Calculator from './Calculator';
import StudentInfoComponent from './Student';
import Selection from './Selection';
import Time from './Time';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     // Khởi tạo state với key 'isExpand' và giá trị là false
//     this.state = {
//       isExpand: false
//     };
//   }

//   // Hàm xử lý sự kiện để cập nhật giá trị của 'isExpand'
//   handleToggleExpand = () => {
//     // Sử dụng setState để cập nhật giá trị 'isExpand' ngược lại
//     this.setState((prevState) => ({
//       isExpand: !prevState.isExpand
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <h1>Xin  chào  bạn</h1>
//         {/* Kiểm tra giá trị 'isExpand' để hiển thị nút tương ứng */}
//         {this.state.isExpand ? (
//           <div>
//             <button onClick={this.handleToggleExpand}>Đóng giới thiệu</button>
//             <p>Xin  chào  Nguyễn  Xuân  Vũ xin  hỏi bạn đến từ đâu!</p>
//           </div>
//         ) : (
//           <button onClick={this.handleToggleExpand}>Xem giới thiệu</button>
//         )}
//       </div>
//     );
//   }
// }

// export default App;





function App(props) {
  return (
    <div>
      {/* <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
      <Calculator /> */}
      {/* <StudentInfoComponent /> */}
      {/* <Selection/> */}
      <Time/>
    </div>
  );
}

export default App




// // class App extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       header: "header from state...",
// //       content: "content from state..."
// //     }
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <h2>{this.state.header}</h2>
// //         <h2>{this.state.content}</h2>
// //       </div>
// //     );
// //   }
// // }
// // export default App;


// class Color extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
//   changeColor = () => {
//     this.setState({color: "blue"});
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}.
//         </p>
//         <button
//           type="button"
//           onClick={this.changeColor}
//         >Change color</button>
//       </div>
//     );
//   }
// }

// export default Color;





// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: 0
//     };
//     this.setNewNumber = this.setNewNumber.bind(this);
//   }
//   setNewNumber() {
//     this.setState({ data: this.state.data + 1 });
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.setNewNumber}>INCREMENT</button>
//         <Content myNumber={this.state.data}></Content>
//       </div>
//     );
//   }
// }
// class Content extends React.Component {
//   UNSAFE_componentWillMount() {
//     console.log("Component WILL MOUNT!");
//   }
//   componentDidMount() {
//     console.log("Component DID MOUNT!");
//   }
//   UNSAFE_componentWillReceiveProps(newProps) {
//     console.log("Component WILL RECIEVE PROPS!");
//   }
//   shouldComponentUpdate(newProps, newState) {
//     return true;
//   }
//   UNSAFE_componentWillUpdate(nextProps, nextState) {
//     console.log("Component WILL UPDATE!");
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("Component DID UPDATE!");
//   }
//   componentWillUnmount() {
//     console.log("Component WILL UNMOUNT!");
//   }
//   render() {
//     return (
//       <div>
//         <h3>{this.props.myNumber}</h3>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: "", inputText: "", mode: "view" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSave = this.handleSave.bind(this);
//     this.handleEdit = this.handleEdit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ inputText: e.target.value });
//   }

//   handleSave() {
//     this.setState({ text: this.state.inputText, mode: "view" });
//   }

//   handleEdit() {
//     this.setState({ mode: "edit" });
//   }

//   //Để render ra các phương thức, ta kiểm tra các thuộc tính mode
//   render() {
//     if (this.state.mode === "view") {
//       return (
//         <div>
//           <p>Text: {this.state.text}</p>
//           <button onClick={this.handleEdit}>Edit</button>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <p>Text: {this.state.text}</p>
//           <input onChange={this.handleChange} value={this.state.inputText} />
//           <button onClick={this.handleSave}>Save</button>
//         </div>
//       );
//     }
//   }
// }
// export default App;

// State & lifecycle:

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isExpand:false,
//     }
//   }
//   handler = () => {
//     this.setState((prevstate) => ({
//       isExpand: !prevstate.isExpand,
//     }))
//   }
//   render() {
//     return (
//       <div>
//         <h1>Conditional Rendering</h1>
//         {this.state.isExpand ? (
//           <>
//           <button onClick={this.handler}>Đóng giới thiệu</button>
//           <p>Nội dung giới thiệu</p>
//           </>
//         ):(
//           <button onClick={this.handler}>Xem giới thiệu</button>
//         )}
//       </div>
//     );
//   }
// }

// export default App;





// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//       item: ''
//     }
//   }
//   handleChange = (event) => {
//     this.setState({ item: event.target.value });
//   }
//   handleAddItem = () => {
//     if (this.state.item.trim() !== '') {
//       this.setState((prevstate) => ({
//         list: [...prevstate.list, prevstate.item],
//         item: '',
//       }));
//     } else {
//       alert('Khong kha dung');
//     }
//   }
//   mapList = () => {
//     if (this.state.list.length > 0) {
//       return this.state.list.map((item, index) => (
//         <tr key={index}>
//           <td>{index + 1}</td>
//           <td>{item}</td>
//         </tr>
//       ));
//     } else {
//       return (
//         <tr>
//           <td colSpan="2">List is empty</td>
//         </tr>
//       );
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>Danh sach cong viec</h1>
//         <input onChange={this.handleChange} value={this.state.item} />
//         <button onClick={this.handleAddItem}>Add</button>
//         <table border={1}>
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Công việc</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.mapList()}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default App;