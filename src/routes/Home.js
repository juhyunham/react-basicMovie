import React, { Component } from 'react';
import axios from "axios";
import Images from "../components/Images";
import Pagination from '@material-ui/lab/Pagination';
import './Home.css';

export const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY

class Home extends Component {
	state = {
		isLoading : true,
		images: [],
		page: 1
	}

	handleChange = async(event, value) => {
		await this.setState({...this.state , page : value })
		await this.getImages()
	};

	getImages = async () => {
		const {data: {documents}} = await axios({
			url: '/v2/search/image',
			method: 'get', 
			baseURL: 'https://dapi.kakao.com',
			headers: {'Authorization': `KakaoAK ${KAKAO_KEY}`},
			params: {
				query: 'kakao',
				size: 6,
				page: this.state.page
			}
		})

		this.setState({ ...this.state, images : documents , isLoading: false })
	}

	componentDidMount() {
		this.getImages();
	}

	render() {
		const { isLoading, images , page } = this.state
		
		return (<div className="kakao_wrap"> <ul className="kakao_list"> {
			Array.from(isLoading ? new Array(6) : images).map((item, index) => {

			return <Images key = {index} item = {item} />
		})} </ul> <Pagination count={10} page={page} onChange={this.handleChange}/> </div>);
	}
}

export default Home;