import React,{Component} from 'react';
import Menu from '../../components/menu';
import GenericItem from  '../../components/genericItem';
import CallToAction from '../../components/callToAction';
import Footer from '../../components/footer';



export default class Item extends Component{
    render(){
        return(
            <main>
                <div className="generic-view-container container-fluid">
                    <Menu/>
                    <div className="generic-view-title">
                        <h1>{this.props.match.params.name}</h1>
                    </div>
                </div>
                <GenericItem content={this.props.location.state.info}/>
                <CallToAction/>
                <Footer/>
            </main>
        )
    }
}