import { useEffect, useState } from "react";
import { MyCard } from "./components/MyCard";
import { GetMovieList, GetSeacrhList } from "./assets/api";
import './assets/app.css';

function App() {
  const [getMoviePopular, setMoviePopular] = useState([]);
  useEffect(()=>{
    const getMovie = async() => {
      const getMoviePop = await GetMovieList();
      setMoviePopular(getMoviePop.data.results);
    }
    getMovie();
  }, []);


  const ShowMoviePopular = () => {
    return getMoviePopular.map((val, i) => {
      return(
        <MyCard
          key={i}
            img={`https://image.tmdb.org/t/p/w500${val.poster_path}`}
            title={val.title}
          />
      )
    })
  }

  const search = async(q) => {
    if (q.length > 2) {
      const query = await GetSeacrhList(q);
      setMoviePopular(query.data.results);
    }
  }

  const darkMode = () => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    html.classList.toggle('dark');
    body.classList.toggle('dark:bg-slate-800');
  }

  return (
    <div className="">
      <div className="fixed -mt-3">
        <span className="mr-1 ml-6 dark:text-slate-100">Light</span>
        <input type="checkbox" name="" id="darkmode" hidden/>
        <label htmlFor="darkmode" className="inline-block">
        <div className="w-8 h-4 bg-slate-500 rounded-full px-0.5 flex items-center cursor-pointer" onClick={darkMode}>
          <div className="w-3 h-3 bg-slate-100 rounded-full btn-circle"></div>
        </div>
          </label>
        <span className="ml-1 dark:text-slate-100">Dark</span>
      </div>
      <div className="my-9 w-[85%] text-center mx-auto">
        <h1 className="text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-semibold mb-3">WEBSITE FILM</h1>
        <form>
          <input type="text" onChange={({target}) => search(target.value)} placeholder="Masukan Keyword.." className="w-[95%] h-9 bg-transparent border rounded-md dark:text-slate-300 "/>
        </form>
        <div className="flex flex-wrap mx-auto justify-center">
          <ShowMoviePopular/>
        </div>
      </div>
    </div>
  );
}

export default App;
