import React,{Component} from 'react';
import Menu from '../../components/menu';
import GenericItem from  '../../components/genericItem';
import CallToAction from '../../components/callToAction';
import Footer from '../../components/footer';
import renderHTML from 'react-render-html';
import './workshopItem.css'

export default class workshopItem extends Component{
    render(){
        return(
            <main>
                <div className="generic-view-container container-fluid">
                    <Menu/>
                    <div className="generic-view-title">
                        <h1>{this.props.match.params.name}</h1>
                    </div>
                </div>
                <div className="workshop-container container-fluid">
                    <span className="back-btn text-center" onClick={() => this.context.router.history.goBack()}>&larr;Back</span>
                    <p>{renderHTML(this.props.location.state.info)}</p>
                    <a href={this.props.location.state.link} className="btn">Book now</a>
                </div>
                <CallToAction/>
                <Footer/>
            </main>
        )
    }
}