import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
 return (
   class extends Component {
     state = {
       Component: null
     }
     componentDidMount(){
       importComponent()
       .then(cmp=>{
         this.setState({Component: cmp.default});
       })
       .catch(err => console.log(err))
     }
     render(){
       const { Component } = this.state;
       return Component ? <Component {...this.props} /> : null; 
     }
   }
 )
}

export default asyncComponent;