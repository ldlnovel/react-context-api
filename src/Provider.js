import React, {Component} from 'react'
import {Provider,Consumer} from './contex.js'
/**
 * 中间组件 用于获取 初始数据 init  
 * 将数据纯放在state上 并 绑定到 Provider  上 
 * 
 * 
 * */

class DataProvider extends Component {

    static defaultProps = {
        init:{ },
        
    }

    constructor(props){

				super(props)
				
        this.state = {
            data:this.props.init,
            
            setData: data => this.setState( prevState  => ({data:Object.assign({},prevState.data , data)})),
            changeColor: data => {
								let result = this.state.data
								result.background = data
                this.setState({data:result})
            }
        }
    }

    render(){
        return(       
            <Consumer>
                {
                    context => (
                        <Provider value = {{ ...this.state, data:Object.assign({},context.data,this.state.data)}}>
                            {this.props.children}
                        </Provider>
                    )
                }
            </Consumer>
        )
    }
}


export default DataProvider