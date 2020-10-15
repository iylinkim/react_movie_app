import React from 'react';
// import PropTypes from "prop-types";
import axios from 'axios'; //axios 설치후 import
import Movie from "./Movie.js";
import "./App.css";

/*########## function component ##########*/

// function Food({name ,picture, rating}){ // {fav}는 props.fav랑 동일한 값
//   return <div>
//     <h1>I love {name}!!</h1>
//     <img src={picture} alt={name}/>
//     <h4>{rating} / 5.0</h4>
//   </div>
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
//   //isRequired가 필수는 아님
//   // string과 number 이외에도 여러 옵션 존재함
// }

// const foodILike = [
//   {
//     id:1,
//     name: "kimchi",
//     image:
//       "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
//     rating:5
//   },
//   {
//     id:2,
//     name: "donkasu",
//     image:
//       "https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2017/07/donkasu-02.jpg?resize=1000%2C667",
//     rating:4.5
//   },
//   {
//     id:3,
//     name: "samgyeopsal",
//     image:
//       "https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304",
//     rating:3.4
//   },
//   {
//     id:4,
//     name: "bulgogi",
//     image:
//       "https://recipe1.ezmember.co.kr/cache/recipe/2016/12/30/df939769792632a48a0eba8bc895e8601.jpg",
//     rating:2.5
//   },
//   {
//     id:5,
//     name: "nangmyeon",
//     image:
//       "https://m.yorivery.com/data/goods/20/05/21//1000000878/1000000878_detail_143.jpg",
//     rating:4
//   }
// ];

// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//       <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
//       ))}
//     </div>
//   );
// }


/*########## class component ##########*/
// class App extends React.Component{ //App component는 React component로 부터 확장됨
//   //class react component는 return을 가지고 있지 않음
  
//   constructor(props){
//     super(props);
//     console.log("hello");
//   }
//   state = {
//     count: 0
//   }; // 바꿀 데이터를 state 안에 넣음
//   add = () => {
//     // this.setState({count: this.state.count + 1}) this.state대신에 current로 this.state값 받아올 수 있음
//     //this.state는 외부의 값에 의존하게 되므로 좋은 방법이 아님!!
//     //this.state는 외부의 state의 값이지만 current를 사용하게 되면 현재 state값 받아올 수 있음
//     this.setState(current => ({count: current.count + 1}))
//   };
//   minus = () => {
//     // this.setState({count: this.state.count - 1})
//     this.setState(current => ({count: current.count - 1}))
//   };
//   componentDidMount(){
//     console.log("Component rendered!");
//   }
//   componentDidUpdate(){
//     console.log("I just updated!");
//   }

//   render(){
//     console.log("I'm rendering");
//   return (
//     <div>
//       <h1>The number is : {this.state.count}</h1>
//       <button onClick={this.add}>ADD</button>
//       <button onClick={this.minus}>Minus</button>
//     </div>
//   );
//   }
// }


// class App extends React.Component{
//   state = {
//     isLoading: true,
//     movies: []
//   };

//   getMovies = async () => {
//      //async를 사용하지 않으면 await 사용할 수 없음
//     // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
//     // console.log(movies.data.data.movies);

//     //movies.data.data.movies 대신 {data: {data: {movies}}}
//     const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
//     this.setState({movies, isLoading: false}); // 하나의 setState에서 두개의 state를 변경함
//     console.log({movies});
//   };

//   componentDidMount(){
//     // setTimeout(() => {
//     //   this.setState({isLoading : false})
//     // },6000)

//     //Fetching Movies from API
//     this.getMovies();
//   }
//  render(){
//    const {isLoading, movies} = this.state;
//     return (<div>
//       {isLoading 
//       ? "LOADING..." 
//       : movies.map(movie => (
//        <Movie 
//         key={movie.id} 
//         id={movie.id} 
//         year={movie.year} 
//         title={movie.title} 
//         summary={movie.summary} 
//         poster={movie.medium_cover_image}
//        />
//        ))}
//   </div>
//   );
//  }
// }

class App extends React.Component{
  state = {
    isLoading: true,
    movies : []
  }
  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log({movies});
    this.setState({isLoading:false, movies});
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
  const {isLoading, movies} = this.state;
  return <section className="container">
    {isLoading
    ? <div className="loader"><span className="loader_text">LOAIDNG...</span></div>
    : <div className="movies">
        {movies.map(movie => (
          <Movie
          key={movie.id} 
          id={movie.id} 
          year={movie.year}
          title={movie.title} 
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          />
        ))}
    </div> 
    }
    </section>;
  }
}

export default App;
