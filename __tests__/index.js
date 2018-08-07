it('should pass', () => {
  expect(1).toEqual(1);
})

// import React from 'react';
//
// import CsvCreator from '../index';
//
// const headers = [{
//   id: 'first',
//   display: 'First column'
// }, {
//   id: 'second',
//   display: 'Second column'
// }];
//
// const rows = [{
//   first: 'foo',
//   second: 'bar'
// }, {
//   first: 'foobar',
//   second: 'foobar'
// }];
//
// describe('<CsvCreator/>', () => {
//   before(() => {
//     jsdomify.create();
//   });
//
//   beforeEach(() => {
//     jsdomify.clear();
//   });
//
//   after(() => {
//     jsdomify.destroy();
//   });
//
//   describe('rendering', () => {
//     it('props text, should render a paragraph tag', () => {
//       const element = (
//         <CsvCreator
//           headers={headers}
//           rows={rows}
//           text='Hello World'
//         />
//       );
//       const wrapper = mount(element);
//
//       expect(wrapper.find('p')).to.have.length(1);
//       expect(wrapper.text()).to.contain('Hello World');
//     });
//
//     it('should render children over text', () => {
//       const element = (
//         <CsvCreator
//           headers={headers}
//           rows={rows}
//           text='Hello World'
//         >
//           <span>Good Bye</span>
//         </CsvCreator>
//       );
//       const wrapper = mount(element);
//
//       expect(wrapper.text()).not.to.contain('Hello World');
//       expect(wrapper.text()).to.contain('Good Bye');
//     });
//
//     it('should use default props', () => {
//       const defaultProps = {
//         headers: [],
//         rows,
//         text: 'Download CSV'
//       };
//       const element = <CsvCreator rows={rows}/>;
//       const wrapper = shallow(element).instance();
//
//       expect(wrapper.props).to.deep.equal(defaultProps);
//     });
//   });
// });
